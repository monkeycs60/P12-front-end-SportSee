/**
 * Updates the dimensions of the bar chart based on the width of the window.
 * @function
 * @return {object} An object containing the updated chart dimensions.
 * @property {number} width - The updated width of the chart.
 * @property {number} height - The updated height of the chart.
 * @property {number} fontLegend - The updated font size for the chart legend.
 * @property {number} tickPaded - The updated padding between the chart ticks.
 * @property {number} tickSized - The updated size of the chart ticks.
 * @property {number} xAxisPos - The updated position of the chart's x-axis.
 */

export const updateBarDimensions = () => {
  let width, height, fontLegend, tickPaded, tickSized, xAxisPos;
  switch (true) {
    case window.innerWidth > 1700:
      width = 960;
      height = 180;
      fontLegend = 14;
      tickPaded = 80;
      tickSized = 110;
      xAxisPos = -50;
      break;
    case window.innerWidth > 1400:
      width = 740;
      height = 140 * 0.82;
      fontLegend = 12;
      tickPaded = 60;
      tickSized = 80;
      xAxisPos = -40;
      break;
      case window.innerWidth > 1200:
      width = 560;
      height = 120;
      fontLegend = 10;
      tickPaded = 60;
      tickSized = 70;
      xAxisPos = -30;
      break;
    default:
      width = 420;
      height = 120;
      fontLegend = 9;
      tickPaded = 10;
      tickSized = 10;
      xAxisPos = -20;
  }
  //reload the page if the window is resized
  window.addEventListener("resize", () => {
    window.location.reload();
  });
  return { width, height, fontLegend, tickPaded, tickSized, xAxisPos };
};