import { useEffect, useRef } from "react";
import { lineLogic } from '../../utils/lineLogic';
import { updateLineDimensions } from "../../utils/responsiveCharts/updateLineDimensions";
import styled from "styled-components";


const LineChart = ({ dataUserAverageSession }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (dataUserAverageSession && d3Container.current) {
     const { width, height, fontLegend, xPosition, yPosition } = updateLineDimensions();
     lineLogic(dataUserAverageSession, d3Container, width, height, fontLegend, xPosition, yPosition);

        const handleResize = () => {
      const { width, height } = updateLineDimensions();
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
