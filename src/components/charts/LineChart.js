import { useEffect, useRef } from "react";
import styled from "styled-components";
import { lineLogic } from '../../utils/lineLogic';

const updateDimensions = () => {
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


const LineChart = ({ dataUserAverageSession }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (dataUserAverageSession && d3Container.current) {
     const { width, height, fontLegend, xPosition, yPosition } = updateDimensions();
     lineLogic(dataUserAverageSession, d3Container, width, height, fontLegend, xPosition, yPosition);

        const handleResize = () => {
      const { width, height } = updateDimensions();
      lineLogic(dataUserAverageSession, d3Container, width, height, fontLegend, xPosition, yPosition);
    };
  window.addEventListener("resize", handleResize);

  return () => {
      window.removeEventListener("resize", handleResize);
  };

    }
  }, [dataUserAverageSession]);

  return (
    <StyledLineChart>
      <div className="tooltip"></div>
      <svg ref={d3Container}></svg>
    </StyledLineChart>
  );
};

export default LineChart;

const StyledLineChart = styled.div`
background-color: red;
border-radius: 5px;
.tooltip {
    position: absolute;
    display: none;
    background: linear-gradient(180deg, green 0%, #ffffff 100%);
    border-radius: 5px;
    padding: 5px;
    font-size: 12px;
    color: black;
    pointer-events: none;
  }
`;
