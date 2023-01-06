import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import user from './user/slice'

import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

export function makeStore() {
  return configureStore({
    reducer: {
      user,
    },
    devTools: true,
  })
}

export const store = makeStore()

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type RootStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<RootStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export const wrapper = createWrapper<RootStore>(makeStore, { debug: true })
