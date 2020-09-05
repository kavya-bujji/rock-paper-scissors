import styled from "styled-components";

export default styled.div`
  width: 60%;
  margin: auto;
  display: grid;
  grid-template-areas: "header" "main";
  grid-template-rows: 1fr 3fr;
  font-family: ${({ theme: { fonts } }) => fonts.family};
  font-weight: ${({ theme: { fonts } }) => fonts.weights.semiBold};
  color: ${({ theme: { colors } }) => colors.neutral.darkText};
`;
