import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
import {
  Icon24Fire as FireIcon,
  Icon56MessageOutline as MessageIcon,
  Icon28StatisticsOutline as TrendingIcon,
  Icon24ListBulletOutline as ListIcon,
} from '@vkontakte/icons'

import styles from './LeftMenu.module.scss'
import { useRouter } from 'next/router'

const menu = [
  { text: 'Лента', icon: <FireIcon width={22} height={22} />, path: '/' },
  { text: 'Сообщения', icon: <MessageIcon width={22} height={22} />, path: '/messages' },
  { text: 'Рейтинг', icon: <TrendingIcon width={22} height={22} />, path: '/rating' },
  { text: 'Подписки', icon: <ListIcon width={22} height={22} />, path: '/follows' },
]

export const LeftMenu: React.FC = () => {
  const router = useRouter()

  return (
    <div className={styles.menu}>
      <ul>
        {menu.map((obj) => (
          <li key={obj.path}>
            <Link legacyBehavior href={obj.path}>
              <a>
                <Button variant={router.asPath === obj.path ? 'contained' : 'text'}>
                  {obj.icon}
                  {obj.text}
                </Button>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
