import { GamepadThumbstick, Control } from "../constants/control.js";

export const controls = [
    {
        gamePad: {
            [GamepadThumbstick.DEAD_ZONE] : 0.5,
            [GamepadThumbstick.HORIZONTAL_AXE_ID] : 0,
            [GamepadThumbstick.VERTICAL_AXE_ID] : 1,

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
    {
        
        gamePad: {
            [GamepadThumbstick.DEAD_ZONE] : 0.5,
            [GamepadThumbstick.HORIZONTAL_AXE_ID] : 0,
            [GamepadThumbstick.VERTICAL_AXE_ID] : 1,

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
            [Control.LEFT]: 'KeyD',
            [Control.RIGHT]: 'KeyG',
            [Control.UP]: 'KeyR',
            [Control.DOWN]: 'KeyF',
            [Control.LIGHT_PUNCH]: 'Tab',
            [Control.MEDIUM_PUNCH]: 'KeyQ',
            [Control.HEAVY_PUNCH]: 'KeyW',
            [Control.LIGHT_KICK]: 'KeyE',
            [Control.MEDIUM_KICK]: 'KeyA',
            [Control.HEAVY_KICK]: 'KeyS',
        },
    },
];