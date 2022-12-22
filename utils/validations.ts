import * as yup from 'yup'

export const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Неверная почта').required('Почта обязательна'),

  password: yup
    .string()
    .min(6, 'Пароль должен содержать не менее 6 символов')
    .required('Пароль обязателен'),
})

export const RegisterFormSchema = yup
  .object()
  .shape({
    fullName: yup
      .string()
      .trim()
      .min(3, 'Имя и фимилия должны содержать не менее 3 символов')
      .required('Имя и фамилия обязательны'),
  })
  .concat(LoginFormSchema)
