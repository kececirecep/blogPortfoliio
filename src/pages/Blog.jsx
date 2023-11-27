import React from 'react'
import Data from '../blog.json'
import BlogCard from '../components/Blog/BlogCard'
import { Link } from 'react-router-dom'


const Blog = () => {
  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center py-8'>
        <h2 className='font-bold lg:text-4xl text-[20px]'><span className='specialColor'>Posts</span> Examples</h2>
        <p className='py-6 text-[#CBD5E1] lg:text-[20px] text-[10px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, adipisci!</p>
      </div>
      <div className='flex lg:flex-row flex-col flex-wrap'>
        {Data.map((blog) => (
          <div key={blog.id} className='w-1/4 py-4'>
            <Link to={`/blog/${blog.id}`}><BlogCard image={blog.image} thumbnail={blog.thumbnail} title={blog.title} date={blog.date} desc={blog.shortDescription} dangerouslySetInnerHTML={{ __html: blog.content }} /></Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog