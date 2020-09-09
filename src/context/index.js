import React, { useReducer, createContext } from "react";
import { reducer } from "./reducers";

export const Context = createContext();

const initialState = {
  score: 0,
  player: "",
  house: "",
  isPicked: false,
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
