import React from 'react'
import Image from 'next/image'

const Sponser = () => {
  return (
   <div className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-800">Our Sponsors</h2>
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4  ml-32">
        <Image 
        src='/Apple.png'
        alt='Apple'
        width={40}
        height={15}
        className='object-contain'
        />
        <Image 
        src='/Microsoft.png'
        alt='Microsoft'
        width={160}
        height={80}
        className='object-contain'
        />
        <Image 
        src='/Slack.png'
        alt='Slack'
        width={160}
        height={80}
        className='object-contain'
        />
        <Image 
        src='/Google.png'
        alt='Google'
        width={120}
        height={60}
        className='object-contain'
        />
      </div>
    </div>
   </div>
  )
}

export default Sponser
