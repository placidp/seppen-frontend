import Link from 'next/link'

import { Avatar, Button, Paper, Tab, Tabs, Typography } from '@mui/material'
import { Icon56MessageOutline as MessageIcon, Icon24Settings as SettingsIcon } from '@vkontakte/icons'
import { Post } from '../../components/Post'
import { MainLayout } from '../../layouts/MainLayout'

import styles from './Profile.module.scss'

export default function Profile() {
  return (
    <MainLayout contentFullWidth>
      <div className={styles.wrapper}>
        <Paper className={styles.header} elevation={0}>
          <div className={styles.headerContent}>
            <div>
              <Avatar
                style={{ width: 120, height: 120, borderRadius: 18 }}
                src='https://lh3.googleusercontent.com/a/ALm5wu3GF2TPl5piy7ckyzDKJ8k6WT9JZ-vaOE90uAK2MA=s83-c-mo'
              />
              <Typography style={{ fontWeight: 'bold', marginTop: '10px' }} variant='h4'>
                Ampelio Bart
              </Typography>
            </div>
            <div>
              <Link href='/profile/settings'>
                <Button style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }} variant='contained'>
                  <SettingsIcon />
                </Button>
              </Link>
              <Button style={{ height: 42 }} variant='contained' color='primary'>
                <MessageIcon style={{ marginRight: 10 }} width={26} height={26} />
                Написать
              </Button>
            </div>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <Typography style={{ fontWeight: 'bold', color: '#35AB66' }}>+208</Typography>
              <Typography>2 подписчика</Typography>
            </div>
            <div className={styles.stat}>
              <Typography>На проекте с 15 сен 2016</Typography>
            </div>
          </div>

          <Tabs className={styles.tabs} value={0} indicatorColor='primary' textColor='primary'>
            <Tab label='Статьи' />
            <Tab label='Комментарии' />
            <Tab label='Закладки' />
          </Tabs>
        </Paper>
        <div className={styles.contents}>
          <div>
            <Post />
            <Post />
            <Post />
          </div>
          <Paper className={styles.followers} elevation={0}>
            <b>Подписчики</b>
            <div>
              <Avatar src='https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/' />
              <Avatar src='https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/' />
            </div>
          </Paper>
        </div>
      </div>
    </MainLayout>
  )
}
