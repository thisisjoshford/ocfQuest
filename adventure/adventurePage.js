//get the meta data from adventures.js
import adventuresArray from '../data/adventures.js';

//get the player info from the DOM
const fairName = document.getElementById('fairName');
const insight = document.getElementById('insight');
const selfEsteem = document.getElementById('selfEsteem');
const joy = document.getElementById('joy');

//get the adventure DOM place holders
const adventureName = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceData = document.getElementById('choice_data');

const submitButton = document.getElementById ('submit');

//get user name, and default numbers of insight, selfEsteem, and joy from local storage and update the DOM
fairName.textContent = localStorage.getItem('fairName');
insight.textContent = localStorage.getItem('insight');
selfEsteem.textContent = localStorage.getItem('selfEsteem');
joy.textContent = localStorage.getItem('joy');

//gets the search query located in the URL (window.location.search)
const urlData = new URLSearchParams(window.location.search);

//gets the adventureID from URLSearchParams and puts it in the adventureID variable
const urlAdventureId = urlData.get('adventureId');

const adventure = findById(urlAdventureId, adventuresArray);

function findById(id, array) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item.id === id) {
            return item;
        }
    }
}
//update the DOM based on the ID we obtained
adventureName.textContent = adventure.title;
description.textContent = adventure.description;
image.src = adventure.image;

//lets get the choices to populate
//set variable of gearChoices
const adventureChoices = adventure.choices;
console.log(adventureChoices);

//populates the choice buttons to the DOM
function renderChoiceButtons(adventureChoices) {
    //for each adventure choice
    for (let i = 0; i < adventureChoices.length; i++) {
        //create a variable for that choice
        const choice = adventureChoices[i];
        //run the function that creates the html
        const radioButton = createChoiceButton(choice);
        //append that data to the DOM
        choiceData.appendChild(radioButton);
    }
}

//calls the above function and creates the choices on the DOM
renderChoiceButtons(adventureChoices);

//creates the choice button html
function createChoiceButton(choice) {
    //creates a label html element
    const label = document.createElement('label');
    //add a class of 'choice' to it
    label.classList.add('choice');
    
    //below creates a radio button
    //first step is to create the input element and make it a variable
    const radio = document.createElement('input');
    //now we can use dot notation to add the type, name, value, and required boolean
    radio.type = 'radio';
    radio.name = 'choice';
    radio.required = true;
    //gets the 'choice' that was passed through the function and sets the value as its ID or name
    radio.value = choice.id;
    //appends the html label element
    label.appendChild(radio);
    //creates a span html element and puts it in the description variable
    const description = document.createElement('span');
    //update the text content of that span element with the passed 'choice' description information
    description.textContent = choice.description;
    //appends the html label element
    label.appendChild(description);
    //return all that hard work
    return label;
}