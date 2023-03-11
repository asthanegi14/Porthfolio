import React from 'react'
import Interview from '../assets/interview.jpeg';
import Gd from '../assets/gd.jpeg';
import Lecture from '../assets/lecture.jpeg';
import Asign from '../assets/assignment.jpeg';
import Fade from 'react-reveal/Fade';


const clg = () => {
    return (

        <div name='clg' className='pt-20 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 text-black'>
            <Fade duration="3000">
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-black'>

                    <div className="pb-6">
                        <p className='text-4xl font-bold text-black font-signature'>College Work</p>
                        <p className='py-6'>This section contains all my college work</p>
                    </div>

                    <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                        <Fade distance="20%" duration="2000" bottom>
                            <div className='py-2 rounded-lg '>
                                <img src={Lecture} alt="html" className='object-cover w-full h-48' />
                                <p className='hover:scale-105 duration-500 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black text-center rounded-md shadow-md mt-4 px-4 py-4 shadow-cyan-900 font-signature'>Weekly Lectures</p>
                            </div>
                        </Fade>
                        <Fade distance="20%" duration="2000" bottom>
                            <div className='py-2 rounded-lg '>
                                <img src={Asign} alt="html" className='object-cover w-full h-48' />
                                <p className='hover:scale-105 duration-500 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black text-center rounded-md shadow-md mt-4 px-4 py-4 shadow-cyan-900 font-signature'>Assignments</p>
                            </div>
                        </Fade>
                        <Fade distance="20%" duration="2000" bottom>
                            <div className='py-2 rounded-lg '>
                                <img src={Interview} alt="html" className='object-cover w-full h-48' />
                                <p className='hover:scale-105 duration-500 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black text-center rounded-md shadow-md mt-4 px-4 py-4 shadow-cyan-900 font-signature'>Personal Interview</p>
                            </div>
                        </Fade>
                        <Fade distance="20%" duration="2000" bottom>
                            <div className='py-2 rounded-lg '>
                                <img src={Gd} alt="html" className='object-cover w-full h-48' />
                                <p className='hover:scale-105 duration-500 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black text-center rounded-md shadow-md mt-4 px-4 py-4 shadow-cyan-900 font-signature'>Group Discussion</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default clg