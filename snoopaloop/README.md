# Snoopaloop #

This is just a quick and fun little script you can add to your website to display a random quote related to a keyword you specify and written in the style of the Snoop D-O double G.

To use simply plug in your OpenAI API key and add the script to the page where you want Snoop to drop some knowledge.

## OpenAI API Parameters ##

Here's an explanation of each parameter used in the JSON body for the OpenAI API request:

model: The name of the AI model used for generating the text. In this case, 'text-davinci-003' is the model used.

prompt: The text prompt given to the AI model as input. In this case, it's a template string asking the AI to write a quote related to the keyword in the style of Snoop Dogg.

max_tokens: The maximum number of tokens (words or word pieces) that the AI model will generate in the response. This helps limit the length of the generated text. In this example, it's set to 50, meaning the generated text will not exceed 50 tokens.

n: The number of different responses (choices) the AI model should generate for the given prompt. In this case, it's set to 1, meaning the AI will generate only one response.

stop: A string, array of strings, or null that tells the AI model when to stop generating text. If set to a string or array of strings, the model stops generating text when it encounters the specified string(s). If set to null, the model will continue generating text until it reaches the max_tokens limit.

temperature: A value between 0 and 1 that controls the randomness of the AI model's output. Lower values make the output more focused and deterministic, while higher values make it more diverse and creative. In this example, it's set to 0.1, which means the generated text will be more focused and deterministic.
