import { Paper, Typography } from '@mui/material'
import Image from 'next/image'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Post } from '../components/Post'
import { LeftMenu } from '../components/LeftMenu'

function Loader() {
  return `https://via.placeholder.com/600x400}`
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Seppen</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'></link>
      </Head>
      <Header />
      <div className='wrapper'>
        <div className='leftSide'>
          <LeftMenu />
        </div>
        <div className='content'>
          <Post />
          {/* <Paper elevation={0}>
            <Typography variant='h5'>«Самокат» впервые с весны вернулся к экспансии в городах России</Typography>
            <Typography>После начала «военной операции» сервис приостановил работу в 15 городах.</Typography>
            <Image
              loader={Loader}
              src='https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp//'
              width={600}
              height={400}
              alt='mypic'
            />
          </Paper> */}
        </div>
        <div className='rightSide'></div>
      </div>
    </div>
  )
}
