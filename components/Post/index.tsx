import React from 'react'
import Link from 'next/link'

import styles from './Post.module.scss'
import { Paper, Typography } from '@mui/material'
import { PostActions } from '../PostActions'

interface PostProps {}

export const Post: React.FC<PostProps> = () => {
  return (
    <Paper elevation={0} classes={{ root: styles.paper }}>
      <Typography variant='h4' className={styles.title}>
        <Link href={`/news/1}`}>
          Жизненные истории: как из-за чёрной пятницы в интернет-магазине всё может пойти не так
        </Link>
      </Typography>
      <Typography className={styles.description}>
        Во время больших распродаж нагрузка на магазин возрастает. На сайт идёт много трафика, покупатели активно
        работают с корзинами и каталогом. Если в это время произойдёт сбой, бизнес может потерять клиентов и деньги. Мы
        в Antro пообщались с заказчиками и вспомнили собственные кейсы: собрали подборку историй с чёрнопятничными
        факапами.
      </Typography>

      <img
        src='https://leonardo.osnova.io/3c6eeff9-ee6a-5b3e-83f8-6bd1148af370/-/preview/2000/-/format/webp/'
        height={500}
        width={600}
      />

      <PostActions />
    </Paper>
  )
}
