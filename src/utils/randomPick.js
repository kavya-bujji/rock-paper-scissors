export default () => {
  const picks = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * (3 - 0)) + 0;
  return picks[index];
};
