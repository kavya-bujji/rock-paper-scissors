import styled from "styled-components";

export default styled.div`
  padding: 17px 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid ${({ theme: { colors } }) => colors.neutral.headerOutline};
  border-radius: 12px;

  .logo {
    padding: 4px;
  }

  .score  {
    background: #fff;
    height: 100%;
    width: 23%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px 0;

    .text {
      color: ${({ theme: { colors } }) => colors.neutral.scoreText};
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .number {
      font-weight: ${({ theme: { fonts } }) => fonts.weights.bold};
      font-size: 60px;
      line-height: 60px;
    }
  }
`;
