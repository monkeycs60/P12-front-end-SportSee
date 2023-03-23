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