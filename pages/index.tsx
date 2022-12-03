import { Post } from '../components/Post'
import { MainLayout } from '../layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout contentFullWidth>
      <Post />
      <Post />
    </MainLayout>
  )
}
