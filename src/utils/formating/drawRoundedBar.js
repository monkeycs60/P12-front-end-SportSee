// function for round bar corners
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