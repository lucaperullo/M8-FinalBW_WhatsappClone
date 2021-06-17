import { createReducer } from '@reduxjs/toolkit'
import { updateUser } from './userActions'

const initialState = { user: [] }

const userReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(updateUser, (state, action) => {
    state.user = action.payload
  })
})

export default userReducer