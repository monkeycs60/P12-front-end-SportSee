import * as d3 from 'd3';
import { useEffect, useRef } from "react";
import styled from "styled-components";


const RadarChart = ({ dataUserPerformance }) => {
    const chartRef = useRef(null);
    const levels = 5;
    
    useEffect(() => {
        if (dataUserPerformance) {
        console.log(dataUserPerformance);
      const chartElement = chartRef.current;
      // const chartData = Object.entries(dataUserPerformance);
 const frenchLabels = {
            cardio: 'Cardio',
            energy: 'Énergie',
            endurance: 'Endurance',
            strength: 'Force',
            speed: 'Vitesse',
            intensity: 'Intensité',
          };
        // 2. Créez un nouveau tableau avec les données traduites et triées dans l'ordre souhaité
          const orderedKeys = ['intensity', 'speed', 'strength', 'endurance', 'energy', 'cardio'];
          const chartData = orderedKeys.map((key) => [frenchLabels[key], dataUserPerformance[key]]);

      const width = 260;
      const height = 190;
      const margin = { top: 30, right: 0, bottom: 30, left: 0 };
      const radius = Math.min(width, height) / 2;

      const angleSlice = (2 * Math.PI) / chartData.length;

      const svg = d3
        .select(chartElement)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr(
          'transform',
          `translate(${width / 2 + margin.left}, ${height / 2 + margin.top })`
        )
        //padding between the chart and the border
        .attr('class', 'radar');



 // Add grey background
      svg
        .append('rect')
        .attr('x', -(width / 2) - margin.left)
        .attr('y', -(height / 2) - margin.top)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#282D30');

      const maxValue = Math.max(
        ...chartData.map(([, value]) => value),
        0
      );

      const yScale = d3.scaleLinear().domain([0, maxValue]).range([0, radius]);


        for (let level = 1; level <= levels; level++) {
        const exponent = 1.4; // Adjust the exponent to change the spacing between the levels
        const levelFactor = (radius * 0.9 / Math.pow(levels, exponent)) * Math.pow(level, exponent);
        const polygonPoints = chartData
          .map((_, i) => [
            levelFactor * Math.cos(angleSlice * i - Math.PI / 2),
            levelFactor * Math.sin(angleSlice * i - Math.PI / 2),
          ])
          .join(' ');

        svg
          .append('polygon')
          .attr('points', polygonPoints)
          .attr('stroke', 'white')
          .attr('stroke-width', '1px')
          .attr('fill', 'none');
      }

       const radarLine = d3
        .lineRadial()
        .radius((d) => d.value)
        .angle((d, i) => i * angleSlice);

      const color = d3.scaleOrdinal().range(['#1f77b4']);

      const yAxis = svg
        .selectAll('.axis')
        .data(chartData)
        .enter()
        .append('g')
        .attr('class', 'axis');

      yAxis
        .append('text')
        .attr(
          'x',
          (d, i) =>
            (radius + 10) * Math.cos(angleSlice * i - Math.PI / 2) -
            10 * (d[0].length - 1) + 35
        )
        .attr(
          'y',
          (d, i) => (radius + 10) * Math.sin(angleSlice * i - Math.PI / 2) + 5
        )
        .text((d) => d[0])
        .style('font-size', '14px')
        .style('fill', 'white');

      svg
        .selectAll('.radar-path')
        .data([
          chartData.map(([label, value]) => ({
            label,
            value: yScale(value) * 0.9,
          })),
        ])
        .enter()
        .append('path')
        .attr('class', 'radar-path')
        .attr('d', radarLine)
        .style('fill', "#FF0000")
        .style('fill-opacity', 0.6);

      return () => {
        d3.select(chartElement).selectAll('*').remove();
      };
    }
  }, [dataUserPerformance]);

  return <div ref={chartRef}></div>;
};

export default RadarChart;