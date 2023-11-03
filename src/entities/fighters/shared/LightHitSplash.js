// Import the HitSplash class from the "HitSplash.js" module
import { HitSplash } from "./HitSplash.js";

// Define the LightHitSplash class, which extends HitSplash
export class LightHitSplash extends HitSplash {
    constructor(x, y, playerId, onEnd) {
        // Call the constructor of the parent class (HitSplash)
        super(x, y, playerId, onEnd);

        // Define animation frames for the LightHitSplash
        this.frames = [
            // Player 1 frames
            [[14, 16, 9, 10], [6, 7]],
            [[34, 15, 13, 11], [7, 7]],
            [[55, 15, 13, 11], [7, 7]],
            [[75, 10, 20, 19], [11, 11]],

            // Player 2 frames
            [[160, 16, 9, 10], [6, 7]],
            [[178, 15, 13, 11], [7, 7]],
            [[199, 15, 13, 11], [7, 7]],
            [[219, 10, 20, 19], [11, 11]],
        ];
    }

    // Update method for the LightHitSplash
    update(time) {
        // Call the update method of the parent class and adjust time
        super.update(time * 1);
    }

    // Draw method for the LightHitSplash
    draw(context, camera) {
        // Call the draw method of the parent class
        super.draw(context, camera);
    }
}
