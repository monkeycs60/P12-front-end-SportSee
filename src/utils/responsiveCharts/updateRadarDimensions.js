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