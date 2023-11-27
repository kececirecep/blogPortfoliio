import React from 'react'
import RecentProjectsCard from './RecentProjectsCard'
import Project1 from '../../images/HomePage/project1.png'
import Project2 from '../../images/HomePage/project2.png'
import Project3 from '../../images/HomePage/project3.png'

const RecentProjects = () => {
  return (
    <div>
      <h2 className='font-bold lg:text-4xl text-[20px]'>Recent <span className='specialColor'>Projects</span></h2>
      <RecentProjectsCard
        img={Project1}
        projectName="Project 1"
        categoryText="Web Design"
        categoryBg="linear-gradient(to bottom, #1e5155, #35473B)"
      />

      <RecentProjectsCard
        img={Project2}
        projectName="Project 2"
        categoryText="Next.js"
        categoryBg="linear-gradient(to bottom, #3D202E, #432F2C)"
      />

      <RecentProjectsCard
        img={Project3}
        projectName="Project 3"
        categoryText="Awesome feature"
        categoryBg="linear-gradient(to bottom, #292456, #243959)"
      />

    </div>
  )
}

export default RecentProjects