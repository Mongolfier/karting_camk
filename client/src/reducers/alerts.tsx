import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface  IAlert {
  summary?: string;
  detail?: string;
  variant?: "info" | "error" | "warning" | "success";
  id: string;
}

export type IAlertInitial = Record <string, IAlert>


const alertsSlice = createSlice({
  name: "alerts",
  initialState: {} as IAlertInitial,
  reducers: {
    createAlert(state, action: PayloadAction<IAlert>) {
      state[action.payload.id] = action.payload
    },
    removeAlert(state, action: PayloadAction<string>) {
      delete state[action.payload];
    },
  }
});

export const { createAlert, removeAlert } = alertsSlice.actions;
export const alertsReducer = alertsSlice.reducer;
