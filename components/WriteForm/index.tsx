import React from 'react'
import { Button, Input } from '@mui/material'
import dynamic from 'next/dynamic'

import styles from './WriteForm.module.scss'

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false })

interface WriteFormProps {}

export const WriteForm: React.FC<WriteFormProps> = () => {
  return (
    <div>
      <Input classes={{ root: styles.titleField }} placeholder='Заголовок' />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button variant='contained' color='primary'>
        Опубликовать
      </Button>
    </div>
  )
}
