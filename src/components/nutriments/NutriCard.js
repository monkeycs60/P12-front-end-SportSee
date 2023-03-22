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
        width: 35px;
        height: 35px;
    }
    h3 {
      font-size: 14px;
    }
    p {
        font-size: 10px;
    }
  }
    `;