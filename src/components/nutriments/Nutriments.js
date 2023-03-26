/**
Represents a nutritional information component of the application.
@function
@param {object} props - The props that are passed to the component.
@param {object} props.dataUser - The nutritional data of the user.
@param {number} props.dataUser.Calories - The calories of the user.
@param {number} props.dataUser.Glucides - The glucides of the user.
@param {number} props.dataUser.Lipides - The lipides of the user.
@param {number} props.dataUser.Proteines - The proteins of the user.
@return {JSX.Element} JSX representation of the nutritional information component.
*/

import styled from "styled-components";
import caloriesIcon from "../../assets/calories-icon.svg";
import glucidesIcon from "../../assets/carbs-icon.svg";
import lipidesIcon from "../../assets/fat-icon.svg";
import proteinesIcon from "../../assets/protein-icon.svg";
import NutriCard from "./NutriCard";
import PropTypes from 'prop-types';

const Nutriments = ({ dataUser }) => {
  
    return (
        <NutrimentsStyle>
                { dataUser && 
                <>
                    <NutriCard nutriScore={dataUser.Calories} nutriName="Calories" nutriUnit="kcal" icon={caloriesIcon} />
                    <NutriCard nutriScore={dataUser.Proteines} nutriName="Proteines" nutriUnit="g" icon={proteinesIcon} />
                    <NutriCard nutriScore={dataUser.Glucides} nutriName="Glucides" nutriUnit="g" icon={glucidesIcon} />
                    <NutriCard nutriScore={dataUser.Lipides} nutriName="Lipides" nutriUnit="g" icon={lipidesIcon} />
                </>
            
                        }
        </NutrimentsStyle>

    )
};

Nutriments.propTypes = {
  dataUser: PropTypes.shape({
    Calories: PropTypes.number,
    Glucides: PropTypes.number,
    Lipides: PropTypes.number,
    Proteines: PropTypes.number,
  }),
};

export default Nutriments

const NutrimentsStyle = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
   padding: 20px 0;
   margin-top: 10px;

  @media (max-width: 1200px) {
    width: 23%;
  }
    `;