// Replace YOUR_API_KEY with your actual OpenAI API key
const OPENAI_API_KEY = 'ENTER YOUR OPENAI API KEY HERE';
// Replace 'Tupac' with your desired keyword to base the quote on
const KEYWORD = 'Tupac'; 

//
// That's it! No need to mess with anything else. 
// If you want to change the OpenAI settings, those start on Line 19.
// See README.md for details about each OpenAI API parameter.
//

async function fetchSnoopQuote(keyword) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: `Write a quote related to ${keyword} in the style of Snoop Dogg.`,
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 0.7
    })
  };

  try {
    const response = await fetch('https://api.openai.com/v1/completions', requestOptions);
    const data = await response.json();
    return data.choices[0].text.trim();
  } catch (error) {
    console.error('Error fetching quote:', error);
    return 'Error generating quote. Please try again later.';
  }
}

async function displaySnoopQuote() {
  const quoteElement = document.getElementById('snoop-quote');
  const quote = await fetchSnoopQuote(KEYWORD);
  quoteElement.innerText = quote;
}

displaySnoopQuote();

