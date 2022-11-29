import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Post.module.scss'
import { Paper, Typography } from '@mui/material'
import { PostActions } from '../PostActions'

interface PostProps {
  // title: string
  // id: number
  // description: string
  // imageUrl?: string
}

export const Post: React.FC<PostProps> = () =>
  // { id, title, description, imageUrl }
  {
    return (
      <Paper elevation={0} className='p-20' classes={{ root: styles.paper }}>
        <Typography variant='h4' className={styles.title}>
          <Link href={`/news/1}`}>
            {/* <a>{title}</a> */}Жизненные истории: как из-за чёрной пятницы в интернет-магазине всё может пойти не так
          </Link>
        </Typography>
        <Typography className={styles.description}>
          {/* {description} */}Во время больших распродаж нагрузка на магазин возрастает. На сайт идёт много трафика,
          покупатели активно работают с корзинами и каталогом. Если в это время произойдёт сбой, бизнес может потерять
          клиентов и деньги. Мы в Antro пообщались с заказчиками и вспомнили собственные кейсы: собрали подборку историй
          с чёрнопятничными факапами.
        </Typography>
        {/* {imageUrl && ( */}
        <img
          src='https://leonardo.osnova.io/3c6eeff9-ee6a-5b3e-83f8-6bd1148af370/-/preview/2000/-/format/webp/'
          height={500}
          width={600}
          // alt={title}
        />
        <PostActions />
      </Paper>
    )
  }
