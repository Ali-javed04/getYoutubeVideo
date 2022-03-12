import { Action, createFeatureSelector, createReducer, on } from "@ngrx/store";
import {  getDataAction, getDataSuccessAction } from "../actions/app.action";


export interface DataState {
    allData: any,

  }
  
  const initialState: DataState = {
    allData: [],
  }; 
  
  export const coreFeatureKey = 'core';
  export function reducer(state: any | undefined, action: Action) {
    return appReducer(state, action);
  }
  
  export const selectCoreState = createFeatureSelector<any>(coreFeatureKey);

  const appReducer = createReducer(
    initialState,
    on(getDataAction, (state,payload) => ({
      ...state,
      payload
    })),
    on(getDataSuccessAction, (state,payload) => ({
      ...state,
      allData:payload.allData
    })))