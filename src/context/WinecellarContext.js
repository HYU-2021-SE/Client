import React, { createContext, useContext, useReducer } from 'react';
import { mergeDeepRight } from 'rambda';

const WinecellarType = {
  W8: {
    floor: 1,
    max: 8,
  },
  W43: {
    floor: 1,
    max: 43,
  },
  W75: {
    floor: 2,
    max: 75,
  },
  W85: {
    floor: 2,
    max: 85,
  },
  W89: {
    floor: 2,
    max: 89,
  },
};

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
  temperature: 15,
  humidity: 75,
  wines: [],
};

const winecellarReducer = (state, action) => {
  switch (action.type) {
    case 'GET_WINECELLAR': {
      return mergeDeepRight(state, {
        nickName: action.data.nickName ?? '',
        lock: action.data.lock,
        lockPassword: action.data.lockPassword ?? '',
        lightColor: action.data.lightColor,
        type: WinecellarType[action.data.type],
        wines: action.data.wineDtos,
        winecellarId: action.data.winecellarId,
        temperature: action.data.temperature ?? 15,
        humidity: action.data.humidity ?? 75,
      });
    }
    case 'UPDATE_WINECELLAR':
      return mergeDeepRight(state, {
        ...state,
        nickName: action.data.nickName,
        lock: action.data.lock,
        lockPassword: action.data.lockPassword,
        lightColor: action.data.lightColor,
        temperature: action.data.temperature,
        humidity: action.data.humidity,
      });
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
