export class FpsCounter {
    constructor() {
        // Initialize the FPS counter to 0.
        this.fps = 0;
    }

    // Update the FPS based on the time elapsed.
    update(time) {
        // Calculate FPS as the reciprocal of secondsPassed, truncated to an integer.
        this.fps = Math.trunc(1 / time.secondsPassed);
    }

    // Draw the FPS value on the canvas.
    draw(context) {
        // Set the font, color, and alignment for displaying the FPS.
        context.font = '14px Arial';
        context.fillStyle = '#00FF00';
        context.textAlign = 'right';

        // Display the FPS in the bottom-right corner of the canvas.
        context.fillText(`${this.fps}`, context.canvas.width - 2, context.canvas.height - 2);
    }
}
