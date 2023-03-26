/**
 * Updates the dimensions of the radar chart based on the width of the window.
 * @function
 * @return {object} An object containing the updated chart dimensions.
 * @property {number} width - The updated width of the chart.
 * @property {number} height - The updated height of the chart.
 */

export const updateRadarDimensions = () => {
  let width, height;

  switch (true) {
    case window.innerWidth > 1700:
      width = 370;
      height = 274;
      break;
    case window.innerWidth > 1400:
      width = 324;
      height = 170;
      break;
    case window.innerWidth > 1200:
      width = 256;
      height = 190;
      break;
    default:
      width = 210;
      height = 150;
  }

  return { width, height };
};