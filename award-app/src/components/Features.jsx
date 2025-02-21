import React from 'react'

const BentoCard = ({ src, title, description, isCommingSoon }) => {
    return (
        <div className='relative size-full'>
            <video src={src}
            loop
            muted
            autoPlay
            className='absolute left-0 top-0 size-full object-cover object-center' />
            <div className='relative z-10 flex-size-full flex-col  justify-between p-5 text-blue-50'>
        <div>
            <h1 className='bento-title special-font'>{title}</h1>
        </div>
            </div>
        </div>
    )
}

const Features = () => {
  return (
    <section className='bg-black pb-52'>
<div className='container mx-auto px-3 md:px-10'>
<div className='px-5 py-32 '>
<p className='font-circular-web text-lg text-blue-50'>Into The Visual World Layer</p>
</div>
<p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>🚀 Dive into a world of adventure, strategy, and stunning animations. Whether you're here to challenge yourself, explore new realms, or just have fun, it brings a seamless and visually captivating experience right to your browser.</p>
</div>
<div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
    <BentoCard
    src="videos/feature-1.mp4"
    title={<><b>radint</b></>}
    description="A cross-platform meta game app, turning your activities across Web2 and Web3 games into a rewarding adventure"
    isCommingSoon />
</div>
    </section>
  )
}

export default Features