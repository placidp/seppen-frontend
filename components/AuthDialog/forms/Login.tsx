import { FC, useState } from 'react'
import { Alert, Button, TextField } from '@mui/material'

import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { LoginFormSchema } from '../../../utils/validations'

import { FormField } from '../../FormField'

import { UserApi } from '../../../utils/api'
import { LoginDto } from '../../../utils/api/types'
import { setCookie } from 'nookies'

import { useAppDispatch } from '../../../redux/store'
import { setUserData } from '../../../redux/user/slice'

import styles from '../AuthDialog.module.scss'
interface LoginFormProps {
  onOpenRegister: () => void
}

export const LoginForm: FC<LoginFormProps> = ({ onOpenRegister }) => {
  const dispatch = useAppDispatch()
  const [errorMessage, setErrorMessage] = useState('')

  const form = useForm({
    resolver: yupResolver(LoginFormSchema),
    mode: 'onChange',
  })
  console.log(form.formState.errors)

  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await UserApi.login(dto)
      setCookie(null, 'authToken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      setErrorMessage('')
      dispatch(setUserData(data))
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message)
      }
      console.warn('Неверный логин или пароль', error)
    }
  }

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name='email' label='Почта' type='email' />
          <FormField name='password' label='Пароль' type='password' />
          {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
          <div className={styles.loginButtons}>
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              type='submit'
              color='primary'
              variant='contained'>
              Войти
            </Button>
            <Button onClick={onOpenRegister} color='primary' variant='text'>
              Регистрация
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
