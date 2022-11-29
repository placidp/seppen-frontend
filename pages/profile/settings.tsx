import { Button, Divider, Paper, TextField, Typography } from '@mui/material'
import { MainLayout } from '../../layouts/MainLayout'

import styles from './Settings.module.scss'

export default function Settings() {
  return (
    <MainLayout hideComments>
      <Paper className={styles.container} elevation={0}>
        <Typography variant='h6'>Основные настройки</Typography>
        <Divider />
        <form>
          <TextField size='small' label='Никнейм' variant='outlined' fullWidth required />
          <TextField size='small' label='Эл. почта' variant='outlined' fullWidth required />
          <TextField size='small' label='Пароль' variant='outlined' fullWidth required />
          <Divider />
          <Button color='primary' variant='contained'>
            Сохранить изменения
          </Button>
        </form>
      </Paper>
    </MainLayout>
  )
}
