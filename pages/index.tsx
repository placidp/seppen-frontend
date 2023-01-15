import { NextPage } from 'next'
import { Post } from '../components/Post'
import { MainLayout } from '../layouts/MainLayout'
import { Api } from '../utils/api'
import { PostItem } from '../utils/api/types'

interface HomeProps {
  posts: PostItem[]
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  console.log(posts)
  return (
    <MainLayout contentFullWidth>
      {posts.map((obj) => (
        <Post
          key={obj.id}
          title={obj.title}
          id={obj.id}
          description={obj.body}
        />
      ))}
    </MainLayout>
  )
}

export const getServerSideProps = async (ctx) => {
  try {
    const posts = await Api().post.getAll()
    return {
      props: {
        posts,
      },
    }
  } catch (error) {
    console.log(error)
  }

  return {
    props: {
      posts: null,
    },
  }
}

export default Home
