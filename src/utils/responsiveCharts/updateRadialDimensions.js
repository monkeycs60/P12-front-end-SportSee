/**
Returns an object with updated dimensions based on the current window size for a radial chart.
@returns {Object} An object containing updated width, height, circleRadius, chartText, scoreTextPosition, and optionalRadius values.
*/

export const updateRadialDimensions = () => {
  let width, height, circleRadius, chartText, scoreTextPosition, optionalRadius;

  switch (true) {
    case window.innerWidth > 1700:
      width = 307.5;
      height = 274;
      circleRadius = 90;
      chartText = 24;
      scoreTextPosition = 30;
      optionalRadius = 0;
      break;
    case window.innerWidth > 1400:
      width = 240;
      height = 170;
      circleRadius = 90 * 0.82 * 0.90;
      chartText = 20;
      scoreTextPosition = 25;
      optionalRadius = 0;
      break;
    case window.innerWidth > 1200:
      width = 190;
      height = 190;
      circleRadius = 90 * 0.82 * 0.82;
      chartText = 16;
      scoreTextPosition = 20;
      optionalRadius = 0;
      break;
    default:
      width = 150;
      height = 150;
      circleRadius = 90 * 0.82 * 0.60;
      chartText = 14;
      scoreTextPosition = 20;
      optionalRadius = 2;
  }

  return { width, height, circleRadius, chartText, scoreTextPosition, optionalRadius };
};