import * as d3 from "d3";

/**
Displays a tooltip with the session length when hovering over a data point
@param {Object} event - The mouseover event
@param {Object} d - The data associated with the hovered data point
@param {Object} d3Container - The d3 container
*/      
 export const showTooltip = (event, d, d3Container) => {
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

/**
Hides the tooltip when the mouse leaves the data point
@param {Object} d3Container - The d3 container
*/
export const hideTooltip = (d3Container) => {
  const tooltip = d3.select(d3Container.current.parentElement).select(".tooltip");
  tooltip.style("display", "none");
};

/**
Updates the gradient color based on the x position of the hovered data point
@param {number} xPos - The x position of the hovered data point
@param {Object} gradient - The gradient object
@param {number} width - The width of the chart
@param {Object} margin - The margin of the chart
*/
export const updateGradient = (xPos, gradient, width, margin) => {
  gradient.select(".stop1")
    .attr("offset", `${(1 - (xPos) / (width + margin.left + margin.right)) * 100}%`)
    .attr("stop-color", "rgba(128, 0, 0, 0.5)");

  gradient.select(".stop2")
    .attr("offset", `${(1 - (xPos) / (width + margin.left + margin.right)) * 100}%`)
    .attr("stop-color", "rgba(128, 0, 0, 0)");
};

/**
Handles the mouseover event of a data point
@param {Object} event - The mouseover event
@param {Object} d - The data associated with the hovered data point
@param {Object} x - The x scale
@param {Object} margin - The margin of the chart
@param {Object} gradient - The gradient object
@param {number} width - The width of the chart
@param {Object} svg - The svg object
@param {Object} d3Container - The d3 container
*/
export const handleMouseOver = (event, d, x, margin, gradient, width, svg, d3Container) => {
   const xPos = x(d.day) + margin.left; // Add margin.left to account for the translation
  updateGradient(xPos, gradient, width, margin);
  
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

  showTooltip(event, d, d3Container);
};

/**
Handles mouse out event.
@param {MouseEvent} event - The mouse event.
@param {Object} svg - The svg object.
@param {Object} d3Container - The d3 container.
@returns {void}
*/
export const handleMouseOut = (event, svg, d3Container) => {
  svg.select(".gradient-bg").attr("opacity", 0);

  d3.select(event.currentTarget)
    .transition()
    .duration(200)
    .attr("r", 20)
    .attr("opacity", "0")
    .attr("fill", "white");

  hideTooltip(d3Container);
};