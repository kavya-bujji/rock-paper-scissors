import styled from "styled-components";

export default styled.div`
  position: absolute;
  cursor: pointer;

  .border {
    position: relative;
    height: 140px;
    width: 140px;
    border: 20px solid
      ${({ theme: { colors }, type }) => colors.primary[type].light};
    border-radius: 50%;
    bottom: ${(props) => (props.isPushed ? "-4px" : 0)};
  }

  .icon {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .background {
    position: absolute;
    margin: auto;
    top: ${(props) => (props.isPushed ? 0 : "8px")};
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border-radius: 50%;
  }

  .border-in {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({ theme: { colors } }) => colors.neutral.light};
    border-radius: 50%;
  }

  .border-out {
    position: absolute;
    visibility: ${(props) => (props.isPushed ? "hidden" : "visible")};
    margin: auto;
    top: 0;
    bottom: -8px;
    left: 0;
    right: 0;
    background: ${({ theme: { colors }, type }) => colors.primary[type].dark};
    border-radius: 50%;
  }
`;
