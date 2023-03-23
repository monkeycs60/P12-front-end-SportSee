/**
Draws a rounded rectangle for a bar with rounded corners.
@function
@param {number} x - X coordinate of the top left origin point.
@param {number} y - Y coordinate of the top left origin point.
@param {number} width - Width of the bar.
@param {number} height - Height of the bar.
@param {number} radius - Radius of the rounded corners.
@returns {string} SVG path to draw the bar with rounded corners.
*/
export function drawRoundedBar(x, y, width, height, radius) {
  return `
    M${x},${y + radius}
    a${radius},${radius} 0 0 1 ${radius},${-radius}
    h${width - 2 * radius}
    a${radius},${radius} 0 0 1 ${radius},${radius}
    v${height - radius}
    h${-width}
    z
  `;
}