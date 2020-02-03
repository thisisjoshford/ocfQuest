//gets the adventures meta data
import adventuresArray from '../data/adventures.js';
//gather user info DOM
const fairName = document.getElementById('fairName');
const insight = document.getElementById('insight');
const selfEsteem = document.getElementById('selfEsteem');
const joy = document.getElementById('joy');
//gather map DOM to append the adventures to
const map = document.getElementById('map');

//if the game is over go to end
if (localStorage.getItem('gameOver') === 'true') {
    window.location.href = '../results';
}

//get user name, and default numbers of insight, selfEsteem, and joy from local storage and update that DOM
fairName.textContent = localStorage.getItem('fairName');
insight.textContent = localStorage.getItem('insight');
selfEsteem.textContent = localStorage.getItem('selfEsteem');
joy.textContent = localStorage.getItem('joy');

//construct an adventure link to be rendered to the DOM
function constructAdventureLink(adventure) {
    //create a link variable that is a <a> element
    const link = document.createElement('a');
    //adds a classlist of 'adventure to the <a> link element 
    link.classList.add('adventure');
    //gets current status of the adventures
    const adventureStatus = localStorage.getItem(adventure.id);
    //checks status and if not completed creates a link
    if (adventureStatus === 'true') {
    // sets the link to a concatenated string + title/id of the adventure
        link.href = '../adventure/?adventureId=' + adventure.id;
        //sets the adventure title as the link title
        link.textContent = adventure.title;
      //creates a X when completed
    } else link.textContent = '✘';
    //sets style value to a percentage based on adventure meta data
    //top sets % from top of container and left is % from the left of container
    link.style.top = adventure.map.top;
    link.style.left = adventure.map.left;
    //returns the link or text box
    return link;
}

const remainingAdventures = parseInt(localStorage.getItem('quests'));

if (remainingAdventures > 0) {
    //for loop that will cycle through the amount of adventures in adventures array
    for (let i = 0; i < adventuresArray.length; i++) {
        //makes an adventure variable and sets it to the first one in array... each time it loops through i will change from 0, 1, 2, 3 until all of the adventures are cycled through (adventures.length)
        const adventure = adventuresArray[i];
        //creates an empty adventureDisplay variable (declares it)
        let adventureDisplay;
        //runs the function that constructs a link to the adventure
        adventureDisplay = constructAdventureLink(adventure);
        //throws the data into the container with the map ID associated with it
        map.appendChild(adventureDisplay);
    }

} else window.location.href = '../results';