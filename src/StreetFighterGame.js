// Importing functions and classes from external modules
import { pullGamepads, registerGamepadEvents, registerKeyboardEvents } from './engine/InputHandler.js';
import { getContext } from './utils/context.js';
import { BattleScene } from './scenes/BattleScene.js';

// Creating a class for the Street Fighter game
export class StreetFighterGame {
    // Initializing the game context
    context = getContext();

    // Managing frame time for smooth animations
    frameTime = {
        previous: 0,
        secondsPassed: 0,
    };

    // Constructor for initializing the game
    constructor() {
        // Creating an instance of the BattleScene
        this.scene = new BattleScene();
    }

    // Function to handle each frame of the game
    frame(time) {
        // Request the next frame to create an animation loop
        window.requestAnimationFrame(this.frame.bind(this));

        // Calculate the time passed since the previous frame
        this.frameTime = {
            secondsPassed: (time - this.frameTime.previous) / 1000,
            previous: time,
        }

        // Update gamepad input
        pullGamepads();

        // Update and draw the current scene
        this.scene.update(this.frameTime, this.context);
        this.scene.draw(this.context);
    }

    // Function to start the game
    start() {
        alert("Ken Controls: uses l ; ' for his kicks , . / for his punches and arrow keys for his movement                                                                 .     Ryu Controls: uses e a s for his kicks tab q w for his punches and drfg for his movement");
        // Register keyboard input events
        registerKeyboardEvents();

        // Register gamepad input events
        registerGamepadEvents();

        // Request the first frame to start the game loop
        window.requestAnimationFrame(this.frame.bind(this));
    }
}