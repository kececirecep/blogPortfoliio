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
        <div className='mt-20'>
            <div className='py-4'>
                <h2 className='font-medium text-5xl text-center'>{blog.title}</h2>
            </div>
            <p className='text-[#CBD5E1] text-[20px] py-8'>{blog.date}</p>
            <div className='flex justify-start'>
                <img src={blog.image} width="50%" className='rounded-xl' alt="" />
            </div>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
    );
}

export default BlogDetails;
