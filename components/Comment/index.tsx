import React from 'react'
import { Typography, IconButton, MenuItem, Menu, Avatar } from '@mui/material'

import { Icon16MoreHorizontal as MoreIcon } from '@vkontakte/icons'

import styles from './Comment.module.scss'
import { StringLiteral } from 'typescript'

interface CommentPostProps {
  user: {
    fullName: string
  }
  text: StringLiteral
}

export const Comment: React.FC<CommentPostProps> = () => {
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
        <Avatar style={{ marginRight: 10 }}></Avatar>
        <b>Master Oogway</b>
        <span>5 часов</span>
      </div>
      <Typography className={styles.text}>
        <p>
          Некоторое время пользовалась бесплатным виртуальным помощником от тинькофа → он тоже отвечает на звонки, а
          потом отправляет тебе расшифровку. Корявенько, но удобно
        </p>
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
