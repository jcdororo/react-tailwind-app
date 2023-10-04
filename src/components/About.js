import React from 'react'

const About = () => {
  return (
    <section 
      name="about"
      className='w-full h-screen'
    >
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>About this company</h2>
          <p className='py-6 text-3xl text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>

        </div>

        <p className='mt-20 text-xl'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </p>
        <p className='mt-20 text-xl'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </p>
      </div>
    </section>
  )
}

export default About