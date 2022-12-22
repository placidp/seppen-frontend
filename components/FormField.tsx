import React from 'react'
import { TextField } from '@mui/material'

import { useFormContext } from 'react-hook-form'

interface FormFieldProps {
  name: string
  label: string
  type: string
}

export const FormField: React.FC<FormFieldProps> = ({ name, label, type }) => {
  const { register, formState } = useFormContext()

  return (
    <TextField
      {...register(name)}
      name={name}
      label={label}
      helperText={formState.errors[name]?.message}
      type={type}
      error={!!formState.errors[name]?.message}
      size='small'
      variant='outlined'
      fullWidth
    />
  )
}
