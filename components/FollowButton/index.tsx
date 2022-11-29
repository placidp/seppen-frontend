import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import { Icon20Add as AddIcon, Icon20Check as CheckIcon } from '@vkontakte/icons'

import styles from './FollowButton.module.scss'

export const FollowButton: React.FC = () => {
  const [followed, setFollowed] = useState(false)

  return (
    <IconButton className={styles.iconButton} onClick={() => setFollowed(!followed)}>
      {!followed ? <AddIcon /> : <CheckIcon style={{ fontSize: 20, color: '#2ea83a' }} />}
    </IconButton>
  )
}
