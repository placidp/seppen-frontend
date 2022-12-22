import { FC, useState } from 'react'
import { Alert, Button } from '@mui/material'
import { FormField } from '../../FormField'

import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { RegisterFormSchema } from '../../../utils/validations'

import styles from '../AuthDialog.module.scss'
interface LoginFormProps {
  onOpenRegister: () => void
  onOpenLogin: () => void
}

export const RegisterForm: FC<LoginFormProps> = ({
  onOpenRegister,
  onOpenLogin,
}) => {
  const [errorMessage, setErrorMessage] = useState('')

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  })

  const onSubmit = (data) => console.log(data)

  return (
    <FormProvider {...form}>
      <FormField name='fullName' label='Имя и фамилия' type='text' />
      <FormField name='email' label='Почта' type='email' />
      <FormField name='password' label='Пароль' type='password' />
      {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={styles.loginButtons}>
          <Button
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            onClick={onOpenRegister}
            type='submit'
            color='primary'
            variant='contained'>
            Зарегистрироваться
          </Button>
          <Button onClick={onOpenLogin} color='primary' variant='text'>
            Войти
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
