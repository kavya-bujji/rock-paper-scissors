import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-family: ${({ theme: { fonts } }) => fonts.family};
  font-weight: ${({ theme: { fonts } }) => fonts.weights.semiBold};
  color: ${({ theme: { colors } }) => colors.neutral.darkText};
`;
