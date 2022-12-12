import React from 'react'
import Css from './../assets/css.png'
import Github from './../assets/github.png'
import Html from './../assets/html.png'
import Javascript from './../assets/javascript.png'
import Mongo from './../assets/mongo.png'
import Node from './../assets/node.png'
import ReactImg from './../assets/react.png'

const Skills = () => {
    return (
        <div name='skills' className='bg-[#0a192f] w-full h-screen text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8' style={{marginBottom: "9rem"}}>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Html} alt="Html tagx" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Css} alt="Html tagx" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Javascript} alt="Html tagx" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="Html tagx" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="Html tagx" />
                        <p className='my-4'>NODE</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt="Html tagx" />
                        <p className='my-4'>MONGODB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Github} alt="Html tagx" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills