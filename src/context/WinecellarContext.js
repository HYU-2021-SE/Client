import React, { createContext, useContext, useReducer } from 'react';

export class Wine {
  wineId;
  wineName;
  location;
  labelImage;
}

const initialState = {
  winecellarId: undefined,
  type: undefined,
  nickName: undefined,
  lock: false,
  lockPassword: '',
  lightColor: undefined,
  wines: [],
};

const winecellarReducer = (state, action) => {
  switch (action.type) {
    case 'GET_WINECELLAR':
      return state;
    case 'UPDATE_WINECELLAR':
      return {};
    default:
      return state;
  }
};

export const WinecellarState = createContext();
export const WinecellarDispatch = createContext();

export const useWinecellarState = () => {
  return useContext(WinecellarState);
};

export const useWinecellarDispatch = () => {
  return useContext(WinecellarDispatch);
};

export const WinecellarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(winecellarReducer, initialState);
  return (
    <WinecellarState.Provider value={state}>
      <WinecellarDispatch.Provider value={dispatch}>{children}</WinecellarDispatch.Provider>
    </WinecellarState.Provider>
  );
};

// export const WinecellarDispatch = React.createContext(null);
