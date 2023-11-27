import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';
import BlogCard from '../Blog/BlogCard';

import Data from '../../blog.json'



const LatestPosts = () => {

    const iconStyle = {
        fontSize: "26px"
    }

    const lastBlog = Data.slice(-4)


    return (
        <div className=''>
            <div className='flex items-center justify-between'>
                <h2 className='font-bold lg:text-4xl text-[20px]'>Latest <span className='specialColor'>Posts</span></h2>
                <Link to="/blog"><span className='flex gap-2 items-center lg:text-2xl text-[12px]' >View all Posts<FiArrowRightCircle style={iconStyle} /></span></Link>
            </div>
            <div className='flex flex-wrap py-4 lg:flex-row flex-col '>
                {lastBlog.map((blog) => (
                    <div key={blog.id} className='w-1/4 py-4 '>
                        <Link to={`/blog/${blog.id}`}><BlogCard image={blog.image} thumbnail={blog.thumbnail} title={blog.title} date={blog.date} desc={blog.shortDescription} /></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LatestPosts