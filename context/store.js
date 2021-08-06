// React
import { object } from "prop-types";
import React, { createContext, useReducer } from "react";

// Types
import { SET_CURRENT_PROJECT } from "./types";

const initialState = {
  project: {
    title: "default title",
    description: "default description",
    imageURL: "https://miro.medium.com/max/4800/0*MGwhgis8-7h-M0M0",
  },
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case SET_CURRENT_PROJECT:
        const newState = {
          ...state,
          project: {
            title: action.payload.title,
            description: action.payload.description,
            imageURL: action.payload.imageURL,
            
          },
        };
        return newState;
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
