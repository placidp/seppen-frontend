import Cookies, { parseCookies } from 'nookies'
import axios from 'axios'
import { GetServerSidePropsContext, NextPageContext } from 'next'
import { UserApi } from './user'

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>
}

export const Api = (
  ctx?: NextPageContext | GetServerSidePropsContext,
): ApiReturnType => {
  const cookies = ctx ? Cookies.get(ctx) : parseCookies()
  const token = cookies.token

  const instance = axios.create({
    baseURL: 'http://localhost:7777',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  return {
    user: UserApi(instance),
  }
}
