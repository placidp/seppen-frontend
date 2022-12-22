import { FC, useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogContentText,
  Button,
  Typography,
  TextField,
} from '@mui/material'

import { MainForm } from './forms/Main'
import { LoginForm } from './forms/Login'
import { RegisterForm } from './forms/Register'

import { Icon24Back as ArrowBackIcon } from '@vkontakte/icons'

import styles from './AuthDialog.module.scss'
interface AuthDialogProps {
  onClose: () => void
  visible: boolean
}

export const AuthDialog: FC<AuthDialogProps> = ({ onClose, visible }) => {
  const [formType, setFormType] = useState<'main' | 'login' | 'register'>(
    'main',
  )

  return (
    <Dialog open={visible} onClose={onClose} maxWidth='sm' fullWidth>
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {formType === 'main' ? (
                'Вход в Seppen'
              ) : (
                <p
                  onClick={() => setFormType('main')}
                  className={styles.backTitle}>
                  <ArrowBackIcon width={22} height={22} /> К авторизации
                </p>
              )}
              {formType === 'login' && (
                <form>
                  <TextField
                    size='small'
                    label='Эл. почта'
                    variant='outlined'
                    fullWidth
                    required
                  />
                  <TextField
                    size='small'
                    label='Пароль'
                    variant='outlined'
                    fullWidth
                    required
                  />
                  <Button color='primary' variant='contained'>
                    Войти
                  </Button>
                </form>
              )}
            </Typography>
            {formType === 'main' && (
              <MainForm onOpenLogin={() => setFormType('login')} />
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}
