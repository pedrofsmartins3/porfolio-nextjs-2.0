"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
  name: string,
  imgName: string,
  progress: number,
  directionLeft?: boolean,
};

function Skill({name, imgName, progress, directionLeft}: Props) {

  return (
    <motion.div 
      initial={{x: directionLeft ? -200 : 200, opacity: 0}}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0}}
      className='group relative flex cursor-pointer'>
        <Image
          width={100}
          height={100}
          src={imgName}
          alt="Picture of the author"
          className='rounded-full border border-gray-500 object-cover w-16 h-16 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-xl md:text-3xl font-bold text-black opacity-100'>{progress}%</p>
          </div>
        </div>
    </motion.div>
  )
}

export default Skill