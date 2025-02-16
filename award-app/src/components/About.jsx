import React from 'react'

const About = () => {
  return (
    <div id='about' className='min-h-screen w-screen'>
      <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
      <h2 className='font-general text-sm uppercase md:text-[10px]'>Welcome to Skipiya</h2>
      <div className='mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]'>
        <b>discover</b> <b>the</b> <b>world's</b> <br /> <b>largest</b> <b>virtual</b> <b>gaming</b>
      </div>
      <div className='about-subtext'>
    <p>The Game of Survival Begins...!</p>
    <p>Skipiya Unites All Players in a Virtual World</p>
      </div>
      </div>
      <div className='h-dvh w-screen' id='clip'>
        <div className='mask-clip-path about-image'>
        <img src="img/about.webp" alt="background"
        className='absolute left-0 top-0 size-full object-cover' />
        </div>
        
      </div>
    </div>
  )
}

export default About