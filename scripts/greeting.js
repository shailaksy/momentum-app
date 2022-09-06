import {
    now
} from './clock.js';

export const form = document.getElementById('form');
export const nameInputField = document.getElementById('name');
export const nameLabel = document.getElementById('name-label');

let greeting = "";

export function displayGreeting(displayName){
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