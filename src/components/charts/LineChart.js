import * as d3 from 'd3';
import { curveBasis } from 'd3';
import { useEffect, useRef } from "react";
import styled from "styled-components";

const LineChart = ({ dataUserAverageSession }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (dataUserAverageSession && d3Container.current) {
      const sessionsArray = Object.values(dataUserAverageSession.sessions);

      //this is the array of days of the week, starting by 0 = Sunday
      const dayOfWeek = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

      const margin = { top: 10, right: 30, bottom: 30, left: 50 },
        width = 500 - margin.left - margin.right,
        height = 320 - margin.top - margin.bottom;

      const svg = d3
        .select(d3Container.current)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      const x = d3
        .scaleLinear()
        .domain(d3.extent(sessionsArray, d => d.day))
        .range([0, width]);

      const y = d3
        .scaleLinear()
        .domain([20, d3.max(sessionsArray, d => d.sessionLength + 40)])
        .range([height, 0]);

      svg
        .append('g')
        .attr('transform', `translate(0,${height})`)
        .call(
          d3
            .axisBottom(x)
            .ticks(5)
            .tickSize(0)
            .tickFormat(d => dayOfWeek[d % 7])
        );

      svg
        .append('g')
        .call(d3.axisLeft(y).ticks(0));

      const line = d3
        .line()
        .x(d => x(d.day))
        .y(d => y(d.sessionLength))
        .curve(curveBasis);

         const extendedSessionsArray = [
        { day: -1, sessionLength: sessionsArray[0].sessionLength },
        ...sessionsArray,
        { day: 8, sessionLength: sessionsArray[sessionsArray.length - 1].sessionLength },
      ];

      svg
        .append('path')
        .datum(extendedSessionsArray)
        .attr('fill', 'none')
        .attr('stroke', 'white')
        .attr('stroke-width', 3)
        .attr('d', line);

          svg
        .append('text')
        .attr('x', 20)
        .attr('y', 100)
        .attr('text-anchor', 'start')
        .attr('font-size', '18px')
        //color of the text
        .attr('fill', 'white')
        //opacity of the text
        .attr('opacity', 0.5)
        .text('Durée moyenne des sessions');

     svg.selectAll("g").selectAll("path.domain").attr("stroke", "none");

    }
  }, [dataUserAverageSession]);

  return (
    <StyledLineChart>
      <svg ref={d3Container}></svg>
    </StyledLineChart>
  );
};

export default LineChart;

const StyledLineChart = styled.div`
background-color: red;
border-radius: 5px;

`;
