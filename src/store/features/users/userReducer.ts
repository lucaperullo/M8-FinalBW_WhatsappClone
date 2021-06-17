import { createSlice, PayloadAction, } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Contact } from "../../types";


export interface UserData {
    _id: string
    userNumber: string
    profileImg?: string
    name?: string
    contacts?: Contact[]
}

export interface UserState {
  user: UserData | null
}

const initialState: UserState = {
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload
    },
    // addContact: (state, action: PayloadAction<Contact>) => {
    //   state.user?.contacts = [...state.user?.contacts, action.payload]
    // }
  }
})

export const { updateUser } = userSlice.actions

export const selectUser = (state: RootState) => state.user.user

export default userSlice.reducer
//dispatch(userSlice.actions.updateUser(userResponse))
    //dispatch({ type: "UPDATE_USER", payload: action.payload })