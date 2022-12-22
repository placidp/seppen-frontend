import { FC, useState } from 'react'
import { Alert, Button, TextField } from '@mui/material'

import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { LoginFormSchema } from '../../../utils/validations'

import styles from '../AuthDialog.module.scss'
import { FormField } from '../../FormField'
interface LoginFormProps {
  onOpenRegister: () => void
}

export const LoginForm: FC<LoginFormProps> = ({ onOpenRegister }) => {
  const [errorMessage, setErrorMessage] = useState('')

  const form = useForm({
    resolver: yupResolver(LoginFormSchema),
    mode: 'onChange',
  })
  console.log(form.formState.errors)

  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name='email' label='Почта' type='email' />
          <FormField name='password' label='Пароль' type='password' />
          {errorMessage && (
            <Alert severity='error' className='mb-20'>
              {errorMessage}
            </Alert>
          )}
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
