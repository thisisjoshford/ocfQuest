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
const choiceForm = document.getElementById('choice_form');

const result = document.getElementById('result');
const resultDescription = document.getElementById('resultDescription');

const adventureBody = document.getElementById('adventureBody');

//get user name, and default numbers of insight, selfEsteem, and joy from local storage and updates the DOM
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

//create an event listener on the choiceForm that was imported from DOM. This will grab the users selected choice, check the array of choices from the parent adventure, populate the found results to the DOM, then adjust the users score(insight, self esteem, joy). Will also need to update the quest to completed or off and disable map link. 
choiceForm.addEventListener('submit', function(event) {
    //prevents the button refreshing the page on click
    event.preventDefault();
    
    //creates a new variable with a FormData function
    const newFormData = new FormData(choiceForm);
    //grabs the selected radio button info and stores that value into the choiceId variable we are declaring 
    const userChoiceId = newFormData.get('choice');
    
    //declare and populate the userChoice variable with the choice
    const userChoice = findById(userChoiceId, adventureChoices);
    console.log(userChoice);

    //removes the adventure from DOM (hides)
    description.classList.add('hidden');
    choiceForm.classList.add('hidden');
    //removes the result class from DOM to display the results
    result.classList.remove('hidden');
    //updates the text content with the user choice 
    resultDescription.textContent = userChoice.result;
    //hides the adventure body after user makes the choice
    adventureBody.classList.add('hidden');

    //gets current insight, joy, & self esteem values from local storage
    let insight = localStorage.getItem('insight');
    let joy = localStorage.getItem('joy');
    let selfEsteem = localStorage.getItem('self_esteem');
   
    //does the maths (but first turns the strings into integers)
    insight = parseInt(insight) + (parseInt(userChoice.insight));
    joy = parseInt(joy) + (parseInt(userChoice.joy));
    selfEsteem = parseInt(selfEsteem) + (parseInt(userChoice.self_Esteem));

    //updates local storage data with the new values
    localStorage.setItem('insight', insight);
    localStorage.setItem('joy', joy);
    localStorage.setItem('self_esteem', selfEsteem);
    //changes the adventure active status to false
    localStorage.setItem(adventure.id, false);
    //grabs remaining adventures from local storage and decrements it
    let remainingAdventures = parseInt(localStorage.getItem('quests'));
    remainingAdventures--;
    localStorage.setItem('quests', remainingAdventures);
   
});