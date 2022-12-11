import { MainLayout } from '../../layouts/MainLayout'
import { FullPost } from '../../components/FullPost'
import React from 'react'
import { PostComments } from '../../components/PostComments'
import { NextPage } from 'next'
import data from '../../data'

interface FullPostPageProps {}

const FullPostPage: NextPage<FullPostPageProps> = () => {
  return (
    <MainLayout contentFullWidth>
      <FullPost />
      <PostComments />
    </MainLayout>
  )
}
export default FullPostPage
