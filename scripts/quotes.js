export const quotes = {
    "Frank Ocean": '"I let go of my claim on you, it\'s a free world"',
    "The Weeknd": '"You\'re in love with something bigger than love"',
    "SZA": '"Why you bother me when you know you don\'t want me?"',
    "Steve Lacy": '"Honestly, I wouldn\'t mind, I would do it one more time. I would let you cut the line just so I could be right where you are."',
    "Drake": '"Sweatpants, hair tied, chillin\' with no make-up on, that\'s when you\'re the prettiest"',
    "Justin Bieber": '"You\'re who I\'m thinking of. Girl, you ain\'t my runner-up."',
    "Winnie the Pooh": '"You\'re braver than you believe, stronger than you seem, and smarter than you think."',
    "Walt Disney": '"We keep moving forward, opening new doors, and doing new things, because we\'re curious and curiosity keeps leading us down new paths."',
    "Dr. Seuss": '"The more that you read, the more things you will know. The more that you learn, the more places you\'ll go."',
    "Jocelle": '"Listen, look, listen, and learn."',
    "Vhong": '"Pamela one igalaw ang katawan"',
    "Rihanna": '"She can beat me, but she cannot beat my outfit"',
    "Binay": '"ano ano ano ano say nyo natameme kayo ano"',
    "neverforget": "Ang Presidente, Leni Robredo! Bise Presidente, Kiko Pangilinan!"
};

export const quoteDisplay = document.getElementById('quote');
export const authorDisplay = document.getElementById('author');
export const customQuote = document.getElementById('custom-quote');
export const quoteInputField = document.getElementById('quote-input');


export function generateQuote() {
    const authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random() * authors.length)];
    const quote = quotes[author];
    
    document.getElementById("quote").textContent = quote;
    document.getElementById("author").textContent = author;

    document.getElementById("quote").style.animation = "opacity-fade-in 0.5s";

    quoteInputField.style.display = "none";
    customQuote.style.display = "none";
    quoteDisplay.style.display = "block";
    authorDisplay.style.display = "none";
}