import React from 'react'
import Link from 'next/link'

import styles from './Post.module.scss'
import { Paper, Typography } from '@mui/material'
import { PostActions } from '../PostActions'

interface PostProps {
  title: string
  id: number
  description: string
  imageUrl?: string
}

export const Post: React.FC<PostProps> = ({
  title,
  id,
  description,
  imageUrl,
}) => {
  console.log(description)
  return (
    <Paper elevation={0} classes={{ root: styles.paper }}>
      <Typography variant='h4' className={styles.title}>
        <Link href={`/news/${id}}`}>{title}</Link>
      </Typography>
      <Typography className={styles.description}>{description}</Typography>

      {imageUrl && (
        <img
          src='https://leonardo.osnova.io/3c6eeff9-ee6a-5b3e-83f8-6bd1148af370/-/preview/2000/-/format/webp/'
          height={500}
          width={600}
          alt={title}
        />
      )}

      <PostActions />
    </Paper>
  )
}
