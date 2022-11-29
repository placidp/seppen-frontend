import React from 'react'
import clsx from 'clsx'
import { LeftMenu } from '../components/LeftMenu'
import { SideComments } from '../components/SideComments'

interface MainLayoutProps {
  hideComments?: boolean
  // hideMenu?: boolean
  contentFullWidth?: boolean
  children: React.ReactNode
  className?: string
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentFullWidth,
  hideComments,
  // hideMenu,
  className,
}) => {
  return (
    <div className={clsx('wrapper', className, { 'wrapper--full': contentFullWidth })}>
      <div className='leftSide'>
        <LeftMenu />
      </div>

      {/* <div className={clsx('content', { 'content--full': contentFullWidth })}>{children}</div> */}
      <div className={'content'}>{children}</div>
      {!hideComments && (
        <div className='rightSide'>
          <SideComments />
        </div>
      )}
    </div>
  )
}
