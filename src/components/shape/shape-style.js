import styled from "styled-components";

export default styled.div`
  position: absolute;
  cursor: pointer;

  &:hover {
    .border {
      bottom: ${({ isLarged }) => (isLarged ? "-8px" : "-4px")};
    }
    .background {
      top: 0;
    }

    .border-out {
      visibility: hidden;
    }
  }

  .border {
    position: relative;
    height: 100px;
    width: 100px;
    border: 15px solid
      ${({ theme: { colors }, type }) => colors.primary[type].light};
    border-radius: 50%;

    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      height: ${({ isLarged }) => (isLarged ? "200px" : "140px")};
      width: ${({ isLarged }) => (isLarged ? "200px" : "140px")};
      border-width: ${({ isLarged }) => (isLarged ? "35px" : "20px")};
    }
  }

  .icon {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 45px;

    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      width: ${({ isLarged }) => (isLarged ? "90px" : "60px")};
    }
  }

  .background {
    position: absolute;
    margin: auto;
    top: ${({ isLarged }) => (isLarged ? "12px" : "8px")};
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border-radius: 50%;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      top: 4px;
    }
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
    margin: auto;
    top: 0;
    bottom: ${({ isLarged }) => (isLarged ? "-12px" : "-8px")};
    left: 0;
    right: 0;
    background: ${({ theme: { colors }, type }) => colors.primary[type].dark};
    border-radius: 50%;
    box-shadow: ${({ isEnhanced }) =>
      isEnhanced
        ? "1px 1px 3px #222, 0px 0px 0px 60px rgba(44, 58, 85, 0.8), 0px 0px 0px 120px rgba(39, 54, 83, 0.8), 0px 0px 0px 200px rgba(34, 49, 78, 0.8)"
        : "1px 1px 3px #222"};
    z-index: -1;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      bottom: -4px;
      box-shadow: ${({ isEnhanced }) =>
        isEnhanced
          ? "1px 1px 3px #222, 0px 0px 0px 25px rgba(44, 58, 85, 0.8), 0px 0px 0px 50px rgba(39, 54, 83, 0.8), 0px 0px 0px 80px rgba(34, 49, 78, 0.8)"
          : "1px 1px 3px #222"};
    }
  }
`;
