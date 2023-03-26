import * as d3 from 'd3';
import { drawRoundedBar } from './formating/drawRoundedBar';
import { formatDate } from './formating/formatDate';
import { handleMouseOver, handleMouseMove, handleMouseOut } from './tooltipCharts/tooltipBar';

/**
Draws a bar chart with rounded bars and tooltips for data visualization using D3
@function
@param {Array} dataUserActivity - An array of objects containing user activity data.
@param {Object} d3Container - A reference to the D3 container to which the chart will be rendered.
@param {number} width - The width of the chart.
@param {number} height - The height of the chart.
@param {number} fontLegend - The font size of the axis legends.
@param {number} tickPaded - The padding between ticks on the Y axis.
@param {number} tickSized - The size of the ticks on the Y axis.
@param {number} xAxisPos - The position of the X axis.
@param {Object} tooltipRef - A reference to the tooltip element.
@returns {void}
*/
export const barLogic = (dataUserActivity, d3Container, width, height, fontLegend, tickPaded, tickSized, xAxisPos, tooltipRef) => {
  
        const borderRadius = 3;
 
      const svg = d3.select(d3Container.current);
        svg
        .attr("width", width)
        .attr("height", height)
        .style("background-color", "#E5E5E5")
        .style("overflow", "visible")
  
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
        .range([height, 0])

        // We set up the axis
        const xAxis = d3.axisBottom(xScale)
        .tickPadding(10)
        .tickSize(0)
        const yAxis = d3.axisRight(yScale)
        .tickSize(width - tickSized) 
        .tickPadding(tickPaded)
        .ticks(5);

     // We set up the axis
        svg
        .append("g")
        .attr("transform", `translate(${xAxisPos}, ${height})`)
        .attr("class", "x axis")
        .call(xAxis);

        const yAxisGroup = svg
        .append("g")
        .attr("transform", `translate(0, 0)`)
        .attr("class", "y axis")
        .call(yAxis)
        .lower();

         yAxisGroup
        .selectAll("text")
        .attr("class", "y-axis");
       
        //font size des légendes
        svg.selectAll("g.x.axis").selectAll("text")
          .style("font-size",`${fontLegend}px`)
          .style("fill", "#9B9EAC");
       svg.selectAll("g.y.axis").selectAll("text")
          .style("font-size", fontLegend + "px")
          .style("fill", "#9B9EAC");


        svg.selectAll("g").selectAll("line").attr("stroke", "lightgrey");
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
      height - yScale(d.calories),
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
      height - yScale(d.kilogram),
      borderRadius
    )
  )
  .attr("fill", "#282D30")
        
        svg.selectAll("g").selectAll("path.domain").attr("stroke", "none");
        svg.selectAll('g').selectAll('text').attr('margin', '50px')
svg.selectAll('.y.axis') 
    .selectAll('text')  

  svg
  .selectAll(".hover-area")
  .data(dataUserActivity.sessions)
  .enter()
  .append("rect")
  .attr("class", "hover-area")
  .attr("x", (d) => xScale(formatDate(d.day)) - 20)
  .attr("y", 0)
  .attr("width", xScale.bandwidth() / 2)
  .attr("height", height)
  .attr("fill", "transparent")
  .on("mouseover", function (event, d) {
    handleMouseOver(this, d, tooltipRef);
  })
  .on("mousemove", (event) => handleMouseMove(event, tooltipRef))
  .on("mouseout", function () {
    handleMouseOut(this, tooltipRef);
  });
}