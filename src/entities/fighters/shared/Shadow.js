// Import the STAGE_FLOOR constant from a relative path
import { STAGE_FLOOR } from "../../../constants/stage.js";

// Define the Shadow class
export class Shadow {
    // Constructor to initialize the shadow properties
    constructor(fighter) {
        // Get the image element for the shadow
        this.image = document.querySelector('img[alt="shadow"]');
        // Reference to the fighter associated with the shadow
        this.fighter = fighter;
        // Define the frame for the shadow's appearance
        this.frame = [[0, 0, 68, 11], [34, 7]];
    }

    // Placeholder update method (no updates needed)
    update() { }

    // Draw the shadow on the canvas
    draw(context, camera) {
        // Destructure the frame information
        const [
            [x, y, width, height],
            [originX, originY],
        ] = this.frame;

        // Calculate the scale of the shadow based on the fighter's position
        const scale = 1 - (STAGE_FLOOR - this.fighter.position.y) / 250;

        // Set the global alpha for transparency
        context.globalAlpha = 0.5;

        // Draw the shadow on the canvas
        context.drawImage(
            this.image,
            x, y,
            width, height,
            // Adjust the position and size based on the fighter's position and camera
            Math.floor(this.fighter.position.x - camera.position.x - originX * scale),
            Math.floor(STAGE_FLOOR - camera.position.y - originY * scale),
            Math.floor(width * scale), Math.floor(height * scale),
        );

        // Reset the global alpha to its original value
        context.globalAlpha = 1;
    }
}
