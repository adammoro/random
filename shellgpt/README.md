# ShellGPT #

This is a simple shell script that sends a prompt to OpenAI's Completions API and returns the response right in the shell.


## Setup ##

To use this script simply add it to a folder in your PATH, set your OpenAI API key, and make sure the file is executable. After that you can simply run `gpt "insert prompt here"` and get a response from the OpenAI model you set in the script. 

You can set and forget your OpenAI API key by adding it as an environment variable. To do that open `~/.bashrc`, scroll to the bottom, and add the following line with your key:

`export OPENAI_API_KEY="ADD KEY HERE"`

Don't forget to make the gpt file executable with the following command:

`chmod +x /path/to/gpt`


## Important Note ##

OpenAI's models are great coders as I'm sure you know. If the API returns any code or special characters in a response, there is no risk as long as the script only displays the output and does not execute it. 

In the provided script, the API response is only printed to the terminal without being executed. The line responsible for displaying the extracted text is:

`echo "$RESPONSE" | jq -r '.choices[0].text'`

The echo command is used to print the text, and jq is used to extract the relevant part of the API response. There is no code execution involved in this process, so it's safe even if the API response contains code or special characters.

That said, I am not responsible if your machine breaks running this script.
