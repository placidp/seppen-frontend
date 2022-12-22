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
            </Typography>
            {formType === 'main' && (
              <MainForm onOpenLogin={() => setFormType('login')} />
            )}
            {formType === 'login' && (
              <LoginForm onOpenRegister={() => setFormType('register')} />
            )}
            {formType === 'register' && (
              <RegisterForm
                onOpenRegister={() => setFormType('register')}
                onOpenLogin={() => setFormType('login')}
              />
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}
