import { applyMiddleware, createStore } from 'redux';

import { devicesReducer } from './reducers/devices';
import { panelsReducer } from './reducers/panel';

import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from 'redux';

const reducers = combineReducers({ devices: devicesReducer, panel: panelsReducer });

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));