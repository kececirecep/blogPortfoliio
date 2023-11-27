import React from 'react'
import Hero from '../components/Home/Hero'
import RecentProjects from '../components/Home/RecentProjects'
import LatestPosts from '../components/Home/LatestPosts'

const HomePage = () => {
  return (
    <>
      <div className='pt-36'>
        <Hero />
      </div>
      <div className='pt-36'>
        <RecentProjects />
      </div>
      <div className='pt-36'>
        <LatestPosts/>
      </div>
    </>
  )
}

export default HomePage