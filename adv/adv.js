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

//get user name from local storage and update the DOM
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

console.log(gear.choices[1]);

//lets get the choices to populate

const gearChoices = gear.Choices;

   

