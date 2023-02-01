import React, { createContext, useContext, useReducer } from "react";

// Context                       ~~~~createing context
// Provider                      ~~~~it provide data of context 
// Consumer--->useContext        ~~~~to get data of context





// prepares the data layer
const StateContext = createContext();

// wrap our app and provides the data layer
const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


//custom hooks to pull information from the data laye in one variable
const useStateValue = () => {
    return useContext(StateContext);
}
export {StateContext, StateProvider , useStateValue};   






