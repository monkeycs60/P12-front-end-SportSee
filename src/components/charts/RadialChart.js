import { useEffect, useRef } from "react";
import { radialLogic } from '../../utils/radialLogic';
import styled from "styled-components";

const updateDimensions = () => {
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

const RadialChart = ({ dataUserScore }) => {
  const svgRef = useRef(null);
  

  useEffect(() => {
    if (dataUserScore && svgRef.current) {
      const { width, height, circleRadius, chartText, scoreTextPosition, optionalRadius } = updateDimensions();
      radialLogic(dataUserScore, svgRef, width, height, circleRadius, chartText, scoreTextPosition, optionalRadius);

      const handleResize = () => {
                const { width, height, circleRadius, chartText, scoreTextPosition, optionalRadius } = updateDimensions(); // Update dimensions on resize
        radialLogic(dataUserScore, svgRef, width, height, circleRadius, chartText, scoreTextPosition, optionalRadius);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [dataUserScore]);

  return (
    <StyledRadialChart>
      <svg ref={svgRef}></svg>
    </StyledRadialChart>
  );
};

export default RadialChart;

const StyledRadialChart = styled.div`
  border-radius: 5px;
  background-color: #E5E5E5;
  `;
