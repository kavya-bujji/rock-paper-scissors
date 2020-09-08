import styled from "styled-components";

export default styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  border: 2px solid #999;
  border-radius: 5px;
  padding: 8px 20px;
  color: #fff;
  letter-spacing: 4px;
  font-family: ${({ theme: { fonts } }) => fonts.family};
  background: none;
  box-shadow: 1px 1px 3px #111;
  cursor: pointer;

  &:hover {
    color: ${({ theme: { colors } }) => colors.neutral.darkText};
    background: #fff;
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    position: relative;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 10px;
  }
`;
