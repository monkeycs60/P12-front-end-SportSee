/**
RadialChart component displays a radial chart with user score data
@param {object} dataUserScore - An object containing user score data
@param {number} dataUserScore.score - User score value
@returns {JSX.Element} - Returns a React component for displaying a radial chart
*/

import { useEffect, useRef } from "react";
import { radialLogic } from '../../utils/radialLogic';
import { updateRadialDimensions } from "../../utils/responsiveCharts/updateRadialDimensions";
import styled from "styled-components";
import PropTypes from 'prop-types';

const RadialChart = ({ dataUserScore }) => {
  const svgRef = useRef(null);
  

  useEffect(() => {
    if (dataUserScore && svgRef.current) {
      const { width, height, circleRadius, chartText, scoreTextPosition, optionalRadius } = updateRadialDimensions();
      radialLogic(dataUserScore, svgRef, width, height, circleRadius, chartText, scoreTextPosition, optionalRadius);

      const handleResize = () => {
                const { width, height, circleRadius, chartText, scoreTextPosition, optionalRadius } = updateRadialDimensions(); // Update dimensions on resize
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

RadialChart.propTypes = {
  dataUserScore: PropTypes.shape({
    score: PropTypes.number,
  })
};

export default RadialChart;

const StyledRadialChart = styled.div`
  border-radius: 5px;
  background-color: #E5E5E5;
  `;
