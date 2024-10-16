// Use DOM manipulation to select input field, buttons, and display area
const inputField = document.getElementById("username");
const saveButton = document.getElementById("save-btn");
const clearButton = document.getElementById("clear-btn");
const displayName= document.getElementById("display-name");

// Event listeners to perform the correct function when buttons are pressed
// or the page is loaded/refreshed
saveButton.addEventListener("click", saveName);
clearButton.addEventListener("click", clearName);
document.addEventListener("DOMContentLoaded", display);

// Function to save the username that the user inputs
function saveName() {
    let input = document.getElementById("username").value;
    localStorage.setItem("username", input);
    console.log(localStorage.getItem("username"));
}

// Function to clear the user's saved username
function clearName() {
    document.getElementById("username").value = "";
    document.getElementById("display-name").value = ""
    localStorage.removeItem("username");
    console.log(localStorage.getItem("username"));
}

// Function to show the saved username on page load/refresh
function display() {
    let username = localStorage.getItem("username");
    if (username) {
        document.getElementById("display-name").innerHTML = `You have saved the username: ${username}`;
    }
}