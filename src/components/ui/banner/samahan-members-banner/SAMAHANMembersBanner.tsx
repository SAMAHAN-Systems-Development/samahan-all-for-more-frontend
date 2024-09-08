import Image from 'next/image'
import React from 'react'

interface Props {
  title?: string, 
  subtitle?: string
}


export const SAMAHANMembersBanner: React.FC<Props> = ({title, subtitle}: Props) => {
  return (
    <div className='absolute bg-blue w-[100%] h-72'>
        <div className=' flex justify-center items-center absolute w-[100%] h-[100%]'>
          <p className='text-title text-white text-center'>
            <h2 className=' '>{subtitle}</h2> 
            <h1 className='  font-bold '>{title}</h1>
          </p>
        </div>
        <Image 
          alt='SAMAHANN Members'
          src={'/images/samahan-members.png'}
          width={0}
          height={0}
          style={{ width: '100%', height: '100%' }}
        />
    </div>
  )
}


