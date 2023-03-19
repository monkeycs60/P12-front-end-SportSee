import styled from "styled-components";

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

export default NutriCard;

const NutriCardStyle = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: lightgray;
    border-radius: 5px;
    padding: 10px 10px 10px 30px;
    h3 {
        font-size: 20px;
        font-weight: 700;
    }
    `;