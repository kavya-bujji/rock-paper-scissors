import React, { useReducer, createContext } from "react";

export const Context = createContext();

const initialState = {
  score: 0,
  player: "",
  house: "",
  isPicked: false,
};

// ACTIONS
const INCREASE_SCORE = "INCREASE_SCORE";
const PICK_SHAPE = "PICK_SHAPE";
const RESET_GAME = "RESET_GAME";

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

// REDUCERS
const reducer = (state, { type, payload }) => {
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

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
