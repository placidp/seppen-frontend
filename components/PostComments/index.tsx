import React, { useState } from 'react'
import { Divider, Paper, Typography, Tabs, Tab } from '@mui/material'
import { Comment } from '../Comment'
import { AddCommentForm } from '../AddCommentForm'
import data from '../../data'

import styles from './PostComments.module.scss'

interface PostCommentsProps {}

export const PostComments: React.FC<PostCommentsProps> = () => {
  const [activeTab, setActiveTab] = useState(0)
  const comments = data.comments[activeTab === 0 ? 'popular' : 'new']

  return (
    <Paper elevation={0} className={styles.paper}>
      <div className={styles.container}>
        <Typography variant='h6' className={styles.title}>
          42 комментария
        </Typography>
        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          className={styles.tabs}
          indicatorColor='primary'
          textColor='primary'
          value={activeTab}>
          <Tab label='Популярные' />
          <Tab label='По порядку' />
        </Tabs>
        <Divider />
        <AddCommentForm />
        <div className={styles.comments}>
          {comments.map((obj) => (
            <Comment key={obj.id} user={obj.user} text={obj.text} createdAt={obj.createdAt} />
          ))}
        </div>
      </div>
    </Paper>
  )
}
