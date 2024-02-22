"use client"

import React from 'react'
import { motion } from 'framer-motion';
import projectsData from './data/projectsData';

type Props = {}

function Projects({}: Props) {

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
        <h3 
            className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#146c86]/80'>
            {projectsData.map((proj, i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-12 md:p-38 h-screen'>
                    <motion.img
                        initial={{ y: -300, opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className='max-w-[300px]' 
                        src={proj.imgName} alt={proj.title} />

                    <div className='space-y-5 px-0 md:px-10 max-w-5xl'>
                        <h4 className='text-base font-bold text-center md:text-2xl lg:text-4xl'>
                            <span className='underline decoration-[#146c86]/80'>
                                Case study {i + 1} of {projectsData.length}: 
                            </span>{" "}
                            {proj.title}
                        </h4>

                        <p className='text-sm md:text-base xl:text-lg text-justify'>{proj.summary}</p>
                    </div>

                        <a className="bg-[#146c86]/60 my-5 py-2 px-6 rounded-md text-white font-bold text-base self-center" href={proj.link} target='_blank'>See the site!</a>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#146c86]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects