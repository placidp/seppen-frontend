import { Post } from '../components/Post'
import { MainLayout } from '../layouts/MainLayout'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { wrapper } from '../redux/store'
import { UserApi } from '../utils/api'
import { setUserData } from '../redux/user/slice'

const Home = () => {
  return (
    <MainLayout contentFullWidth>
      <Post />
      <Post />
    </MainLayout>
  )
}

export default Home
