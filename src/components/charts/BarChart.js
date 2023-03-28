/**
BarChart component displays a bar chart with user activity data
@param {object} dataUserActivity - An object containing an array of user activity sessions
@param {array} dataUserActivity.sessions - Array of user activity sessions containing day, kilogram, and calories data
@returns {JSX.Element} - Returns a React component for displaying a bar chart
*/

import { useEffect, useRef } from "react";
import oval from "../../assets/Oval.svg";
import ovalRed from "../../assets/Oval-red.svg";
import { barLogic } from '../../utils/barLogic';
import { updateBarDimensions } from "../../utils/responsiveCharts/updateBarDimensions";
import styled from "styled-components";
import PropTypes from 'prop-types';

const BarChart = ({ dataUserActivity }) => {
    const d3Container = useRef(null);
    const tooltipRef = useRef(null);

  useEffect(() => {
    if (dataUserActivity && d3Container.current) {
 const { width, height, fontLegend, tickPaded, tickSized, xAxisPos } = updateBarDimensions();
 barLogic(dataUserActivity, d3Container, width, height, fontLegend, tickPaded, tickSized, xAxisPos, tooltipRef);

   const handleResize = () => {
                const { width, height, fontLegend, tickPaded, tickSized, xAxisPos } = updateBarDimensions(); // Update dimensions on resize
        barLogic(dataUserActivity, d3Container, width, height, fontLegend, tickPaded, tickSized, xAxisPos, tooltipRef);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
     
 }
  }, [dataUserActivity]);
    return (
        <GraphStyle>
            <div className='barchart-title'>
                <h3>Activité quotidienne</h3>
                <div>
                <div>
                    <img src={oval} alt="" />
                    <p>Poids (kg)</p>
                </div>
                <div>
                    <img src={ovalRed} alt="" />
                    <p>Calories brûlées (kCal)</p>
                </div>
                </div>
            </div>
           <div ref={tooltipRef} style={{ position: "absolute", display: "none", pointerEvents: "none" }} />
             <svg
          className="d3-component"
          ref={d3Container}
        />
        </GraphStyle>
    );
    };


BarChart.propTypes = {
  dataUserActivity: PropTypes.shape({
    sessions: PropTypes.arrayOf(PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    }))
  }),
};

export default BarChart;

const GraphStyle = styled.div`
   height: 100%;
    width: 90%;
    padding: 10px 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #E5E5E5;
    border-radius: 1rem;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
    margin: 0 1rem;

    .barchart-title {
        display: flex;
        justify-content: space-between;
        width: 95%;
        h3 {
            font-size: 16px;
        }
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            font-size: 12px;
            color: #282D30;
            img {
                width: 10px;
                height: 10px;    
            }
        }
    } 
`;
