import adventures from '../data/adventures.js';

const fairName = document.getElementById('fairName');
const insight = document.getElementById('insight');
const selfEsteem = document.getElementById('selfEsteem');
const joy = document.getElementById('joy');

const questName = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice_Form');
const choiceData = document.getElementById('choice_data');

const submitButton = document.getElementById ('submit');

//get user name, and default numbers of insight, selfEsteem, and joy from local storage and update the DOM
fairName.textContent = localStorage.getItem('fairName');
insight.textContent = localStorage.getItem('insight');
selfEsteem.textContent = localStorage.getItem('selfEsteem');
joy.textContent = localStorage.getItem('joy');


//grabs the gear details that reside in the first adventure array and set it as a constant
const gear = adventures[0];
//now that we have a gear constant we can use dot notation to access its info
//setting some quality dom 

questName.textContent = gear.id;
description.textContent = gear.description;
image.src = gear.image;

//lets get the choices to populate
//set variable of gearChoices
const gearChoices = gear.choices;

console.log((gear.choices)[0]);

function createChoice(choice) {
    //creates a label element
    const label = document.createElement('label');
    //add a class of choice to it
    label.classList.add('choice');

    //below creates a radio button

    //first step is to create the input element and make the
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.required = true;
    radio.value = choice.id;
    label.appendChild(radio);

    const description = document.createElement('span');
    description.textContent = choice.description;
    label.appendChild(description);

    return label;
}
//test createChoice function
let yo = createChoice(gearChoices[0]);
console.log(yo);