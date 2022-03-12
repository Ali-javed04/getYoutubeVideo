import { createAction, props } from "@ngrx/store"

export const getDataAction = createAction('[App] Data', props<{ key: string }>());
export const getDataSuccessAction = createAction('[App] Data Success', props<{ allData: any }>());
export const getDataErrorAction = createAction('[App] Data error');
