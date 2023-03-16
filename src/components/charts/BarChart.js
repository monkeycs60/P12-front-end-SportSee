import * as d3 from 'd3';
import { useEffect, useRef } from "react";
import styled from "styled-components";
import oval from "../../assets/Oval.svg";
import ovalRed from "../../assets/Oval-red.svg";


function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);
  return `${day}-${month}-${year}`;
}

const BarChart = ({ dataUserActivity }) => {
    console.log('====================================');
    console.log('dataUserActivity', dataUserActivity);
    console.log('====================================');

    const d3Container = useRef(null);

  useEffect(() => {
    if (dataUserActivity && d3Container.current) {
        // We set up the svg container
        const w = 460;
        const h = 220;

      const svg = d3.select(d3Container.current);
        svg
        .attr("width", w)
        .attr("height", h)
        .style("background-color", "white")
        .style("overflow", "visible")
        .style("fill", "yellow");

        // clipath for rounded corners
        

        // We set up the scales
        const xScale = d3
        .scaleBand()
         .domain(dataUserActivity.sessions.map((d) => formatDate(d.day)))
        .range([0, w])
        .padding(0);

        const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(
            dataUserActivity.sessions.map((d) => d.calories * 1.1) 
        )])
        .range([h, 0])

        // formatting the date

        // We set up the axis
        const xAxis = d3.axisBottom(xScale)
        .tickPadding(10)
        .tickSize(0)
        // .tickSizeOuter(0);
        const yAxis = d3.axisRight(yScale)
        .tickSize(w - 40) 
        .tickPadding(10);

     // We set up the axis
        svg
        .append("g")
        .attr("transform", `translate(-15, ${h})`)
        .call(xAxis);

        const yAxisGroup = svg
        .append("g")
        .attr("transform", `translate(0, 0)`)
        .call(yAxis);

         yAxisGroup
        .selectAll("text")
        .attr("class", "y-axis");
       
        svg.selectAll("g").selectAll("line").attr("stroke", "#DEDEDE");
        svg.selectAll("g").selectAll("line").lower();
        svg.selectAll("g").selectAll("line")
        .filter((d, i) => i !== 0)
        .attr("stroke-dasharray", "2,2")
        // We set up the bars
      svg
        .selectAll("rect")
        .data(dataUserActivity.sessions)
        .enter()
        .append("rect")
        .attr("x", (d) => xScale(formatDate(d.day)) + xScale.bandwidth() / 4)
        .attr("y", (d) => yScale(d.calories))
        .attr("width", (xScale.bandwidth()) / 8)
        .attr("height", (d) => h - yScale(d.calories))
        .attr("fill", "#E60000")
        .raise();

        svg
        .selectAll(".bar")
        .data(dataUserActivity.sessions)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => xScale(formatDate(d.day)))
        .attr("y", (d) => yScale(d.kilogram))
        .attr("width", (xScale.bandwidth()) / 8)
        .attr("height", (d) => h - yScale(d.kilogram))
        .attr("fill", "#282D30")
        .raise();     
        
        svg.selectAll("g").selectAll("path.domain").attr("stroke", "none");
        svg.selectAll('g').selectAll('text').attr('margin', '50px')
svg.selectAll('.y.axis') 
    .selectAll('text')
  .style("fill", "#E60000")   
 }
  }, [dataUserActivity]);
    return (
        <GraphStyle>
            <div className='barchart-title'>
                <h3>Activité quotidienne</h3>
                <div>
                    <img src={oval} alt="" />
                    <p>Poids (kg)</p>
                </div>
                <div>
                    <img src={ovalRed} alt="" />
                    <p>Calories brûlées</p>
                </div>
            </div>
        
             <svg
          className="d3-component"
          ref={d3Container}
        />
        </GraphStyle>
    );
    };

export default BarChart;

const GraphStyle = styled.div`
    width: 60%;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
    border-radius: 1rem;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
    margin: 1rem;
    gap: 16px;

    .barchart-title {
        display: flex;
        justify-content: space-between;
        width: 500px;
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            img {
                width: 10px;
                height: 10px;    
            }
        }
    }
   
`;
