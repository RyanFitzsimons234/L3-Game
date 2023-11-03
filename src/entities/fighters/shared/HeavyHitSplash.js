import { HitSplash } from "./HitSplash.js";

// Define a subclass of HitSplash called HeavyHitSplash
export class HeavyHitSplash extends HitSplash {
    constructor(x, y, playerId, onEnd) {
        // Call the constructor of the parent class (HitSplash)
        super(x, y, playerId, onEnd);

        // Define frames for the HeavyHitSplash animation for both players
        this.frames = [
            // Player 1 frames
            [[14, 68, 15, 21], [7, 10]],
            [[38, 70, 27, 23], [13, 11]],
            [[73, 70, 27, 23], [13, 11]],
            [[106, 66, 32, 31], [16, 15]],

            // Player 2 frames
            [[160, 68, 15, 21], [7, 10]],
            [[185, 70, 27, 23], [13, 11]],
            [[222, 70, 27, 23], [13, 11]],
            [[255, 66, 32, 31], [16, 15]],
        ];
    }

    // Override the update method, scaling 'time' by 1
    update(time) {
        super.update(time * 1);
    }

    // Override the draw method
    draw(context, camera) {
        super.draw(context, camera);
    }
}
