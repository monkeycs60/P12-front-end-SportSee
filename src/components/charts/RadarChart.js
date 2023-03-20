import * as d3 from 'd3';
import { useEffect, useRef } from "react";
import { radarLogic } from '../../utils/radarLogic';
import styled from "styled-components";

const updateDimensions = () => {
  const width = window.innerWidth > 1400 ? 300 : 200;
  const height = window.innerWidth > 1400 ? 240 : 160;
  return { width, height };
};


const RadarChart = ({ dataUserPerformance }) => {
    const chartRef = useRef(null);
    const levels = 5;
    
    
    useEffect(() => {
        if (dataUserPerformance) {
        const { width, height } = updateDimensions();
        radarLogic(width, height, dataUserPerformance, chartRef, levels);
          const handleResize = () => {
      const { width, height } = updateDimensions();
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

export default RadarChart;