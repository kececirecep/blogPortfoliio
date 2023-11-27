import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';
import BlogCard from '../Blog/BlogCard';

import Data from '../../blog.json'



const LatestPosts = () => {

    const iconStyle = {
        fontSize: "32px"
    }

    const lastBlog = Data.slice(-4)


    return (
        <div>
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-4xl'>Latest <span className='specialColor'>Posts</span></h2>
                <Link to="/blog"><span className='flex gap-2 items-center text-2xl' >View all Posts<FiArrowRightCircle style={iconStyle} /></span></Link>
            </div>
            <div className='flex flex-wrap py-4'>
                {lastBlog.map((blog) => (
                    <div key={blog.id} className='w-1/4 py-4'>
                        <Link to={`/blog/${blog.id}`}><BlogCard image={blog.image} thumbnail={blog.thumbnail} title={blog.title} date={blog.date} desc={blog.shortDescription} /></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LatestPosts