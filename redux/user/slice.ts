import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ResponseUser } from '../../utils/api/types'

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
    // [hydrate]: (state, action) => {
    //   return {
    //     ...state,
    //     ...action.payload.user,
    //   }
    // },
  },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer
