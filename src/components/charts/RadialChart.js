import { useEffect, useRef } from "react";
import { radialLogic } from '../../utils/radialLogic';
import styled from "styled-components";

const updateDimensions = () => {
  let width, height, circleRadius;

  switch (true) {
    case window.innerWidth > 1700:
      width = 297.5;
      height = 284;
      circleRadius = 90;
      break;
    case window.innerWidth > 1400:
      width = 300;
      height = 240;
      break;
    default:
      width = 200;
      height = 160;
  }

  return { width, height, circleRadius };
};

const RadialChart = ({ dataUserScore }) => {
  const svgRef = useRef(null);
  

  useEffect(() => {
    if (dataUserScore && svgRef.current) {
      const { width, height, circleRadius } = updateDimensions();
      radialLogic(dataUserScore, svgRef, width, height, circleRadius);

      const handleResize = () => {
                const { width, height, circleRadius } = updateDimensions(); // Update dimensions on resize
        radialLogic(dataUserScore, svgRef, width, height, circleRadius);
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
  box-shadow: 0px 2px 4px 0px #00000005;
  `;
