import React, { useState } from 'react'
import { Button, Input } from '@mui/material'
import dynamic from 'next/dynamic'

import styles from './WriteForm.module.scss'

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), {
  ssr: false,
})

interface WriteFormProps {
  data?: any
}

export const WriteForm: React.FC<WriteFormProps> = () => {
  const [title, setTitle] = useState('')
  const [blocks, setBlocks] = useState([])

  return (
    <div>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        classes={{ root: styles.titleField }}
        placeholder='Заголовок'
      />
      <div className={styles.editor}>
        <Editor onChange={(arr) => setBlocks(arr)} />
      </div>
      <Button variant='contained' color='primary'>
        Опубликовать
      </Button>
    </div>
  )
}
