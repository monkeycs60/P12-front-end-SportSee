import { useEffect, useRef } from "react";
import { radialLogic } from '../../utils/radialLogic';

const updateDimensions = () => {
  const width = window.innerWidth > 1400 ? 300 : 200;
  const height = window.innerWidth > 1400 ? 240 : 160;
  return { width, height };
};

const RadialChart = ({ dataUserScore }) => {
  const svgRef = useRef(null);
  

  useEffect(() => {
    if (dataUserScore && svgRef.current) {
      const { width, height } = updateDimensions();
      radialLogic(dataUserScore, svgRef, width, height);

      const handleResize = () => {
                const { width, height } = updateDimensions(); // Update dimensions on resize
        radialLogic(dataUserScore, svgRef, width, height);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [dataUserScore]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default RadialChart;