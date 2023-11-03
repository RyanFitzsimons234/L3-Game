// Import the GamepadThumbstick and Control constants from the 'control.js' module
import { GamepadThumbstick, Control } from "../constants/control.js";

// Define control configurations for two players (index 0 and 1)
export const controls = [
    {
        gamePad: {
            // Gamepad thumbstick configuration
            [GamepadThumbstick.DEAD_ZONE]: 0.5,                // Dead zone for thumbstick input
            [GamepadThumbstick.HORIZONTAL_AXE_ID]: 0,          // ID for horizontal thumbstick input
            [GamepadThumbstick.VERTICAL_AXE_ID]: 1,            // ID for vertical thumbstick input

            // Gamepad button mapping for controls
            [Control.LEFT]: 14,                 // Mapping for moving left
            [Control.RIGHT]: 15,                // Mapping for moving right
            [Control.UP]: 12,                   // Mapping for moving up
            [Control.DOWN]: 13,                 // Mapping for moving down
            [Control.LIGHT_PUNCH]: 2,           // Mapping for light punch
            [Control.MEDIUM_PUNCH]: 3,          // Mapping for medium punch
            [Control.HEAVY_PUNCH]: 5,           // Mapping for heavy punch
            [Control.LIGHT_KICK]: 0,            // Mapping for light kick
            [Control.MEDIUM_KICK]: 1,           // Mapping for medium kick
            [Control.HEAVY_KICK]: 4,            // Mapping for heavy kick
        },
        keyboard: {
            // Keyboard key mapping for controls
            [Control.LEFT]: 'KeyD',             // Mapping for moving left
            [Control.RIGHT]: 'KeyG',            // Mapping for moving right
            [Control.UP]: 'KeyR',               // Mapping for moving up
            [Control.DOWN]: 'KeyF',             // Mapping for moving down
            [Control.LIGHT_PUNCH]: 'Tab',       // Mapping for light punch
            [Control.MEDIUM_PUNCH]: 'KeyQ',     // Mapping for medium punch
            [Control.HEAVY_PUNCH]: 'KeyW',      // Mapping for heavy punch
            [Control.LIGHT_KICK]: 'KeyE',       // Mapping for light kick
            [Control.MEDIUM_KICK]: 'KeyA',      // Mapping for medium kick
            [Control.HEAVY_KICK]: 'KeyS',       // Mapping for heavy kick
        },
    },
    {
        gamePad: {
            // Gamepad thumbstick configuration (same as player 1)
            [GamepadThumbstick.DEAD_ZONE]: 0.5,
            [GamepadThumbstick.HORIZONTAL_AXE_ID]: 0,
            [GamepadThumbstick.VERTICAL_AXE_ID]: 1,

            // Gamepad button mapping for controls (same as player 1)
            [Control.LEFT]: 14,
            [Control.RIGHT]: 15,
            [Control.UP]: 12,
            [Control.DOWN]: 13,
            [Control.LIGHT_PUNCH]: 2,
            [Control.MEDIUM_PUNCH]: 3,
            [Control.HEAVY_PUNCH]: 5,
            [Control.LIGHT_KICK]: 0,
            [Control.MEDIUM_KICK]: 1,
            [Control.HEAVY_KICK]: 4,
        },
        keyboard: {
            // Keyboard key mapping for controls (different from player 1)
            [Control.LEFT]: 'ArrowLeft',
            [Control.RIGHT]: 'ArrowRight',
            [Control.UP]: 'ArrowUp',
            [Control.DOWN]: 'ArrowDown',
            [Control.LIGHT_PUNCH]: 'Slash',
            [Control.MEDIUM_PUNCH]: 'Period',
            [Control.HEAVY_PUNCH]: 'Comma',
            [Control.LIGHT_KICK]: 'Quote',
            [Control.MEDIUM_KICK]: 'Semicolon',
            [Control.HEAVY_KICK]: 'KeyL',
        },
    },
];
