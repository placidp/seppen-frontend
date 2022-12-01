import React from 'react'
import { Divider, Paper, Tab, Tabs, Typography } from '@mui/material'

interface PostComments {
  postId: number
}

import styles from './PostComments.module.scss'

export const PostComments: React.FC<PostComments> = () => {
  return (
    <Paper elevation={0} className={styles.wrapper}>
      <div className='container'>
        <Typography variant='h6' className={styles.title}>
          42 комментария
        </Typography>
        <Tabs className={styles.tabs} indicatorColor='primary' textColor='primary'>
          <Tab label='Популярные' />
          <Tab label='По порядку' />
        </Tabs>
        <Divider />
      </div>
    </Paper>
  )
}
