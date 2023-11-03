import { FRAME_TIME } from '../../../constants/game.js';

// Define a class named HitSplash
export class HitSplash {
    constructor(x, y, playerId, onEnd) {
        // Initialize the HitSplash object with its properties
        this.image = document.querySelector('img[alt="decals"]');
        this.position = { x, y };
        this.playerId = playerId;
        this.onEnd = onEnd;

        // Initialize properties for animation
        this.frames = [];
        this.animationFrame = -1;
        this.animationTimer = 0;
    }

    // Define the update method for the HitSplash object
    update(time) {
        // Check if it's time to update the animation frame
        if (time.previous < this.animationTimer + 4 * FRAME_TIME) return;
        this.animationFrame += 1;
        this.animationTimer += time.previous;

        // Check if the animation frame has reached the end
        if (this.animationFrame >= 4) this.onEnd(this);
    }

    // Define the draw method for the HitSplash object
    draw(context, camera) {
        // Retrieve frame and origin data for the current animation frame
        const [
            [x, y, width, height], [originX, originY],
        ] = this.frames[this.animationFrame + this.playerId * 4];

        // Draw the image on the canvas with appropriate adjustments
        context.drawImage(
            this.image,
            x, y,
            width, height,
            Math.floor(this.position.x - camera.position.x - originX),
            Math.floor(this.position.y - camera.position.y - originY),
            width, height,
        );
    }
}
