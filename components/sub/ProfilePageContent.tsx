"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { UserIcon } from '@heroicons/react/24/solid'
import { GlobeAltIcon, MusicalNoteIcon, FingerPrintIcon } from '@heroicons/react/24/outline';


const ProfilePageContent = () => {

    return (
        <div className='flex flex-col items-center justify-center gap-3'>


            <motion.div
                variants={slideInFromLeft(0.5)}
                initial="hidden"
                animate="visible"
                className='my-5 max-w-[800px] mx-auto space-y-8'
            >
                <div className='text-center mt-10 mb-10 pt-[50px]' id="profile-content"> {/* Increased top margin and added padding */}
                    <h1 className='text-5xl font-bold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                            About Me
                        </span>
                    </h1>
                </div>
                <div className='text-center  mt-20 mb-10'>

                    <h2 className='text-4xl font-semibold mb-3'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">
                            From Azores to Lisbon: A Learning Adventure
                        </span>
                    </h2>

                    <p className='text-xl text-gray-400 leading-relaxed mt-3 mx-auto max-w-[800px]'>
                        I'm Bernardo Couto Melo. Growing up in the Azores, I was surrounded by natural beauty and marine life. Eager to learn and grow, I moved to Lisbon to pursue a degree in Computer Science, marking a significant chapter in my journey.
                    </p>
                </div>

                <div className='text-center mt-20 mb-10'>

                    <h2 className='text-4xl font-semibold mb-3'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-700">
                            Surfing: More Than a Sport
                        </span>
                    </h2>

                    <p className='text-xl text-gray-400 leading-relaxed mt-3 mx-auto max-w-[800px]'>
                        My global travels for surf competitions have honed my competitive skills and exposed me to varied surfing cultures. As a surf coach, I've shared these rich experiences, fostering a community united by our passion for surfing.                    </p>
                </div>

                <div className='text-center  mt-20 mb-10'>

                    <h2 className='text-4xl font-semibold mb-3'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-500">
                            Passions: Melodies, Reads, and Culinary Arts
                        </span>
                    </h2>

                    <p className='text-xl text-gray-400 leading-relaxed mt-3 mx-auto max-w-[800px]'>
                        My hobbies include playing the guitar, an outlet for creativity, and reading, offering diverse perspectives. My culinary pursuits, inspired by my Azorean roots, let me explore and recreate unique flavors.
                    </p>
                </div>


            </motion.div>


        </div>
    );
};

export default ProfilePageContent;
