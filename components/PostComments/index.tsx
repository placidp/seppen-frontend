import React, { useState } from 'react'
import { Divider, Paper, Typography, Tabs, Tab } from '@mui/material'
import { Comment } from '../Comment'
interface PostComments {
  // postId: number
}

import styles from './PostComments.module.scss'

export const PostComments: React.FC<PostComments> = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <Paper elevation={0} className={styles.wrapper}>
      <div className='container'>
        <Typography variant='h6' className={styles.title}>
          42 комментария
        </Typography>
        <Tabs className={styles.tabs} indicatorColor='primary' textColor='primary' value={activeTab}>
          <Tab label='Популярные' />
          <Tab label='По порядку' />
        </Tabs>
        <Divider />
        <div className={styles.comments}>
          <Comment />
        </div>
      </div>
    </Paper>
  )
}
