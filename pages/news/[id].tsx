import { MainLayout } from '../../layouts/MainLayout'
import { FullPost } from '../../components/FullPost'
import React from 'react'
import { PostComments } from '../../components/PostComments'
import { NextPage } from 'next'

interface FullPostPageProps {}

const FullPostPage: NextPage<FullPostPageProps> = () => {
  return (
    <MainLayout contentFullWidth hideComments>
      <FullPost />
      <PostComments />
    </MainLayout>
  )
}
export default FullPostPage
