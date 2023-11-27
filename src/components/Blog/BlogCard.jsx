import React from 'react'

const BlogCard = (props) => {
  return (
    <div className='container mx-auto'>
      <div className='w-[370px] h-[400px] bg-[#192338] rounded-xl text-[20px]'>
        <img src={props.thumbnail} width="100%" className='rounded-t-xl object-cover' alt="" />
        <div className="flex flex-col items-center p-6">
          <h4 className='text-[24px] font-bold'>{props.title}</h4>
          <date className="text-[#9CA3AF] font-light text-[16px] py-2">{props.date}</date>
          <p className='text-center text-[#F8FAFC] text-[18px]'>{props.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard