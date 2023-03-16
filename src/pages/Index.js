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
      <div className="bar-grid">
      <BarChart dataUserActivity={dataUserActivity} />
      <LineChart dataUserAverageSession={dataUserAverageSession} />
      </div>
      <RadialChart dataUserPerformance={dataUserScore} />
    </IndexStyle>
  );
};

export default Index;

const IndexStyle = styled.div`
  width: 100%;
  padding: 10px 20px;
  .bar-grid {
    display: flex;
  }
`;
