import { useEffect, useRef } from "react";
import styled from "styled-components";
import { lineLogic } from '../../utils/lineLogic';

const updateDimensions = () => {
  let width, height;

  switch (true) {
    case window.innerWidth > 1700:
      width = 217.5;
      height = 240;
      break;
    case window.innerWidth > 1400:
      width = 300;
      height = 240;
      break;
    default:
      width = 200;
      height = 160;
  }

  return { width, height };
};


const LineChart = ({ dataUserAverageSession }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (dataUserAverageSession && d3Container.current) {
     const { width, height } = updateDimensions();
     lineLogic(dataUserAverageSession, d3Container, width, height);

        const handleResize = () => {
      const { width, height } = updateDimensions();
      lineLogic(dataUserAverageSession, d3Container, width, height);
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
