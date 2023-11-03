// Function to draw a cross at a specified position with a given color
function drawCross(context, camera, position, color) {
    context.beginPath();
    context.strokeStyle = color;

    // Move to the left end of the horizontal line
    context.moveTo(
        Math.floor(position.x - camera.position.x) - 4,
        Math.floor(position.y - camera.position.y) - 0.5
    );

    // Draw the horizontal line
    context.lineTo(
        Math.floor(position.x - camera.position.x) + 5,
        Math.floor(position.y - camera.position.y) - 0.5
    );

    // Move to the top end of the vertical line
    context.moveTo(
        Math.floor(position.x - camera.position.x) + 0.5,
        Math.floor(position.y - camera.position.y) - 5
    );

    // Draw the vertical line
    context.lineTo(
        Math.floor(position.x - camera.position.x) + 0.5,
        Math.floor(position.y - camera.position.y) + 4
    );

    // Stroke the lines
    // context.stroke();
}

// Function to draw a colored box with a border at a specified position, size, and color
function drawBox(context, camera, position, direction, dimensions, color) {
    if (!Array.isArray(dimensions)) return;

    const [x = 0, y = 0, width = 0, height = 0] = dimensions;

    context.beginPath();
    context.strokeStyle = color + 'AA'; // Border color
    context.fillStyle = color + '44';   // Fill color

    // Draw the filled rectangle
    context.fillRect(
        Math.floor(position.x + (x * direction) - camera.position.x) + 0.5,
        Math.floor(position.y + y - camera.position.y) + 0.5,
        width * direction,
        height
    );

    // Draw the border of the rectangle
    context.rect(
        Math.floor(position.x + (x * direction) - camera.position.x) + 0.5,
        Math.floor(position.y + y - camera.position.y) + 0.5,
        width * direction,
        height
    );

    // Stroke the border
    // context.stroke();
}

// Function to draw collision information for a fighter
export function DEBUG_drawCollisionInfo(fighter, context, camera) {
    const { position, direction, boxes } = fighter;

    // Set the line width for drawing
    context.lineWidth = 1;

    // Draw push boxes in green
    // drawBox(context, camera, position, direction, Object.values(boxes.push), '#55FF55');

    // // Draw hurt boxes in blue
    // for (const hurtBox of boxes.hurt) {
    //     drawBox(context, camera, position, direction, hurtBox, '#7777FF');
    // }

    // // Draw hit boxes in red
    // drawBox(context, camera, position, direction, Object.values(boxes.hit), '#FF0000');

    // // Draw a cross at the fighter's position in white
    // drawCross(context, camera, position, '#FFFFFF');
}