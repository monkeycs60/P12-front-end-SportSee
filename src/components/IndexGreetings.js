import styled from "styled-components";
import PropTypes from 'prop-types';

const IndexGreetings = ({ dataUser }) => {
  console.log(dataUser);
  return (
    <IndexGreetingsStyle>
      <div>
        Bonjour <span>{dataUser && dataUser.firstName}</span>
      </div>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </IndexGreetingsStyle>
  );
};

IndexGreetings.propTypes = {
  dataUser: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    score: PropTypes.number,
    Calories: PropTypes.number,
    Glucides: PropTypes.number,
    Lipides: PropTypes.number,
    Proteines: PropTypes.number,
  }),
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
