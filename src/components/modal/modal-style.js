import styled from "styled-components";

export default styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;

  .container {
    margin: auto;
    background: #fff;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas: "rules" "image" "close";

    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.mobile}) {
      width: 350px;
      height: 370px;
      grid-template-areas: "rules close" "image image";
      border-radius: 5px;
    }
  }

  .rules {
    grid-area: rules;
    margin: auto;
    font-size: 28px;
    font-weight: ${({ theme: { fonts } }) => fonts.weights.bold};
  }

  .close {
    grid-area: close;
    margin: auto;
    cursor: pointer;
  }

  .image {
    grid-area: image;
    margin: auto;
    width: 250px;
  }
`;
