///// BACKGROUND /////

window.onload = () => {
    const bgImages = [
        './assets/beach.jpg', 
        './assets/bread.jpg',
        './assets/disco.jpg', 
        './assets/flower.jpg',
        './assets/market.jpg',
        './assets/monet.jpg',
        './assets/moon.jpg',
        './assets/otter.jpg',
        './assets/rabbit.jpg',
        './assets/roller.jpg'
        ]
    const bgImage = bgImages[Math.floor(Math.random()*bgImages.length)];
    document.getElementsByTagName('body')[0].style.background = "url('" + bgImage + "')";
    document.getElementsByTagName('body')[0].style.backgroundSize = "cover";
    document.getElementsByTagName('body')[0].style.backgroundPosition = "center center";
    document.getElementsByTagName('body')[0].style.backgroundAttachment = "fixed";
    document.getElementsByTagName('body')[0].style.backgroundRepeat = "no-repeat";
}

///// SEARCH /////

const search = document.getElementById('search');
const searchInputField = document.getElementById('search-input');
const searchToggleBtn = document.getElementById('search-btn-toggle');
const searchContainerToggle = document.getElementById('search-toggle-container');
const googleSearch = document.getElementById('google');

searchInputField.addEventListener("keyup", function(event){
    if (event.key === 'Enter'){
        console.log(event.target.value);
        googleSearch.href = `https://www.google.com/search?q=${event.target.value}`;
        googleSearch.click();
        searchInputField.value = '';
    }
})

searchToggleBtn.addEventListener("click", function(event) {
    searchContainerToggle.classList.toggle("search-toggle");
    searchContainerToggle.style.animation = "opacity-fade-in 0.3s";
});

///// CLOCK /////

const now = new Date();

function displayTime(){
    let h = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    let am_pm = now.getHours() >= 12 ? "PM" : "AM";
    let m = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    let time = h + ":" + m + " " + am_pm;
    document.getElementById('clock').innerHTML = time; 
}

setInterval(displayTime(), 1000);

///// GREETING /////

const form = document.getElementById('form');
const nameInputField = document.getElementById('name');
const nameLabel = document.getElementById('name-label');


let greeting = "";

nameInputField.addEventListener("keyup", function(event){
    if (event.key === 'Enter'){
        localStorage.setItem('name', nameInputField.value);
        console.log(displayGreeting(localStorage.getItem("name")));
        }
})

function displayGreeting(displayName){
    if (displayName === null || undefined) {
        nameInputField.style.display = "block";
        nameLabel.style.display = "block";
    } else if (displayName){
        let morning = "Good morning, " + displayName;
        let afternoon = "Good afternoon, " + displayName;
        let evening = "Good evening, " + displayName;
        if (now.getHours() < 12) {
            greeting = morning;
        } else if (now.getHours() < 18) {
            greeting = afternoon;
        } else {
            greeting = evening;
        }
        nameInputField.style.display = "none";
        nameLabel.style.display = "none";   
        document.getElementById('greeting-container').innerHTML = greeting;
        document.getElementById('greeting-container').style.animation = "opacity-fade-in 2s";  
    }
}

///// FOCUS /////

const focusInputField = document.getElementById('focus');

focusInputField.addEventListener("keyup", function(event){
    console.log(event.target.value);
    if (event.key === 'Enter'){
        localStorage.setItem('focus', focusInputField.value);
        console.log(displayFocus(localStorage.getItem("focus")));
    }
})

function displayFocus(focusItem) {
    if (focusItem === null || undefined) {
        focusInputField.style.display = "block";
    } else if (focusItem) {
        focusInputField.style.display = "none";
        document.getElementById('focus-value').innerHTML = focusItem;
        document.getElementById('focus-value').style.animation = "opacity-fade-in 2s";
    }
}

///// QUOTES /////

const quoteDisplay = document.getElementById('quote');
const authorDisplay = document.getElementById('author');
const customQuote = document.getElementById('custom-quote');
const quoteInputField = document.getElementById('quote-input');

document.getElementById('shuffle').addEventListener("click", () => {
    generateQuote();
    quoteDisplay.style.animation = "opacity-fade-in 0.5s";
})

generateQuote = () => {
    const quotes = {
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

quoteDisplay.addEventListener("mouseover", function(event){
    authorDisplay.style.display = "block";
    authorDisplay.style.animation = "opacity-fade-in 0.2s";
})

quoteDisplay.addEventListener("mouseout", function(event){
    authorDisplay.style.display = "none";
})

document.getElementById('custom').addEventListener("click", () => {
    quoteInputField.style.display = "block";
    quoteInputField.style.animation = "opacity-fade-in 0.5s";
    customQuote.style.display = "none";
    quoteDisplay.style.display = "none";
    authorDisplay.style.display = "none";
})

quoteInputField.addEventListener("keyup", function(event){
    console.log(event.target.value);
    if (event.key === 'Enter'){
        quoteInputField.style.display = "none";
        customQuote.style.display = "block";
        customQuote.innerHTML = event.target.value;
        customQuote.style.animation = "opacity-fade-in 0.5s";
    }
})

///// TODO LIST /////

const toDoToggle = document.querySelector("#todo-btn-toggle");
const toDoContainerToggle = document.querySelector("#todo-toggle-container");

toDoToggle.addEventListener("click", function(event) {
    toDoContainerToggle.classList.toggle("todo-toggle");
    toDoContainerToggle.style.animation = "opacity-fade-in 0.3s";
});

const toDoInput = document.querySelector('[data-input-form]');
const saveBtn = document.querySelector('[data-save-btn]');
const toDoList = document.querySelector('[data-list]');

let todos = [];
let editedIndex = -1;

const createTask = (item) => {
    if (item === '' || null || undefined) {
        toDoInput.value = '';
        alert('Input a task.');
    } else {
        todos.push(item);
    }
}

const displayList = () => {
    toDoList.innerHTML = '';
    todos.forEach((item, indx) => {
        const newLi = document.createElement('li');
        const newSpan = document.createElement('span');
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        newSpan.textContent = item;
        editBtn.innerHTML = '<i class="uil-pen"></i>';
        deleteBtn.innerHTML = '<i class="uil-trash-alt"></i>';

        editBtn.style.position = 'absolute';
        deleteBtn.style.position = 'absolute';

        editBtn.style.right = '7%';
        deleteBtn.style.right = '3.5%';

        newLi.appendChild(newSpan);
        newLi.appendChild(editBtn);
        newLi.appendChild(deleteBtn);

        editBtn.addEventListener('click', () => {
            editedIndex = indx;
            toDoInput.value = item;
        })

        deleteBtn.addEventListener('click', () => {
            deleteTask(indx);
            displayList();
        })

        toDoList.appendChild(newLi);
    })
}

function saveTask() {
    if (editedIndex > -1) {
        updateTask(toDoInput.value, editedIndex);
        editedIndex = -1;
    } else {
        createTask(toDoInput.value);
    }
    toDoInput.value = '';
    displayList();
}

saveBtn.addEventListener('click', () => {
    saveTask();
})

toDoInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        saveTask();
    }
})

const updateTask = (updatedItem, indx) => {
    todos[indx] = updatedItem;
}

const deleteTask = (indx) => {
    todos = todos.filter((_, index) => index !== indx);
}

displayList();