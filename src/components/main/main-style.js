import styled from "styled-components";

export default styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .shape {
    &-paper {
      position: absolute;
      top: 5%;
      left: 20%;
    }
    &-scissors {
      position: absolute;
      top: 5%;
      right: 44%;
      border-right-color: 0;
    }
    &-rock {
      position: absolute;
      margin: auto;
      left: 37%;
      right: 0;
    }
  }
`;
