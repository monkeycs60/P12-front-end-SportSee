/**
LineChart component displays a line chart with user average session data
@param {object} dataUserAverageSession - An object containing an array of user average session data
@param {object} dataUserAverageSession.sessions - An object containing user average session data with day and sessionLength properties
@returns {JSX.Element} - Returns a React component for displaying a line chart
*/

import { useEffect, useRef } from "react";
import { lineLogic } from '../../utils/lineLogic';
import { updateLineDimensions } from "../../utils/responsiveCharts/updateLineDimensions";
import styled from "styled-components";
import PropTypes from 'prop-types';

const LineChart = ({ dataUserAverageSession }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (dataUserAverageSession && dataUserAverageSession.sessions && d3Container.current) {
     const { width, height, fontLegend, xPosition, yPosition } = updateLineDimensions();
     const sessionsArray = Object.values(dataUserAverageSession.sessions);
     lineLogic(sessionsArray, d3Container, width, height, fontLegend, xPosition, yPosition);

     const handleResize = () => {
      const { width, height } = updateLineDimensions();
      lineLogic(sessionsArray, d3Container, width, height, fontLegend, xPosition, yPosition);
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

LineChart.propTypes = {
dataUserAverageSession: PropTypes.shape({
  sessions: PropTypes.shape({
    day: PropTypes.number,
    sessionLength: PropTypes.number,
  })
}),
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
