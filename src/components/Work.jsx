import React from 'react'
import Project1 from './../assets/project1.png'
import Project2 from './../assets/project2.png'
import Project3 from './../assets/project3.png'
import Project4 from './../assets/project4.png'
import project5 from './../assets/project5.png'
import project6 from './../assets/project6.png'

const Work = () => {
  return (
    <div name='work' className='bg-[#0a192f] w-full md:h-screen  text-gray-300'>
        <div className='max-w-[1000px] mx-auto mb-7 p-4 flex flex-col justify-center w-full h-full'>
            {/* classname pb=8 - */}
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'> Check out my some recent work</p>
            </div>

            {/* Container */}

            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Items */}
                <div style={{backgroundImage: `url(${Project1})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                              Fitness Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://react-fitclub-prasadmali.netlify.app/ " target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/prasadmali013/fitclub" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Project2})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                              Galaxytrvl Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://react-galaxy-tour.netlify.app/ " target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/prasadmali013/galaxyTrvl"  target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Project3})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                              crypto Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://react-xcrypto.netlify.app/" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/prasadmali013/crypto" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div style={{backgroundImage: `url(${Project4})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                              Weather Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://weather013.netlify.app/" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/prasadmali013/weather" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>                  
                </div>

                <div style={{backgroundImage: `url(${project5})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                              GithubCard Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github-card5.netlify.app/" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/prasadmali013/Github_card" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${project6})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                                Article Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://article-app013.netlify.app/ " target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/prasadmali013/article_app" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    </div>
  )
}

export default Work