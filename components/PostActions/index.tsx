import React from 'react'
import { IconButton } from '@mui/material'

import {
  Icon16MessageOutline as CommentsIcon,
  Icon16RepostOutline as RepostIcon,
  Icon16BookmarkOutline as FavoriteIcon,
  Icon20ShareOutline as ShareIcon,
} from '@vkontakte/icons'

import styles from './PostActions.module.scss'

export const PostActions: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.actions}>
        <li>
          <IconButton>
            <CommentsIcon width={24} height={24} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <RepostIcon width={24} height={24} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <FavoriteIcon width={24} height={24} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <ShareIcon width={24} height={24} />
          </IconButton>
        </li>
      </ul>
    </div>
  )
}
