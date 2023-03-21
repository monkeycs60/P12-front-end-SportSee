import * as d3 from 'd3';
import { curveBasis } from 'd3';

export const lineLogic = (dataUserAverageSession, d3Container, width, height) => {
      d3.select(d3Container.current).selectAll("g").remove(); // Add this line to clear previous chart elements

     const sessionsArray = Object.values(dataUserAverageSession.sessions);

      //this is the array of days of the week, starting by 0 = Sunday
      const dayOfWeek = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

      // implement tooltip
      const showTooltip = (event, d) => {
  const tooltip = d3.select(d3Container.current.parentElement).select(".tooltip");
  tooltip
    .style("display", "inline")
    .style("left", event.clientX + "px")
    .style("top", event.clientY + "px")
    .html(`Day: ${dayOfWeek[d.day % 7]}<br/>Session Length: ${d.sessionLength}`);
     // Add the background-gradient class
   d3.select(d3Container.current.parentElement).classed("background-gradient", true);
};

const hideTooltip = () => {
  const tooltip = d3.select(d3Container.current.parentElement).select(".tooltip");
  tooltip.style("display", "none");
  // Remove the background-gradient class
  d3.select(d3Container.current.parentElement).classed("background-gradient", false);
};

      // set the dimensions and margins of the graph
      const margin = { top: 10, right: 30, bottom: 30, left: 50 };
        // width =  260 - margin.left - margin.right,
        // height = 250 - margin.top - margin.bottom;

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
        .attr('d', line)

          svg
        .append('text')
        .attr('x', 20)
        .attr('y', 100)
        .attr('text-anchor', 'start')
        .attr('font-size', '18px')
        .attr('fill', 'white')
        .attr('opacity', 0.5)
        .text('Durée moyenne des sessions');

     svg.selectAll("g").selectAll("path.domain").attr("stroke", "none");

     svg
  .selectAll(".data-point")
  .data(sessionsArray)
  .join("circle")
  .attr("class", "data-point")
  .attr("cx", d => x(d.day))
  .attr("cy", d => y(d.sessionLength))
  .attr("r", 20)
  .attr("fill", "white")
  .attr("opacity", 0) // Make the circles invisible, but still interactive
  .on("mouseover", showTooltip)
  .on("mousemove", showTooltip)
  .on("mouseout", hideTooltip);

    }