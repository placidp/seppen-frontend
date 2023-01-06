import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ResponseUser } from '../../utils/api/types'
import { HYDRATE } from 'next-redux-wrapper'

export interface UserState {
  data: ResponseUser | null
}

const initialState: UserState = {
  data: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<ResponseUser>) => {
      state.data = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.user,
      }
    },
  },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer
