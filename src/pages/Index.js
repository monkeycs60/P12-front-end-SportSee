import styled from "styled-components";
import IndexGreetings from "../components/IndexGreetings";

const Index = ({ dataUser }) => {
  return (
    <IndexStyle>
      <IndexGreetings dataUser={dataUser} />
    </IndexStyle>
  );
};

export default Index;

const IndexStyle = styled.div`
  width: 100%;
  padding: 3rem 5rem;
`;
