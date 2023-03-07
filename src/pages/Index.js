import styled from "styled-components";
import Graph from "../components/Graph";
import IndexGreetings from "../components/IndexGreetings";

const Index = ({
  dataUser,
  dataUserActivity,
  dataUserAverageSession,
  dataUserPerformance,
}) => {
  console.log("dataUser", dataUserActivity);
  return (
    <IndexStyle>
      <IndexGreetings dataUser={dataUser} />
      <Graph
        dataUser={dataUser}
        dataUserActivity={dataUserActivity}
        dataUserAverageSession={dataUserAverageSession}
        dataUserPerformance={dataUserPerformance}
      />
    </IndexStyle>
  );
};

export default Index;

const IndexStyle = styled.div`
  width: 100%;
  padding: 3rem 5rem;
`;
