import * as d3 from 'd3';
import { drawRoundedBar } from './formating/drawRoundedBar';
import { formatDate } from './formating/formatDate';

export const barLogic = (dataUserActivity, d3Container, width, height, tooltipRef) => {
 const handleMouseOver = (element, d) => {
  d3.select(element)
    .attr("fill", "rgba(128, 128, 128, 0.3)");

  d3.select(tooltipRef.current)
    .style("display", "block")
    .style("background-color", "red")
    .style("padding", "8px")
    .style("border-radius", "4px")
    .style("font-size", "12px")
    .style("color", "white")
    .html(formatTooltipContent(d));
};

const handleMouseMove = (event) => {
  const tooltipWidth = tooltipRef.current.clientWidth;
  const tooltipHeight = tooltipRef.current.clientHeight;
  const offsetX = 80;
  const offsetY = 40;

  d3.select(tooltipRef.current)
    .style("left", `${event.pageX - tooltipWidth + offsetX}px`)
    .style("top", `${event.pageY - tooltipHeight - offsetY}px`);
};

const handleMouseOut = (element) => {
  d3.select(element)
    .attr("fill", "transparent");

  d3.select(tooltipRef.current).style("display", "none");
};

      const formatTooltipContent = (d) => {
  return `
    ${d.kilogram}kg<br />
    <br />
    ${d.calories}kcal<br />
  `;
};
  
        const borderRadius = 3;
        // We set up the svg container
        // const w = 840;
        // const h = 140;

      const svg = d3.select(d3Container.current);
        svg
        .attr("width", width)
        .attr("height", height)
        .style("background-color", "white")
        .style("overflow", "visible")
        .style("fill", "yellow");

        // We set up the scales
        const xScale = d3
        .scaleBand()
         .domain(dataUserActivity.sessions.map((d) => formatDate(d.day)))
        .range([0, width])
        .padding(0);

        const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(
            dataUserActivity.sessions.map((d) => d.calories * 1.1) 
        )])
        .range([h, 0])

        // We set up the axis
        const xAxis = d3.axisBottom(xScale)
        .tickPadding(10)
        .tickSize(0)
        // .tickSizeOuter(0);
        const yAxis = d3.axisRight(yScale)
        .tickSize(w - 70) 
        .tickPadding(30)
        .ticks(5);

     // We set up the axis
        svg
        .append("g")
        .attr("transform", `translate(-40, ${h})`)
        .call(xAxis);

        const yAxisGroup = svg
        .append("g")
        .attr("transform", `translate(0, 0)`)
        .call(yAxis)
        .lower();

         yAxisGroup
        .selectAll("text")
        .attr("class", "y-axis");
       
        svg.selectAll("g").selectAll("line").attr("stroke", "#DEDEDE");
        svg.selectAll("g").selectAll("line").lower();
        svg.selectAll("g").selectAll("line")
        .filter((d, i) => i !== 0)
        .attr("stroke-dasharray", "2,2")

        // calorie bar
     svg
  .selectAll(".calorie-bar")
  .data(dataUserActivity.sessions)
  .enter()
  .append("path")
  .attr("class", "calorie-bar")
  .attr("d", (d) =>
    drawRoundedBar(
      xScale(formatDate(d.day)) + xScale.bandwidth() / 8,
      yScale(d.calories),
      xScale.bandwidth() / 16,
      h - yScale(d.calories),
      borderRadius
    )
  )
  .attr("fill", "#E60000")

// kilogram bars
       svg
  .selectAll(".bar")
  .data(dataUserActivity.sessions)
  .enter()
  .append("path")
  .attr("class", "bar")
  .attr("d", (d) =>
    drawRoundedBar(
      xScale(formatDate(d.day)),
      yScale(d.kilogram),
      xScale.bandwidth() / 16,
      h - yScale(d.kilogram),
      borderRadius
    )
  )
  .attr("fill", "#282D30")
        
        svg.selectAll("g").selectAll("path.domain").attr("stroke", "none");
        svg.selectAll('g').selectAll('text').attr('margin', '50px')
svg.selectAll('.y.axis') 
    .selectAll('text')
  .style("fill", "#E60000")   

  svg
  .selectAll(".hover-area")
  .data(dataUserActivity.sessions)
  .enter()
  .append("rect")
  .attr("class", "hover-area")
  .attr("x", (d) => xScale(formatDate(d.day)) - 20)
  .attr("y", 0)
  .attr("width", xScale.bandwidth() / 2)
  .attr("height", h)
  .attr("fill", "transparent")
  .on("mouseover", function (event, d) {
    handleMouseOver(this, d);
  })
  .on("mousemove", handleMouseMove)
  .on("mouseout", function () {
    handleMouseOut(this);
  });
}