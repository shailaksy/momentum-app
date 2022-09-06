export const focusInputField = document.getElementById('focus');

export function displayFocus(focusItem) {
    if (focusItem === null || undefined) {
        focusInputField.style.display = "block";
    } else if (focusItem) {
        focusInputField.style.display = "none";
        document.getElementById('focus-value').innerHTML = focusItem;
        document.getElementById('focus-value').style.animation = "opacity-fade-in 2s";
    }
}