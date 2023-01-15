import React, { useState } from 'react'
import { Button, Input } from '@mui/material'
import dynamic from 'next/dynamic'

import styles from './WriteForm.module.scss'
import { Api } from '../../utils/api'

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), {
  ssr: false,
})

interface WriteFormProps {
  data?: any
}

export const WriteForm: React.FC<WriteFormProps> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [blocks, setBlocks] = useState([])

  const onAddPost = async () => {
    try {
      setIsLoading(true)
      const post = await Api().post.create({
        title,
        body: blocks,
      })
      console.log(post)
    } catch (error) {
      console.warn('Create post', error)
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

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
      <Button
        onClick={onAddPost}
        disabled={isLoading}
        variant='contained'
        color='primary'>
        Опубликовать
      </Button>
    </div>
  )
}
