import * as d3 from 'd3';
import { useEffect, useRef } from "react";
import styled from "styled-components";
import oval from "../../assets/Oval.svg";
import ovalRed from "../../assets/Oval-red.svg";

const BarChart = ({ dataUserActivity }) => {
    console.log('====================================');
    console.log('dataUserActivity', dataUserActivity);
    console.log('====================================');

    const d3Container = useRef(null);

  useEffect(() => {
    if (dataUserActivity && d3Container.current) {
        // We set up the svg container
        const w = 500;
        const h = 300;
      const svg = d3.select(d3Container.current);
        svg
        .attr("width", w)
        .attr("height", h)
        .style("background-color", "white")
        .style("overflow", "visible")
        .style("fill", "yellow");

        // We set up the scales
        const xScale = d3
        .scaleBand()
        .domain(dataUserActivity.sessions.map((d) => d.day))
        .range([0, w])
        .padding(0.2);

        const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(
            dataUserActivity.sessions.map((d) => d.calories * 1.1) 
        )])
        .range([h, 0])

        // formatting the date

        // We set up the axis
        const xAxis = d3.axisBottom(xScale)
        const yAxis = d3.axisRight(yScale)
         .tickSize(w) 
    .tickPadding(10);
       

        // We set up the bars
        svg
        .selectAll("rect")
        .data(dataUserActivity.sessions)
        .enter()
        .append("rect")
        .attr("x", (d) => xScale(d.day) + xScale.bandwidth() / 2)
        .attr("y", (d) => yScale(d.calories))
        .attr("width", (xScale.bandwidth()) / 3)
        .attr("height", (d) => h - yScale(d.calories))
        .attr("fill", "#E60000")
        .raise();

        svg
        .selectAll(".bar")
        .data(dataUserActivity.sessions)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => xScale(d.day))
        .attr("y", (d) => yScale(d.kilogram))
        .attr("width", (xScale.bandwidth()) / 3)
        .attr("height", (d) => h - yScale(d.kilogram))
        .attr("fill", "#282D30")
        .raise();
        // .attr("rx", 5) // set the corner radius of the bars to 5 pixels
        

        // We set up the axis
        svg
        .append("g")
        .attr("transform", `translate(0, ${h})`)
        .call(xAxis);

        svg
        .append("g")
        .attr("transform", `translate(0, 0)`)
        .call(yAxis);


     
        svg.selectAll("g").selectAll("line").attr("stroke", "#DEDEDE");
        svg.selectAll("g").selectAll("line").lower();
        svg.selectAll("g").selectAll("line")
        .filter((d, i) => i !== 0)
        .attr("stroke-dasharray", "2,2")

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
            gap: 10px;
        }
    }
   
`;
