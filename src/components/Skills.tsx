"use client"

import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'
import skillsData from './data/skillsData'


type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center justify-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency profieciency</h3>

      <div className='grid grid-cols-4 gap-5'>
            {skillsData.map((skill) => (
              <Skill 
                key={skill.name}
                name={skill.name}
                imgName={skill.imgName}
                progress={skill.progress}
                directionLeft={skill.directionLeft}
              />
            ))}
      </div>
    </motion.div>
  )
}

export default Skills