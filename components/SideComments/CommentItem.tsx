import React from 'react'
import styles from './SideComments.module.scss'
import Link from 'next/link'

import { Avatar } from '@mui/material'

interface CommentItemProps {
  id: number
  user: {
    id: number
    fullname: string
    avatarUrl: string
  }
  text: string
  createdAt: string
  // updatedAt: string
  post: {
    id: number
    title: string
  }
}

export const CommentItem: React.FC<CommentItemProps> = ({
  user,
  text,
  post,
}) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <Avatar style={{ marginRight: 10 }} src={user.avatarUrl}></Avatar>
        <Link
          href={`
          /profile/${user.id}
        `}>
          <b>{user.fullname}</b>
        </Link>
      </div>
      <p className={styles.text}>{text}</p>
      <Link href={`/news/${user.id}`}>
        <span className={styles.postTitle}>{post.title}</span>
      </Link>
    </div>
  )
}
