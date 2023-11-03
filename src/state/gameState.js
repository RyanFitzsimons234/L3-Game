// Importing necessary constants and functions from external modules
import { FighterId } from "../constants/fighter.js";
import { createDefaultFighterState } from "./fighterState.js";

// Creating the initial game state object
export const gameState = {
    // An array of fighter states, typically representing the state of each fighter in the game
    fighters: [
        // Creating a default fighter state for Ryu and adding it to the array
        createDefaultFighterState(FighterId.RYU),
        // Creating a default fighter state for Ken and adding it to the array
        createDefaultFighterState(FighterId.KEN),
    ],
};
