import React from 'react'
import { Icon20ArrowRightOutline as ArrowRightIcon } from '@vkontakte/icons'

import data from '../../data'
import styles from './SideComments.module.scss'
import { CommentItem } from './CommentItem'
import clsx from 'clsx'

export const SideComments = () => {
  const [visible, setVisible] = React.useState(true)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  console.log(data)

  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {data.comments.popular.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  )
}
