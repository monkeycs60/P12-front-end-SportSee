import styled from "styled-components";

const Graph = ( {
    dataUser,
    dataUserActivity,
    dataUserAverageSession,
    dataUserPerformance,
}) => {
  console.log(
    "dataUserActivity", dataUserActivity
  );
  //log le premier objet de dataUserActivity
    console.log(
    "dataUserActivity", dataUserAverageSession
    );
  console.log(
    "dataUserAverageSession", dataUserAverageSession
  );
  console.log(
    "dataUserPerformance", dataUserPerformance
  );
  console.log(
    "dataUser21222222", dataUser
  );

    return (
      <GraphStyle>
<h1>
 salut
</h1>      </GraphStyle>
    );
    };

export default Graph;

const GraphStyle = styled.main`
margin: 5vh 10px;
    width: 100%;
    padding: 50px;
    background-color: lightgray;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    `;
