import styled from "styled-components";
import IndexGreetings from "../components/Layout/IndexGreetings";

const Index = ({ data }) => {
  return (
    <IndexStyle>
      <IndexGreetings data={data} />
    </IndexStyle>
  );
};

export default Index;

const IndexStyle = styled.div`
  width: 100%;
  padding: 3rem 5rem;
`;
