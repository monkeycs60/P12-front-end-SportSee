import * as d3 from 'd3';
import { curveCatmullRom } from 'd3';

export const lineLogic = (sessionsArray, d3Container, width, height, fontLegend, xPosition, yPosition) => {
      d3.select(d3Container.current).selectAll("g").remove(); 

      //this is the array of days of the week, starting by 0 = Sunday
      const dayOfWeek = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];  

      // implement tooltip
      const showTooltip = (event, d) => {
  const tooltip = d3.select(d3Container.current.parentElement).select(".tooltip");
  tooltip
    .style("display", "inline")
    .style("left", event.clientX + 10 + "px")
    .style("top", event.clientY - 50 + "px")
    .style("background", "white")
    .style("padding", "10px")
    .style("font-weight", "600")
    .html(`${d.sessionLength} min`);
    
};

const hideTooltip = () => {
  const tooltip = d3.select(d3Container.current.parentElement).select(".tooltip");
  tooltip.style("display", "none");

};

const updateGradient = (xPos) => {
  gradient.select(".stop1")
    .attr("offset", `${(1 - (xPos) / (width + margin.left + margin.right)) * 100}%`)
    .attr("stop-color", "rgba(128, 0, 0, 0.5)");

  gradient.select(".stop2")
    .attr("offset", `${(1 - (xPos) / (width + margin.left + margin.right)) * 100}%`)
    .attr("stop-color", "rgba(128, 0, 0, 0)");
};

// circle on hover
const handleMouseOver = (event, d) => {
   const xPos = x(d.day) + margin.left; // Add margin.left to account for the translation
  updateGradient(xPos);
  
 gradient.select(".stop1")
    .attr("offset", `${(1 - (xPos) / (width + margin.left + margin.right)) * 100}%`)
    .attr("stop-color", "rgba(128, 0, 0, 0.5)"); // Change the color to a much darker red

  gradient.select(".stop2")
    .attr("offset", `${(1 - (xPos) / (width + margin.left + margin.right)) * 100}%`)
    .attr("stop-color", "rgba(128, 0, 0, 0)"); // Change the color to a much darker red

  svg.select(".gradient-bg").attr("opacity", 1);
  d3.select(event.currentTarget)
    .transition()
    .duration(600)
    .attr("r", 10)
    .attr("opacity", "1")
    .attr("fill", (d) => {
      const radialGradient = svg.append("defs")
        .append("radialGradient")
        .attr("id", "radial-gradient");

      radialGradient.append("stop")
        .attr("offset", "30%")
        .attr("stop-color", "white");

      radialGradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "rgba(255, 255, 255, 0.3)");

      return "url(#radial-gradient)";
    });

  showTooltip(event, d);
};

const handleMouseOut = (event, d) => {
  svg.select(".gradient-bg").attr("opacity", 0);

  d3.select(event.currentTarget)
    .transition()
    .duration(200)
    .attr("r", 20)
    .attr("opacity", "0")
    .attr("fill", "white");

  hideTooltip();
};

      // set the dimensions and margins of the graph
      const margin = { top: 10, right: 30, bottom: 30, left: 50 };
        
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
        .attr('opacity', '0.7')
        .attr('stroke', 'white')
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
        .curve(curveCatmullRom.alpha(0.5));

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
        .attr('x', xPosition)
        .attr('y', yPosition)
        .attr('text-anchor', 'start')
        .attr('font-size', fontLegend + 'px')
        .attr('fill', 'white')
        .attr('opacity', 0.7)
        .text( `Durée moyenne des`)

        svg
        .append('text')
        .attr('x', xPosition)
        .attr('y', yPosition + 30)
        .attr('text-anchor', 'start')
        .attr('font-size', fontLegend + 'px')
        .attr('fill', 'white')
        .attr('opacity', 0.7)
        .text( `sessions`)


        //gradient on hover
  const gradient = svg.append("defs")
  .append("linearGradient")
  .attr("id", "bg-gradient")
  .attr("x1", "100%")
  .attr("y1", "0%")
  .attr("x2", "0%")
  .attr("y2", "0%");

gradient.append("stop")
  .attr("class", "stop1")
  .attr("offset", "0%")
  .attr("stop-color", "rgba(128, 0, 0, 0.5)")
  .attr("stop-opacity", 1);

gradient.append("stop")
  .attr("class", "stop2")
  .attr("offset", "100%")
  .attr("stop-color", "rgba(255, 0, 0, 0.5)")
  .attr("stop-opacity", 0);
  

  // Add the gradient to the background
        svg.append("rect")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom + 4)
  .attr("fill", "url(#bg-gradient)")
  .attr("opacity", 0)
  .attr("class", "gradient-bg")
  .attr("transform", `translate(-50, -10)`);


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
  .on("mouseover", handleMouseOver)
  .on("mousemove", showTooltip)
  .on("mouseout", handleMouseOut);

    }