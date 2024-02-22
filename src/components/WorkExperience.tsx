"use client"

import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import experienceData from './data/experienceData'

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl'>Experience</h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#146c86]/80'>
            {experienceData.map((data, i) => (
                <ExperienceCard 
                  key = {i + 1}
                  jobTitle = {data.jobTitle}
                  img = {data.img}
                  company = {data.company}
                  dateStarted = {data.dateStarted}
                  dateEnded = {data.dateEnded}
                  isCurrentlyWorkingHere = {data.isCurrentlyWorkingHere}
                  points = {data.points}
                  skills = {data.skills}
              />
            ))}
        </div>
    </motion.div>
  )
}

export default WorkExperience