// ACTIONS
export const INCREASE_SCORE = "INCREASE_SCORE";
export const PICK_SHAPE = "PICK_SHAPE";
export const RESET_GAME = "RESET_GAME";

// ACTION CREATORS
export const increaseScore = () => ({
  type: INCREASE_SCORE,
});

export const pickShape = (player, house) => ({
  type: PICK_SHAPE,
  payload: {
    player,
    house,
  },
});

export const resetGame = () => ({
  type: RESET_GAME,
});
