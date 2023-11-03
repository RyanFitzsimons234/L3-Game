import { Control, GamepadThumbstick } from "../constants/control.js";
import { controls } from "../config/control.js";
import { FighterDirection } from "../constants/fighter.js";

// Sets to track currently held and pressed keys
const heldKeys = new Set();
const pressedKeys = new Set();

// Map to store connected gamepads and set to track pressed buttons
const gamePads = new Map();
const pressedButtons = new Set();

// Extract keyboard controls from the configuration and flatten them into an array
const mappedKeys = controls.map(({ keyboard }) => Object.values(keyboard)).flat();

// Event handler for keydown
function handleKeyDown(event) {
    if (!mappedKeys.includes(event.code)) return;

    event.preventDefault();
    heldKeys.add(event.code);
}

// Event handler for keyup
function handleKeyUp(event) {
    if (!mappedKeys.includes(event.code)) return;

    event.preventDefault();
    heldKeys.delete(event.code);
    pressedKeys.delete(event.code);
}

// Event handler for gamepad connection
function handleGamepadConnected(event) {
    const { gamepad: { index, axes, buttons } } = event;

    gamePads.set(index, { axes, buttons });
}

// Event handler for gamepad disconnection
function handleGamepadDisconnected(event) {
    const { gamepad: { index } } = event;

    gamePads.delete(index);
}

// Register keyboard event listeners
export function registerKeyboardEvents() {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
}

// Register gamepad event listeners
export function registerGamepadEvents() {
    window.addEventListener('gamepadconnected', handleGamepadConnected);
    window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);
}

// Update the gamepad state
export function pullGamepads() {
    for (const gamePad of navigator.getGamepads()) {
        if (!gamePad) continue;

        if (gamePads.has(gamePad.index)) {
            const { index, axes, buttons } = gamePad;

            gamePads.set(index, { axes, buttons });

            for (const button in buttons) {
                const key = `${gamePad.index}-${button}`;

                if (pressedButtons.has(key) && isButtonUp(gamePad.index, button)) {
                    pressedButtons.delete(key);
                }
            }
        }
    }
}

// Functions to check key states
export const isKeyDown = (code) => heldKeys.has(code);
export const isKeyUp = (code) => !heldKeys.has(code);

// Function to check if a key was pressed
export function isKeyPressed(code) {
    if (heldKeys.has(code) && !pressedKeys.has(code)) {
        pressedKeys.add(code);
        return true;
    }
    return false;
}

// Functions to check button states on gamepads
export const isButtonDown = (padId, button) => gamePads.get(padId)?.buttons[button].pressed;
export const isButtonUp = (padId, button) => !gamePads.get(padId)?.buttons[button].pressed;

// Function to check if a gamepad button was pressed
export function isButtonPressed(padId, button) {
    const key = `${padId}-${button}`;

    if (isButtonDown(padId, button) && !pressedButtons.has(key)) {
        pressedKeys.add(key);
        return true;
    }
    return false;
}

// Functions to check joystick (axis) positions
export const isAxeGreater = (padId, axeId, value) => gamePads.get(padId)?.axes[axeId] >= value;
export const isAxeLower = (padId, axeId, value) => gamePads.get(padId)?.axes[axeId] <= value;

// Functions to check control states based on input methods (keyboard and gamepad)
export const isControlDown = (id, control) => isKeyDown(controls[id].keyboard[control])
    || isButtonDown(id, controls[id].gamePad[control]);

export const isControlPressed = (id, control) => isKeyPressed(controls[id].keyboard[control])
    || isButtonPressed(id, controls[id].gamePad[control]);

// Functions to check fighter directions and actions
export const isLeft = (id) => isKeyDown(controls[id].keyboard[Control.LEFT])
    || isButtonDown(id, controls[id].gamePad[Control.LEFT])
    || isAxeLower(id, controls[id].gamePad[GamepadThumbstick.HORIZONTAL_AXE_ID], -controls[id].gamePad[GamepadThumbstick.DEAD_ZONE]);

export const isRight = (id) => isKeyDown(controls[id].keyboard[Control.RIGHT])
    || isButtonDown(id, controls[id].gamePad[Control.RIGHT])
    || isAxeGreater(id, controls[id].gamePad[GamepadThumbstick.HORIZONTAL_AXE_ID], controls[id].gamePad[GamepadThumbstick.DEAD_ZONE]);

export const isUp = (id) => isKeyDown(controls[id].keyboard[Control.UP])
    || isButtonDown(id, controls[id].gamePad[Control.UP])
    || isAxeLower(id, controls[id].gamePad[GamepadThumbstick.VERTICAL_AXE_ID], -controls[id].gamePad[GamepadThumbstick.DEAD_ZONE]);

export const isDown = (id) => isKeyDown(controls[id].keyboard[Control.DOWN])
    || isButtonDown(id, controls[id].gamePad[Control.DOWN])
    || isAxeGreater(id, controls[id].gamePad[GamepadThumbstick.VERTICAL_AXE_ID], controls[id].gamePad[GamepadThumbstick.DEAD_ZONE]);

export const isForward = (id, direction) => direction === FighterDirection.RIGHT ? isRight(id) : isLeft(id);
export const isBackward = (id, direction) => direction === FighterDirection.LEFT ? isRight(id) : isLeft(id);

export const isIdle = (id) => !(isLeft(id) || isRight(id) || isUp(id) || isDown(id));

export const isLightPunch = (id) => isControlPressed(id, Control.LIGHT_PUNCH);
export const isMediumPunch = (id) => isControlPressed(id, Control.MEDIUM_PUNCH);
export const isHeavyPunch = (id) => isControlPressed(id, Control.HEAVY_PUNCH);

export const isLightKick = (id) => isControlPressed(id, Control.LIGHT_KICK);
export const isMediumKick = (id) => isControlPressed(id, Control.MEDIUM_KICK);
export const isHeavyKick = (id) => isControlPressed(id, Control.HEAVY_KICK);
