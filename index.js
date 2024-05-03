let myName = "Lord Supreme Master ";
let greeting = "Welcome Back ";

let welcomeEl = document.getElementById("welcome-el");
welcomeEl.innerText = greeting + myName + String.fromCodePoint(128512); //code for emoji that doesn't display on Chrome

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  count++;
  countEl.innerText = count;
}

function save() {
  saveEl.textContent.length === 17
    ? (saveEl.textContent += " " + count)
    : (saveEl.textContent += " - " + count);
  count = 0;
  countEl.textContent = count;
}
