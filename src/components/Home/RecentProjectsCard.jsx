import React from 'react'

const RecentProjectsCard = (props) => {
    return (
        <div className='bg-[#192338] rounded-xl flex gap-20 items-center justify-start my-12 h-[300px] px-16'>
            <div className='p-0'>
                <img src={props.img} width="190px" alt="" />
            </div>
            <div className=''>
                <div className='flex gap-8 pb-4'>
                    <h2 className='font-medium text-3xl'>{props.projectName}</h2>
                    <span className="p-2 rounded-xl font-bold"
                        style={{
                            background: props.categoryBg,
                        }}
                    >
                        {props.categoryText}
                    </span>
                </div>
                <p className='text-[22px] text-[#CBD5E1]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.</p>
                <p className='text-[22px] text-[#CBD5E1]'>Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
            </div>
        </div>
    )
}

export default RecentProjectsCard