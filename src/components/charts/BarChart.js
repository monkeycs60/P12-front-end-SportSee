import { useEffect, useRef } from "react";
import styled from "styled-components";
import oval from "../../assets/Oval.svg";
import ovalRed from "../../assets/Oval-red.svg";
import { barLogic } from '../../utils/barLogic';

const updateDimensions = () => {
  let width, height;

  switch (true) {
    case window.innerWidth > 1700:
      width = 1000;
      height = 140;
      break;
    case window.innerWidth > 1400:
      width = 300;
      height = 240;
      break;
    default:
      width = 200;
      height = 160;
  }

  return { width, height };
};

const BarChart = ({ dataUserActivity }) => {

    const d3Container = useRef(null);
    const tooltipRef = useRef(null);

  useEffect(() => {
    if (dataUserActivity && d3Container.current) {
 const { width, height } = updateDimensions();
 barLogic(dataUserActivity, d3Container, width, height, tooltipRef);

   const handleResize = () => {
                const { width, height } = updateDimensions(); // Update dimensions on resize
        barLogic(dataUserActivity, d3Container, width, height, tooltipRef);
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

export default BarChart;

const GraphStyle = styled.div`
   height: 100%;
    width: 90%;
    padding: 10px 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #E5E5E5;
    border-radius: 1rem;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
    margin: 1rem;
    gap: 16px;

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
