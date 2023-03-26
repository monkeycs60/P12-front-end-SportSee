/**
 * Updates the dimensions of the line chart based on the width of the window.
 * @function
 * @return {object} An object containing the updated chart dimensions.
 * @property {number} width - The updated width of the chart.
 * @property {number} height - The updated height of the chart.
 * @property {number} fontLegend - The updated font size for the chart legend.
 * @property {number} xPosition - The updated position of the chart's x-axis.
 * @property {number} yPosition - The updated position of the chart's y-axis.
 */

export const updateLineDimensions = () => {
  let width, height, fontLegend, xPosition, yPosition;

  switch (true) {
    case window.innerWidth > 1700:
      width = 227.5;
      height = 230;
      fontLegend = 18;
      xPosition = 0;
      yPosition = 40;
      break;
    case window.innerWidth > 1400:
      width = 160;
      height = 126;
      fontLegend = 16;
      xPosition = -10;
      yPosition = 30;
      break;
      case window.innerWidth > 1200:
      width = 110;
      height = 146;
      fontLegend = 14;
      xPosition = -20;
      yPosition = 20;
      break;
    default:
      width = 70;
      height = 106;
      fontLegend = 12;
      xPosition = -20;
      yPosition = 15;
  }

  return { width, height, fontLegend, xPosition, yPosition };
};