// Import the FRAME_TIME constant from the 'game.js' module
import { FRAME_TIME } from "./game.js";

// Time delays in terms of frame time
export const TIME_DELAY = 30 * FRAME_TIME;          // 30 frames delay
export const TIME_FLASH_DELAY = 3 * FRAME_TIME;     // 3 frames delay

// An array of keys related to time frames
export const TIME_FRAME_KEYS = ['time', 'time-flash'];

// Time delays for KO (Knockout) animations
export const KO_FLASH_DELAY = [4 * FRAME_TIME, 7 * FRAME_TIME];  // KO flash delay range (4 to 7 frames)

// KO (Knockout) animation keys
export const KO_ANIMATION = ['ko-white', 'ko-red'];

// Maximum hit points and critical hit points for health
export const HEALTH_MAX_HIT_POINTS = 144;
export const HEALTH_CRITICAL_HIT_POINTS = 45;

// Colors for displaying health bars
export const HEALTH_COLOR = '#F3F300';         // Normal health bar color
export const HEALTH_DAMAGE_COLOR = '#F30000';  // Health bar color for damage
