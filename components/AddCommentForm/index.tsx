import React from 'react'
import { Input } from '@mui/material'
import { Button } from '@mui/material'

import styles from './AddCommentForm.module.scss'

interface AddCommentFormProps {}

export const AddCommentForm: React.FC<AddCommentFormProps> = () => {
  const [clicked, setClicked] = React.useState(false)
  const [isLoading, setLoading] = React.useState(false)
  const [text, setText] = React.useState('')

  const onAddComment = async () => {
    try {
      // will do send comments later
      setClicked(false)
      setText('')
    } catch (err) {
      console.warn('Add comment', err)
      alert('Ошибка при отправке комментария')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.form}>
      <Input
        disabled={isLoading}
        onChange={(e) => setText(e.target.value)}
        value={text}
        onFocus={() => setClicked(true)}
        minRows={clicked ? 5 : 1}
        classes={{ root: styles.fieldRoot }}
        placeholder='Написать комментарий...'
        fullWidth
        multiline
      />
      {clicked && (
        <Button
          disabled={isLoading}
          onClick={onAddComment}
          className={styles.addButton}
          variant='contained'
          color='primary'>
          Опубликовать
        </Button>
      )}
    </div>
  )
}
