// Write your code here!
// index.js

// Remove the <main> with id 'main' if it exists
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your actual name

// Append the new <h1> to the body or another container
document.body.appendChild(newHeader);
