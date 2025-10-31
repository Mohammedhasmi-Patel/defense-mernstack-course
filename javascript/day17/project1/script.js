const quotes = [
    "Tit for tat",
    "Trust me everything is possible",
    "if they can do it why you are not?",
    "Do Hard things first",
    "Life is a journey not a destination",
    "Work hard in silence let your success be the noise",
    "Dear Myself one day i will make you proud"
];

const quoteGenerateButton = document.getElementById("quote-generate-btn");
quoteGenerateButton.addEventListener("click",()=>{
    const index = Math.floor(Math.random() * quotes.length);
    const quotesHeading = document.getElementById("quote-heading");
    quotesHeading.innerText = quotes[index];
});