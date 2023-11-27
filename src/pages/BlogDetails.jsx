import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../blog.json';

const BlogDetails = () => {
    const { id } = useParams();
 
    const blog = Data.find(blog => blog.id === parseInt(id));

    if (!blog) { 
        return <div>Blog gönderisi bulunamadı</div>;
    }

    return (
        <div className='mt-0 lg:mt-20'>
            <div className='py-4'>
                <h2 className='font-medium text-[20px] lg:text-5xl text-start'>{blog.title}</h2>
            </div>
            <p className='text-[#CBD5E1] text-[10px] lg:text-[20px] lg:py-8 pb-4 text-center lg:text-start'>{blog.date}</p>
            <div className='flex justify-start'>
                <img src={blog.image} className='rounded-xl w-[100%] lg:w-[50%]' alt="" />
            </div>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
    );
}

export default BlogDetails;
