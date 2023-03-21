import * as d3 from 'd3';

// function for formatting date
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);
  return `${day}-${month}-${year}`;
}

// function for round bar corners
        function drawRoundedBar(x, y, width, height, radius) {
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

export const barLogic = (dataUserActivity, d3Container, width, height) => {


}