import * as d3 from 'd3';
import { useEffect, useRef } from "react";
import { radarLogic } from '../../utils/radarLogic';
import { updateRadarDimensions } from '../../utils/responsiveCharts/updateRadarDimensions';
import PropTypes from 'prop-types';

const RadarChart = ({ dataUserPerformance }) => {
    const chartRef = useRef(null);
    const levels = 5;
    
    useEffect(() => {
        if (dataUserPerformance) {
        const { width, height } = updateRadarDimensions();
        radarLogic(width, height, dataUserPerformance, chartRef, levels);
          const handleResize = () => {
      const { width, height } = updateRadarDimensions();
      radarLogic(width, height, dataUserPerformance, chartRef, levels);
    };
  window.addEventListener("resize", handleResize);

      return (chartElement) => {
        d3.select(chartElement).selectAll('*').remove();
          window.removeEventListener("resize", handleResize);
      };
    }
  }, [dataUserPerformance]);

  
  return <div ref={chartRef}></div>;
};

const PerformanceDataShape = PropTypes.shape({
cardio: PropTypes.number,
energy: PropTypes.number,
endurance: PropTypes.number,
intensity: PropTypes.number,
speed: PropTypes.number,
strength: PropTypes.number,
});

RadarChart.propTypes = {
dataUserPerformance: PerformanceDataShape,
};


export default RadarChart;