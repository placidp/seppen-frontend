import { Post } from '../components/Post'
import { MainLayout } from '../layouts/MainLayout'

const Home = () => {
  return (
    <MainLayout contentFullWidth>
      <Post />
    </MainLayout>
  )
}

export const getServerSideProps = (ctx) => {
  return {
    props: {},
  }
}

export default Home
