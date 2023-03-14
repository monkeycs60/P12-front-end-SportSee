import styled from "styled-components";
import IndexGreetings from "../components/IndexGreetings";
import {
  getDataUser,
  getDataUserActivity,
  getDataUserAverageSession,
  getDataUserPerformance,
} from "../services/apiService";
import { useState, useEffect } from "react";
import BarChart from "../components/charts/BarChart";



const Index = () => {
  const [dataUser, setDataUser] = useState(null);
  const [dataUserActivity, setDataUserActivity] = useState(null);
  const [dataUserAverageSession, setDataUserAverageSession] = useState(null);
  const [dataUserPerformance, setDataUserPerformance] = useState(null);


  useEffect(() => {
      async function fetchData() {
        const dataFromBack = await getDataUser(18);
        setDataUser(dataFromBack);
  
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
      <BarChart dataUserActivity={dataUserActivity} />
    </IndexStyle>
  );
};

export default Index;

const IndexStyle = styled.div`
  width: 100%;
  padding: 3rem 5rem;
`;
