import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-template-areas:
    "you house"
    "result result";
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  color: #fff;
  margin-top: 50px;
  justify-self: center;
  width: 100%;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    grid-template-areas: "${({ result }) =>
      result ? "you result house" : "you house"}";
    grid-template-columns: ${({ result }) =>
      result ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
    grid-template-rows: 1fr;
    width: ${({ result }) => (result ? "160%" : "130%")};
  }

  .player {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;

    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      flex-direction: column;
    }

    span {
      text-shadow: ${({ theme: { colors } }) => colors.shadow};

      @media (min-width: ${({ theme: { breakpoints } }) =>
          breakpoints.tablet}) {
        font-size: 20px;
        letter-spacing: 3px;
      }
    }

    .shape {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .blank {
        width: 100px;
        height: 100px;
        background: linear-gradient(
          to bottom,
          rgba(25, 36, 64, 0.6) 50%,
          rgba(19, 28, 54, 0.6) 100%
        );
        border-radius: 50%;

        @media (min-width: ${({ theme: { breakpoints } }) =>
            breakpoints.tablet}) {
          width: 200px;
          height: 200px;
        }
      }
    }
  }

  .you {
    grid-area: you;
  }

  .house {
    grid-area: house;
  }

  .result {
    grid-area: result;
    text-shadow: ${({ theme: { colors } }) => colors.shadow};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    span {
      font-size: 50px;
      font-weight: ${({ theme: { fonts } }) => fonts.weights.bold};
      margin-bottom: 15px;
    }

    button {
      color: ${({ theme: { colors } }) => colors.neutral.darkText};
      font-family: ${({ theme: { fonts } }) => fonts.family};
      background: #fff;
      letter-spacing: 3px;
      border: 2px solid #fff;
      border-radius: 5px;
      padding: 12px 60px;
      cursor: pointer;
      box-shadow: ${({ theme: { colors } }) => colors.shadow};

      &:hover {
        color: red;
      }
    }
  }
`;
