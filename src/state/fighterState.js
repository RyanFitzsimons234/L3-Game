// Importing a constant from an external module
import { HEALTH_MAX_HIT_POINTS } from "../constants/battle.js";

// Creating a default fighter state based on the provided fighter ID
export const createDefaultFighterState = (id) => ({
    // The ID of the fighter
    id,

    // Initial score for the fighter (set to 1 by default)
    score: 1,

    // The number of battles the fighter has participated in (set to 0 by default)
    battles: 0,

    // Initial hit points for the fighter (set to the maximum hit points)
    hitPoints: HEALTH_MAX_HIT_POINTS,
});
