 import * as d3 from "d3";
 
 /** 
Handles the mouseover event of the chart bars.
@function
@param {Element} element - The element being hovered over.
@param {Object} d - The data object of the hovered bar.
@param {Object} tooltipRef - The tooltip element.
@returns {void}
*/
 export const handleMouseOver = (element, d, tooltipRef) => {
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

/**
Handles the mousemove event of the chart bars.
@function
@param {Event} event - The mousemove event.
@param {Object} tooltipRef - The tooltip element.
@returns {void}
*/
export const handleMouseMove = (event, tooltipRef) => {
  const tooltipWidth = tooltipRef.current.clientWidth;
  const tooltipHeight = tooltipRef.current.clientHeight;
  const offsetX = 80;
  const offsetY = 40;

  d3.select(tooltipRef.current)
    .style("left", `${event.pageX - tooltipWidth + offsetX}px`)
    .style("top", `${event.pageY - tooltipHeight - offsetY}px`);
};

/**
Handles the mouseout event of the chart bars.
@function
@param {Element} element - The element being hovered over.
@param {Object} tooltipRef - The tooltip element.
@returns {void}
*/
export const handleMouseOut = (element, tooltipRef) => {
  d3.select(element)
    .attr("fill", "transparent");

  d3.select(tooltipRef.current).style("display", "none");
};

/**
Formats the content of the tooltip for a given data object.
@function
@param {Object} d - The data object for which the tooltip content will be formatted.
@returns {string} The formatted tooltip content.
*/
export const formatTooltipContent = (d) => {
  return `
    ${d.kilogram}kg<br />
    <br />
    ${d.calories}kcal<br />
  `;
};