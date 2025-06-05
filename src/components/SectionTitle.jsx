import React from 'react'

const SectionTitle = ({subtitle, title}) => {
  return (
    <div className='text-center'>
        <p className='text-xl text-yellow-600 py-4 italic'>---{subtitle}---</p>
        <h1 className='border-t-3 border-b-3 border-gray-300 border-l-0 border-r-0 py-5 px-8 text-2xl md:text-4xl w-fit mx-auto'>{title}</h1>
    </div>
  )
}

export default SectionTitle