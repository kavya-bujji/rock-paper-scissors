import styled from "styled-components";

export default styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-areas:
    "paper scissors"
    "rock rock";

  .shape {
    display: flex;
    justify-content: center;
    align-items: center;

    &-paper {
      grid-area: paper;
    }
    &-scissors {
      grid-area: scissors;
    }
    &-rock {
      grid-area: rock;
    }
  }

  .triangle {
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    @media (max-width: 375px) {
      width: 250px;
    }
  }
`;
