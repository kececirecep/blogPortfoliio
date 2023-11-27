import React from 'react'

const RecentProjectsCard = (props) => {
    return (
        <div className='bg-[#192338] rounded-xl flex lg:flex-row flex-col gap-4 lg:gap-20 items-center justify-start my-12 lg:h-[300px] pl-6 pr-2 py-6 lg:px-16'>
            <div className='p-0 flex justify-center'>
                <img src={props.img} className='lg:w-[100%] w-[25%]' alt="" />
            </div>
            <div className=''>
                <div className='flex flex-row lg:justify-start justify-center gap-8 pb-4'>
                    <h2 className='font-medium lg:text-3xl text-[15px]'>{props.projectName}</h2>
                    <span className="p-2 rounded-xl font-bold lg:text-[15px] text-[10px]"
                        style={{
                            background: props.categoryBg,
                        }}
                    >
                        {props.categoryText}
                    </span>
                </div>
                <p className='lg:text-[22px] text-[10px] text-[#CBD5E1] text-center lg:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.</p>
                <p className='lg:text-[22px] text-[10px] text-[#CBD5E1] text-center lg:text-start'>Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
            </div>
        </div>
    )
}

export default RecentProjectsCard