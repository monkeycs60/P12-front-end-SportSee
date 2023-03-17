import * as d3 from 'd3';
import { useEffect, useRef } from "react";
import styled from "styled-components";


const RadarChart = ({ dataUserPerformance }) => {
    const chartRef = useRef(null);
    
    useEffect(() => {
        if (dataUserPerformance) {
        console.log(dataUserPerformance);
      const chartElement = chartRef.current;
      const chartData = Object.entries(dataUserPerformance);

      const width = 300;
      const height = 180;
      const margin = { top: 20, right: 20, bottom: 20, left: 20 };
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
          `translate(${width / 2 + margin.left}, ${height / 2 + margin.top})`
        );


      const radarLine = d3
        .lineRadial()
        .radius((d) => d.value)
        .angle((d, i) => i * angleSlice);

      const color = d3.scaleOrdinal().range(['#1f77b4']);

      const maxValue = Math.max(
        ...chartData.map(([, value]) => value),
        0
      );

      const yScale = d3.scaleLinear().domain([0, maxValue]).range([0, radius]);

      const yAxis = svg
        .selectAll('.axis')
        .data(chartData)
        .enter()
        .append('g')
        .attr('class', 'axis');

      yAxis
        .append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', (d, i) => radius * Math.cos(angleSlice * i - Math.PI / 2))
        .attr('y2', (d, i) => radius * Math.sin(angleSlice * i - Math.PI / 2))
        .attr('stroke', 'grey')
        .attr('stroke-width', '1px');

      yAxis
        .append('text')
        .attr(
          'x',
          (d, i) =>
            (radius + 10) * Math.cos(angleSlice * i - Math.PI / 2) -
            10 * (d[0].length - 1)
        )
        .attr(
          'y',
          (d, i) => (radius + 10) * Math.sin(angleSlice * i - Math.PI / 2) + 5
        )
        .text((d) => d[0])
        .style('font-size', '12px')
        .style('fill', 'grey');

      const path = svg
        .datum(
          chartData.map(([label, value]) => ({
            label,
            value: yScale(value),
          }))
        )
        .append('path')
        .attr('d', radarLine)
        .style('fill', 'red')
        .style('fill-opacity', 0.7)
        .style('stroke', 'transparent')
        .style('stroke-width', '2px');

      return () => {
        d3.select(chartElement).selectAll('*').remove();
      };
    }
  }, [dataUserPerformance]);

  return <div ref={chartRef}></div>;
};

export default RadarChart;