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