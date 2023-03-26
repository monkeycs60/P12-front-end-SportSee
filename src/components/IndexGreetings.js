/**
Represents a component displaying greetings and goals achievement of the user.
@function
@param {object} props - The props that are passed to the component.
@param {object} props.dataUser - The data of the user.
@param {number} props.dataUser.id - The id of the user.
@param {string} props.dataUser.firstName - The first name of the user.
@param {string} props.dataUser.lastName - The last name of the user.
@param {number} props.dataUser.age - The age of the user.
@param {number} props.dataUser.score - The score of the user.
@param {number} props.dataUser.Calories - The calories of the user.
@param {number} props.dataUser.Glucides - The glucides of the user.
@param {number} props.dataUser.Lipides - The lipides of the user.
@param {number} props.dataUser.Proteines - The proteins of the user.
@return {JSX.Element} JSX representation of the greetings and goals achievement component.
*/

import styled from "styled-components";
import PropTypes from 'prop-types';

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
