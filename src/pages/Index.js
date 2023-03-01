import styled from "styled-components";

const Index = () => (
  <IndexStyle>
    <h1>Index</h1>
  </IndexStyle>
);

export default Index;

const IndexStyle = styled.div`
  background-color: var(--third);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
