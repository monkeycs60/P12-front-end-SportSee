import styled from "styled-components";

const Graph = ( {
    dataUser,
    dataUserActivity,
    dataUserAverageSession,
    dataUserPerformance,
}) => {
    return (
      <GraphStyle>
        <h1>{dataUserActivity && dataUserActivity.data.sessions[0].day}</h1>
      </GraphStyle>
    );
    };

export default Graph;

const GraphStyle = styled.div`
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
