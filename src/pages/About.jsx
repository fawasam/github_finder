import React from 'react'

const About = () => {
  return (
    <div className='text-center'>
      <h1 className="text-6xl mb-4 text-center">Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details.This
        project is part of the React Project
       
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        {/* <a className='text-white' href='https://twitter.com/hassibmoddasser'> */}
           Fawas am
        {/* </a> */}
      </p>
    </div>
  )
}

export default About