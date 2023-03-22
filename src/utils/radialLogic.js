import * as d3 from 'd3';

export const radialLogic = (dataUserScore, svgRef, width, height, circleRadius) => {
  d3.select(svgRef.current).selectAll('*').remove();

    const score = dataUserScore.score;
    const tau = 2 * Math.PI;

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(circleRadius)
      .startAngle(0);

    const svg = d3.select(svgRef.current)
      .attr('width', width) 
      .attr('height', height)
      // .style('background-color', '#FBFBFB');
      
    // Create a group element to contain the circle and text
    const circleGroup = svg.append('g')
          .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Background arc
    circleGroup.append('path')
      .datum({ endAngle: tau })
      .style('fill', 'white')
      .attr('d', arc)

    // Foreground arc (score)
    const scoreArc = d3.arc()
      .innerRadius(circleRadius) // Adjust this value to control the thickness of the arc
      .outerRadius(circleRadius - 10)
      .startAngle(0)
      .endAngle(-score * tau)
      .cornerRadius(10);

    circleGroup.append('path')
      .attr('d', scoreArc())
      .style('fill', '#FF0000');
       

    // Score text
    circleGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '.3em')
      .style('font-size', '24px')
      .text(`${Math.round(score * 100)}%`)
      .style("font-weight", "bold");

    // "de votre objectif" text
    circleGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '30px')
      .style('font-size', '14px')
      .text('de votre objectif');

    // "Score" text outside the circle
    svg.append('text')
      .attr('x', 30) // Adjust this value to control the horizontal position of the text
      .attr('y', 30) // Adjust this value to control the vertical position of the text
      .style('font-size', '18px')
      .text('Score');
}

