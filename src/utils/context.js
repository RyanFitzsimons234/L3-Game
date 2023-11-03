// Function to get a 2D rendering context from the canvas element
export function getContext() {
    // Select the canvas element from the document
    const canvasEL = document.querySelector('canvas');

    // Get the 2D rendering context from the canvas
    const context = canvasEL.getContext('2d');

    // Disable image smoothing to maintain pixelated appearance
    context.imageSmoothingEnabled = false;

    return context;
}

// Function to draw a frame from an image on the canvas
export function drawFrame(context, image, dimensions, x, y, direction = 1) {
    const [sourceX, sourceY, sourceWidth, sourceHeight] = dimensions;

    // Scale the context horizontally based on the direction
    context.scale(direction, 1);

    // Draw the specified part of the image onto the canvas
    context.drawImage(
        image,
        sourceX, sourceY, sourceWidth, sourceHeight,
        x * direction, y, sourceWidth, sourceHeight
    );

    // Reset the context transformation to its default values
    context.setTransform(1, 0, 0, 1, 0, 0);
}