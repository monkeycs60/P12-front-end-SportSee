/**
Represents a nutritional information card component of the application.
@function
@param {object} props - The props that are passed to the component.
@param {string} props.nutriName - The name of the nutritional value.
@param {number} props.nutriScore - The score of the nutritional value.
@param {string} props.nutriUnit - The unit of the nutritional value.
@param {string} props.icon - The icon of the nutritional value.
@return {JSX.Element} JSX representation of the nutritional information card component.
*/

import styled from "styled-components";
import PropTypes from 'prop-types';

const NutriCard = ({ nutriName, nutriScore, nutriUnit, icon }) => {
    return (
       <NutriCardStyle>
            <img src={icon} alt="" />
                <div className="txt">
                    <h3>{nutriScore}{nutriUnit}</h3>
                    <p>{nutriName}</p>
                </div>
      </NutriCardStyle>
    );
    };

    NutriCard.propTypes = {
  nutriName: PropTypes.string.isRequired,
  nutriScore: PropTypes.number.isRequired,
  nutriUnit: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NutriCard;

const NutriCardStyle = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: #E5E5E5;
    border-radius: 5px;
    padding: 10px 10px 10px 30px;
    h3 {
        font-size: 20px;
        font-weight: 700;
    }
    .txt {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

      @media (max-width: 1700px) {
    // Your styles for the 1700px breakpoint go here
    height: 85px;
    img {
        width: 50px;
        height: 50px;
    }
    h3 {
      font-size: 18px;
    }
    p {
        font-size: 14px;
    }
  }

  @media (max-width: 1400px) {
    height: 75px;
    // Your styles for the 1400px breakpoint go here
    img {
        width: 40px;
        height: 40px;
    }
    h3 {
      font-size: 16px;
    }
    p {
        font-size: 12px;
    }
  }

  @media (max-width: 1200px) {
    height: 85px;
    // Your styles for the 1200px breakpoint go here
    img {
        width: 40px;
        height: 40px;
    }
    h3 {
      font-size: 16px;
    }
    p {
        font-size: 12px;
    }
  }
    `;