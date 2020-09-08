import styled from "styled-components";

export default styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-areas: "header" "main";
  grid-template-rows: 1fr 3fr;
  font-family: ${({ theme: { fonts } }) => fonts.family};
  font-weight: ${({ theme: { fonts } }) => fonts.weights.semiBold};
  color: ${({ theme: { colors } }) => colors.neutral.darkText};

  * {
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }

  @media (min-width: 1440px) {
    width: 30%;
  }
`;
