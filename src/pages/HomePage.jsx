import React from 'react'
import Hero from '../components/Home/Hero'
import RecentProjects from '../components/Home/RecentProjects'
import LatestPosts from '../components/Home/LatestPosts'

const HomePage = () => {
  return (
    <>
      <div className='lg:pt-36 pt-8'>
        <Hero />
      </div>
      <div className='lg:pt-36 pt-8'>
        <RecentProjects />
      </div>
      <div className='lg:pt-36 pt-8'>
        <LatestPosts/>
      </div>
    </>
  )
}

export default HomePage