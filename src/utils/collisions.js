// Function to check if two rectangles overlap
export function rectsOverlap(x1, y1, width1, height1, x2, y2, width2, height2) {
    // Check if the left edge of the first rectangle is to the left of the right edge of the second rectangle
    // and if the right edge of the first rectangle is to the right of the left edge of the second rectangle
    // and if the top edge of the first rectangle is above the bottom edge of the second rectangle
    // and if the bottom edge of the first rectangle is below the top edge of the second rectangle
    return x1 < x2 + width2 && x1 + width1 > x2 && y1 < y2 + height2 && y1 + height1 > y2;
}

// Function to check if two boxes overlap using their position, dimensions, and direction
export function boxOverlap(box1, box2) {
    // Call the `rectsOverlap` function with the coordinates and dimensions of the two boxes
    return rectsOverlap(box1.x, box1.y, box1.width, box1.height, box2.x, box2.y, box2.width, box2.height);
}

// Function to get the actual dimensions of a box based on the position and direction of a fighter
export function getActualBoxDimensions(position, direction, box) {
    // Calculate the actual x-coordinate of the box based on the fighter's position and direction
    const x1 = position.x + (box.x * direction);
    const x2 = x1 + (box.width * direction);

    // Return an object representing the actual box dimensions
    return {
        x: Math.min(x1, x2),
        y: position.y + box.y,
        width: box.width,
        height: box.height,
    };
}
