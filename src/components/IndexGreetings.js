import styled from "styled-components";

const IndexGreetings = ({ dataUser }) => {
  return (
    <IndexGreetingsStyle>
      <div>
        Bonjour <span>{dataUser && dataUser.firstName}</span>
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
  padding: 0 1rem;
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
