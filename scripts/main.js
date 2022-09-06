import {
    backgroundRefresh
} from './background.js';

window.onload = backgroundRefresh()

import {
    search,
    searchInputField,
    searchToggleBtn,
    searchContainerToggle,
    googleSearch
} from './search.js';

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

import {
    displayTime
} from './clock.js'

setInterval(displayTime(), 500);

import {
    nameInputField,
    displayGreeting
} from './greeting.js'

nameInputField.addEventListener("keyup", function(event){
    if (event.key === 'Enter'){
        localStorage.setItem('name', nameInputField.value);
        displayGreeting(nameInputField.value);
        }
})

displayGreeting(localStorage.getItem("name"));

import {
    focusInputField,
    displayFocus
} from './focus.js';

focusInputField.addEventListener("keyup", function(event){
    if (event.key === 'Enter'){
        localStorage.setItem('focus', focusInputField.value);
        displayFocus(focusInputField.value);
    }
})

displayFocus(localStorage.getItem("focus"));

import {
    quoteDisplay,
    authorDisplay,
    customQuote,
    quoteInputField,
    generateQuote,
} from './quotes.js';

document.getElementById('shuffle').addEventListener("click", () => {
    generateQuote();
    quoteDisplay.style.animation = "opacity-fade-in 0.5s";
})

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
    customQuote.textContent = '';
    quoteDisplay.style.display = "none";
    authorDisplay.style.display = "none";
})

quoteInputField.addEventListener("keyup", function(event){
    if (event.key === 'Enter'){
        quoteInputField.style.display = "none";
        customQuote.style.display = "block";
        customQuote.innerHTML = quoteInputField.value;
        customQuote.style.animation = "opacity-fade-in 0.5s";
        addCustomQuote(localStorage.getItem("name"), quoteInputField.value)
    }
})

//////

import {
    toDoToggle,
    toDoContainerToggle,
    toDoInput,
    saveBtn,
    toDoList,
    displayList,
    saveTask
} from './todolist.js'

toDoToggle.addEventListener("click", function(event) {
    toDoContainerToggle.classList.toggle("todo-toggle");
    toDoContainerToggle.style.animation = "opacity-fade-in 0.3s";
});

saveBtn.addEventListener('click', () => {
    saveTask();
})

toDoInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        saveTask();
    }
})

displayList();