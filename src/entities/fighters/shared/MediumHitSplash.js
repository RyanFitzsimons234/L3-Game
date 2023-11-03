// Import the HitSplash class from the "HitSplash.js" module
import { HitSplash } from "./HitSplash.js";

// Define the MediumHitSplash class, which extends HitSplash
export class MediumHitSplash extends HitSplash {
    constructor(x, y, playerId, onEnd) {
        // Call the constructor of the parent class (HitSplash)
        super(x, y, playerId, onEnd);

        // Define animation frames for the MediumHitSplash
        this.frames = [
            // Player 1 frames
            [[13, 41, 14, 15], [7, 7]],
            [[34, 39, 21, 19], [10, 9]],
            [[64, 39, 21, 19], [10, 9]],
            [[90, 35, 27, 25], [13, 12]],

            // Player 2 frames
            [[159, 41, 14, 15], [7, 7]],
            [[182, 39, 21, 19], [10, 9]],
            [[211, 39, 21, 19], [10, 9]],
            [[239, 35, 27, 25], [13, 12]],
        ];
    }

    // Update method for the MediumHitSplash
    update(time) {
        // Call the update method of the parent class and adjust time
        super.update(time * 1);
    }

    // Draw method for the MediumHitSplash
    draw(context, camera) {
        // Call the draw method of the parent class
        super.draw(context, camera);
    }
}
