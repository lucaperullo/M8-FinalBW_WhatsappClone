import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {}
}

export const fetchUserData = createAsyncThunk(
  'user/me',
  async () => {
    try {
      const response = await fetch('http://localhost:3001/api/user')
    }
  }
)
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: {
      reducer: (state, action) => {
        state.user = action.payload
      }
    }
  }
})

export const { updateUser } = userSlice.actions

export default userSlice.reducer