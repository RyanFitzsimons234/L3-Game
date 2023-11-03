import { SCROLL_BOUNDARY, STAGE_HEIGHT, STAGE_WIDTH, STAGE_PADDING } from "../constants/stage.js";

// Define the Camera class
export class Camera {
    constructor(x, y, fighters) {
        // Initialize the camera with an initial position and an array of fighters
        this.position = { x, y };
        this.fighters = fighters;
    }

    // Update the camera's position based on the fighters' positions
    update(time, context) {
        // Calculate the camera's vertical (y) position to follow the fighters
        this.position.y = -6 + Math.floor(Math.min(this.fighters[1].position.y, this.fighters[0].position.y) / 10);

        // Find the leftmost and rightmost fighter's positions
        const lowX = Math.min(this.fighters[1].position.x, this.fighters[0].position.x);
        const highX = Math.max(this.fighters[1].position.x, this.fighters[0].position.x);

        // Adjust the camera's horizontal (x) position to keep both fighters visible
        if (highX - lowX > context.canvas.width - SCROLL_BOUNDARY * 2) {
            const midPoint = (highX - lowX) / 2;
            this.position.x = lowX + midPoint - (context.canvas.width / 2);
        } else {
            for (const fighter of this.fighters) {
                if (
                    fighter.position.x < this.position.x + SCROLL_BOUNDARY
                    && fighter.velocity.x * fighter.direction < 0
                    || fighter.position.x > this.position.x + context.canvas.width - SCROLL_BOUNDARY
                    && fighter.velocity.x * fighter.direction > 0
                ) {
                    this.position.x += fighter.velocity.x * fighter.direction * time.secondsPassed;
                }
            }
        }

        // Ensure the camera doesn't go out of the stage boundaries
        if (this.position.x < STAGE_PADDING) this.position.x = STAGE_PADDING;
        if (this.position.x > STAGE_WIDTH + STAGE_PADDING - context.canvas.width) {
            this.position.x = STAGE_WIDTH + STAGE_PADDING - context.canvas.width;
        }
        if (this.position.y < 0) this.position.y = 0;
        if (this.position.y > STAGE_HEIGHT - context.canvas.height) {
            this.position.y = STAGE_HEIGHT - context.canvas.height;
        }
    }
}
