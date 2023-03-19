import styled from "styled-components";
import IndexGreetings from "../components/IndexGreetings";
import {
  getDataUser,
  getDataUserActivity,
  getDataUserAverageSession,
  getDataUserPerformance,
  getDataUserScore
} from "../services/apiService";
import { useState, useEffect } from "react";
import BarChart from "../components/charts/BarChart";
import LineChart from "../components/charts/LineChart";
import RadialChart from "../components/charts/RadialChart";
import RadarChart from "../components/charts/RadarChart";
import Nutriments from "../components/nutriments/Nutriments";



const Index = () => {
  const [dataUser, setDataUser] = useState(null);
  const [dataUserActivity, setDataUserActivity] = useState(null);
  const [dataUserAverageSession, setDataUserAverageSession] = useState(null);
  const [dataUserPerformance, setDataUserPerformance] = useState(null);
  const [dataUserScore, setDataUserScore] = useState(null);


  useEffect(() => {
      async function fetchData() {
        const dataFromBack = await getDataUser(18);
        setDataUser(dataFromBack);

        const dataFromBackScore = await getDataUserScore(18);
        setDataUserScore(dataFromBackScore);
  
        const dataFromBackActivity = await getDataUserActivity(18);
        setDataUserActivity(dataFromBackActivity);
  
        const dataFromBackAverageSession = await getDataUserAverageSession(18);
        setDataUserAverageSession(dataFromBackAverageSession);
  
        const dataFromBackPerformance = await getDataUserPerformance(18);
        setDataUserPerformance(dataFromBackPerformance);
      }
      fetchData();
    }, []);

  return (
    <IndexStyle>
      <IndexGreetings dataUser={dataUser} />
      <div className="all-data-container">
        <div className="chart-container">
        <BarChart dataUserActivity={dataUserActivity} />
          <div className="lower-charts">
          <LineChart dataUserAverageSession={dataUserAverageSession} />     
          <RadarChart dataUserPerformance={dataUserPerformance} />
          <RadialChart dataUserScore={dataUserScore} />
          </div>
        </div>
        <Nutriments dataUser={dataUser} />
      </div>
    </IndexStyle>
  );
};

export default Index;

const IndexStyle = styled.div`
  width: calc(100vw - 100px);
  height: calc(100vh - 70px);
  background-color: white;
  padding: 40px 80px;
  .all-data-container {
    display: flex;
    justify-content: space-between;
    background-color: green;
    height: 85%;
    gap: 40px;
  }
  .chart-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    background: orange;
  }
  .lower-charts {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
    margin: 16px;
  }
`;
