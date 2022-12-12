import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4' style={{marginBottom: "8rem"}}>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hii. I'm a Prasad, nice to meet you. please take a look around.</p>
          </div>
          <div>
            <p>I am an engineer who loves to solve hardest problems in simplest way. I am always eager to learn new technologies. if I feel stuck somewhere, I always try to analyse how can I solve the problem and will do whatever it takes to solve it</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About