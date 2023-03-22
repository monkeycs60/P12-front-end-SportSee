import { useEffect, useRef } from "react";
import styled from "styled-components";
import oval from "../../assets/Oval.svg";
import ovalRed from "../../assets/Oval-red.svg";
import { barLogic } from '../../utils/barLogic';

const updateDimensions = () => {
  let width, height, fontLegend, tickPaded, tickSized, xAxisPos;
  switch (true) {
    case window.innerWidth > 1700:
      width = 960;
      height = 180;
      fontLegend = 14;
      tickPaded = 80;
      tickSized = 110;
      xAxisPos = -50;
      break;
    case window.innerWidth > 1400:
      width = 740;
      height = 140 * 0.82;
      fontLegend = 12;
      tickPaded = 60;
      tickSized = 80;
      xAxisPos = -40;
      break;
      case window.innerWidth > 1200:
      width = 560;
      height = 120;
      fontLegend = 10;
      tickPaded = 60;
      tickSized = 70;
      xAxisPos = -30;
      break;
    default:
      width = 420;
      height = 120;
      fontLegend = 9;
      tickPaded = 10;
      tickSized = 10;
      xAxisPos = -20;
  }
  //reload the page if the window is resized
  window.addEventListener("resize", () => {
    window.location.reload();
  });
  return { width, height, fontLegend, tickPaded, tickSized, xAxisPos };
};

const BarChart = ({ dataUserActivity }) => {

    const d3Container = useRef(null);
    const tooltipRef = useRef(null);

  useEffect(() => {
    if (dataUserActivity && d3Container.current) {
 const { width, height, fontLegend, tickPaded, tickSized, xAxisPos } = updateDimensions();
 barLogic(dataUserActivity, d3Container, width, height, fontLegend, tickPaded, tickSized, xAxisPos, tooltipRef);

   const handleResize = () => {
                const { width, height, fontLegend, tickPaded, tickSized, xAxisPos } = updateDimensions(); // Update dimensions on resize
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
