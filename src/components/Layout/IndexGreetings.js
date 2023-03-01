import styled from "styled-components";

const IndexGreetings = ({ data }) => {
  console.log("ceci est data depuis Greetings", data);
  return (
    <IndexGreetingsStyle>
      <div>
        Bonjour <span>{data && data.data.userInfos.firstName}</span>
      </div>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </IndexGreetingsStyle>
  );
};

export default IndexGreetings;

const IndexGreetingsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  div {
    font-size: 2rem;
    font-weight: 900;
  span {
    color: var(--secondary);
  }
}
p {
    font-size: 1rem;
}
`;
