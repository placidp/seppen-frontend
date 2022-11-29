import {
  IconButton,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from '@mui/material'
import { NextPage } from 'next'
import { FollowButton } from '../../components/FollowButton'
import { MainLayout } from '../../layouts/MainLayout'

import styles from './Rating.module.scss'

interface RatingPageProps {}

const users = [
  { fullName: 'John Doe', commentsCount: 150, id: 1 },
  { fullName: 'Jane Doe', commentsCount: 114, id: 2 },
]

const Rating: NextPage<RatingPageProps> = () => (
  <MainLayout hideComments>
    <Paper className={styles.container} elevation={0}>
      <Typography className={styles.header} variant='h5'>
        Рейтинг сообществ и блогов
      </Typography>
      <Typography>
        Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из рейтинга по итогам
        месяца бесплатно получают Plus-аккаунт на месяц.
      </Typography>
      <Tabs className={styles.tabs} value={0} indicatorColor='primary' textColor='primary'>
        <Tab label='Август' />
        <Tab label='За 3 месяцуа' />
        <Tab label='За всё время' />
      </Tabs>
    </Paper>

    <Paper elevation={0}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Имя пользователя</TableCell>
            <TableCell align='right'>Рейтинг</TableCell>
            <TableCell align='right' />
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((obj) => (
            <TableRow key={obj.id}>
              <TableCell component='th' scope='row'>
                <span className={styles.tableCell}>{obj.id}</span>
                {obj.fullName}
              </TableCell>
              <TableCell align='right'>{obj.commentsCount * 2}</TableCell>
              <TableCell align='right'>
                <FollowButton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </MainLayout>
)

export default Rating
