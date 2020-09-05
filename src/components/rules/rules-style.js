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
  cursor: pointer;
`;
