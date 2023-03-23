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