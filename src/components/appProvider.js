import React, { createContext, useContext, useReducer } from "react";
import info from './botConfig/info.json'

// Initial state and reducer function
const initialState = {
  textSize: info.FontSize,
  bold: info.FontWeight,
  textColour: "black",
  botCalled: info.botName,
};

const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SETTINGS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;