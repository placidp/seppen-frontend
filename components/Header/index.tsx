import { FC, useEffect, useState } from 'react'
import Link from 'next/link'

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
  Icon28User as UserIcon,
} from '@vkontakte/icons'
import styles from './Header.module.scss'
import { AuthDialog } from '../AuthDialog'

import { useAppSelector } from '../../redux/store'
import { selectUserData } from '../../redux/user/selectors'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const userData = useAppSelector(selectUserData)
  const [isAuthOpen, setIsAuthOpen] = useState(false)

  const openAuthDialog = () => {
    setIsAuthOpen(true)
  }

  const closeAuthDialog = () => {
    setIsAuthOpen(false)
  }

  useEffect(() => {
    if (isAuthOpen && userData) {
      setIsAuthOpen(false)
    }
  }, [isAuthOpen, userData])

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
        <Link href='/write'>
          <IconButton>
            <PenIcon width={30} height={30} fill={'rgba(0, 0, 0, 0.54)'} />
          </IconButton>
        </Link>
        <IconButton>
          <MessageIcon width={30} height={30} />
        </IconButton>
        <IconButton>
          <NotificationIcon width={30} height={30} />
        </IconButton>

        <div className={styles.nightMode}>
          <IconButton>
            <Sun width={30} height={30} />
          </IconButton>
        </div>
        {userData ? (
          <Link href='/profile/1'>
            <Avatar
              className={styles.avatar}
              alt='Remy Sharp'
              src='https://lh3.googleusercontent.com/a/ALm5wu3GF2TPl5piy7ckyzDKJ8k6WT9JZ-vaOE90uAK2MA=s83-c-mo'
            />
          </Link>
        ) : (
          <div className={styles.loginButton} onClick={openAuthDialog}>
            <UserIcon />
            Войти
          </div>
        )}
        {/* <ArrowDown /> */}
      </div>
      <AuthDialog onClose={closeAuthDialog} visible={isAuthOpen} />
    </Paper>
  )
}
