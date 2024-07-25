import { createContext, useContext, useReducer } from "react";

const SummaryContext = createContext();

const reducer = function (state, action) {
  switch (action.type) {
    case "setFetchData":
      return [...action.payload];
    default:
      return state;
  }
};

export function SummaryContextPrivider({ children }) {
  const [data, dispatch] = useReducer(reducer, []);

  return (
    <SummaryContext.Provider value={{ data, dispatch }}>
      {children}
    </SummaryContext.Provider>
  );
}

export const useSummaryContext = function () {
  return useContext(SummaryContext);
};
