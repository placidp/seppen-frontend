import React from 'react'
import { Typography, IconButton, MenuItem, Menu, Avatar } from '@mui/material'

import { Icon16MoreHorizontal as MoreIcon } from '@vkontakte/icons'

import styles from './Comment.module.scss'

interface CommentPostProps {
  user: {
    fullname: string
    avatarUrl: string
  }
  text: string
  createdAt: string
}

export const Comment: React.FC<CommentPostProps> = ({ user: { fullname, avatarUrl }, text, createdAt }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <Avatar style={{ marginRight: 10 }} src={avatarUrl}></Avatar>
        <b>{fullname}</b>
        <span>{createdAt}</span>
      </div>
      <Typography className={styles.text}>
        <p>{text}</p>
      </Typography>
      <>
        <span className={styles.replyButton}>Ответить</span>
        <IconButton onClick={handleClick}>
          <MoreIcon />
        </IconButton>
        <Menu
          className={styles.menu}
          anchorEl={anchorEl}
          elevation={2}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          keepMounted
          style={{ padding: 0 }}>
          <MenuItem>Удалить</MenuItem>
          <MenuItem>Редактировать</MenuItem>
        </Menu>
      </>
    </div>
  )
}
