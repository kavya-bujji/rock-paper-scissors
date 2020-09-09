import { INCREASE_SCORE, PICK_SHAPE, RESET_GAME } from "./actions";

// REDUCERS
export const reducer = (state, { type, payload }) => {
  switch (type) {
    case INCREASE_SCORE:
      return { ...state, score: state.score + 1 };
    case PICK_SHAPE:
      return {
        ...state,
        player: payload.player,
        house: payload.house,
        isPicked: true,
      };
    case RESET_GAME: {
      return {
        ...state,
        player: "",
        house: "",
        isPicked: false,
      };
    }
    default:
      return state;
  }
};
