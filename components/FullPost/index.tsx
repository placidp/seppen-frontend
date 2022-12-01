import { Button, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { PostActions } from '../PostActions'

import { Icon56MessageOutline as MessageIcon, Icon56UserAddOutline as UserAddIcon } from '@vkontakte/icons'

import styles from './FullPost.module.scss'

interface FullPostProps {}

export const FullPost: React.FC<FullPostProps> = () => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div className='container'>
        <Typography variant='h4' className={styles.title}>
          {/* {title} */} Статья на vc.ru сделала мой стартап известным на всю страну и… навредила ему!
        </Typography>
        <div className={styles.text}>
          <p>
            Рассказываю, какие серьезные ошибки я совершил после публикации, почему разочаровался в корпорациях и что
            помогло мне развивать продукт дальше.
          </p>
          <img
            src='https://leonardo.osnova.io/f8e93175-06b2-527c-adb4-24dd468acf67/-/preview/1700/-/format/webp/'
            height={500}
            width={600}
            // alt={title}
          />
          <p>
            Привет! Это снова я — Роман Рабочий. Полтора года назад я опубликовал на VC статью о том, как разработал и
            развивал телефонного робота-секретаря Машу. Этот материал был спонтанным, а цели и KPI я сформулировал
            примерно так: «Вот здорово будет, если статью прочитает пара тысяч человек, а 300-500 станут пользоваться
            Машей».
          </p>
          <p>
            Но вселенная решила по-другому — и за первые несколько дней статья собрала десятки тысяч просмотров и
            оказалась на третьем месте в топе вообще всех публикаций на VC. В течение недели после публикации Маша
            получила более 10 тысяч новых пользователей, а несколько банков и мобильных операторов предложили мне
            сотрудничество.
          </p>
          <p>
            Казалось бы, вот он — успешный успех, о котором мечтает каждый стартап. Как бы не так 😄 Помимо тысяч
            клиентов и первой выручки, я получил все прелести выхода на рынок «сырого» продукта, стал жертвой
            неопытности в общении с корпорациями и чуть не забыл о том, для чего вообще создавал Машу.
          </p>
          <p>Но давайте обо всем по порядку.</p>
          <div style={{ width: 250, marginLeft: -14 }}>
            <PostActions />
          </div>
          <div className={styles.bottom}>
            <div className={styles.userInfo}>
              <img
                src='https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/'
                alt='Avatar'
              />
              <b>Donnie Darko</b>
              <span>+1685</span>
            </div>
            <div className={styles.actions}>
              <Button variant='contained'>
                <MessageIcon width={24} height={24} />
              </Button>
              <Button variant='contained'>
                <UserAddIcon width={24} height={24} />
                <b>Подписаться</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  )
}
