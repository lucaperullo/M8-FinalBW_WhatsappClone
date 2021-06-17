import { useCallback, useReducer } from "react";
import { UserData, UserState } from "./userReducer";

type ActionType =
  | {type: 'UPDATE'; user: UserData}

export const useUser = (initialUser: UserState): {
  updateUser: UserData
} => {
  
}