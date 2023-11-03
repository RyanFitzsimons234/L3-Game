// Importing the StreetFighterGame class from an external module
import { StreetFighterGame } from './StreetFighterGame.js';

// Adding a "load" event listener to ensure the code runs when the page is fully loaded
window.addEventListener('load', function() {
    // Creating an instance of the StreetFighterGame class and starting the game
    new StreetFighterGame().start();
});