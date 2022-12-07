import React from 'react'
import { TextField } from '@mui/material'

interface FormFieldProps {
  name: string
  label: string
}

export const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
  return <TextField name={name} className='mb-20' size='small' label={label} variant='outlined' fullWidth />
}
