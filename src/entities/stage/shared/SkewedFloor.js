import { STAGE_PADDING, STAGE_WIDTH } from "../../../constants/stage.js";

// Define the SkewedFloor class
export class SkewedFloor {
    // Constructor: Initialize the SkewedFloor with an image and dimensions
    constructor(image, dimensions) {
        this.image = image; // The image used for rendering
        this.dimensions = dimensions; // Dimensions of the source image
    }

    // Draw the skewed floor
    draw(context, camera, y) {
        // Extract dimensions from the provided dimensions array
        const [sourceX, sourceY, sourceWidth, sourceHeight] = this.dimensions;

        // Save the current canvas context state
        context.save();

        // Apply a transformation matrix to skew the floor
        context.setTransform(
            1, 0, -5.15 - ((camera.position.x - (STAGE_WIDTH + STAGE_PADDING)) / 112),
            1, 32 - camera.position.x / 1.55, 176 - camera.position.y
        );

        // Draw the skewed floor image
        context.drawImage(
            this.image,                // Source image
            sourceX, sourceY,         // Source position
            sourceWidth, sourceHeight, // Source dimensions
            0, 0,                     // Destination position
            sourceWidth, sourceHeight // Destination dimensions
        );

        // Restore the canvas context to its previous state
        context.restore();
    }
}
