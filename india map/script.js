document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
      { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
      { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
      { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
      { quote: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" }
    ];
  
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    const newQuoteButton = document.querySelector("button:first-of-type");
    const tweetButton = document.querySelector("button:last-of-type");
  
    const getQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      quoteElement.textContent = randomQuote.quote;
      authorElement.textContent = `- ${randomQuote.author}`;
    };
  
    newQuoteButton.addEventListener("click", getQuote);
  
    tweetButton.addEventListener("click", () => {
      const quote = quoteElement.textContent;
      const author = authorElement.textContent;
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        quote
      )} ${encodeURIComponent(author)}`;
      window.open(tweetUrl, "_blank");
    });
  
    // Fetch the initial quote
    getQuote();
  });
  