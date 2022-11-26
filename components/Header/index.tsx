import { FC } from 'react'
import { Paper, IconButton, Avatar } from '@mui/material'

import {
  Icon28SnowflakeOutline as Logo,
  Icon56SearchOutline as SearchIcon,
  Icon24PenOutline as PenIcon,
  Icon56MessageOutline as MessageIcon,
  Icon56NotificationOutline as NotificationIcon,
  Icon28Menu as Menu,
  Icon16ArrowTriangleDown as ArrowDown,
  Icon24Moon as Moon,
  Icon24SunOutline as Sun,
} from '@vkontakte/icons'
import styles from './Header.module.scss'
import Link from 'next/link'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className={styles.headerLeft}>
        <IconButton>
          <Menu width={30} height={30} />
        </IconButton>
        <Link href='/' className={styles.logo}>
          <Logo width={52} height={52} />
        </Link>
      </div>

      <div className={styles.searchBlock}>
        <SearchIcon width={28} height={28} fill={'rgba(0, 0, 0, 0.54)'} />
        <input type='text' placeholder='Поиск' />
      </div>

      <div className={styles.headerRight}>
        <IconButton>
          <PenIcon width={30} height={30} fill={'rgba(0, 0, 0, 0.54)'} />
        </IconButton>
        <IconButton>
          <MessageIcon width={30} height={30} />
        </IconButton>
        <IconButton>
          <NotificationIcon width={30} height={30} />
        </IconButton>

        <div className={styles.nightMode}>
          <IconButton>
            {/* <Moon width={30} height={30} /> */}
            <Sun width={30} height={30} />
          </IconButton>
        </div>

        <Avatar
          className={styles.avatar}
          alt='Remy Sharp'
          src='https://lh3.googleusercontent.com/a/ALm5wu3GF2TPl5piy7ckyzDKJ8k6WT9JZ-vaOE90uAK2MA=s83-c-mo'
        />
        <ArrowDown />
      </div>
    </Paper>
  )
}
