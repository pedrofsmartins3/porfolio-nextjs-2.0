"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { title } from 'process'

type Props = {
    jobTitle: string,
    img: string,
    company: string,
    dateStarted: string,
    dateEnded?: string,
    isCurrentlyWorkingHere: boolean,
    skills: string,
    points: Array<string>,
}

function ExperienceCard({
    jobTitle,
    img,
    company,
    dateStarted,
    dateEnded,
    isCurrentlyWorkingHere,
    points,
    skills,
}: Props) {
  return (
    <article 
        className='flex flex-col rounded-lg items-center mx-auto space-y-7 flex-shrink-0 w-[300px] md:w-[600px] lg:w-[600px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer trnasition-opacity duration-200 overflow-hidden'
    >
        <motion.img 
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className='w-30 h-20 md:h-50 md:w-50 xl:w-[300px] xl:h-[200px] object-cover object-center'
            src={img} 
            alt={title}
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-base font-light md:text-2xl'>{jobTitle}</h4>
            <p className='font-bold text-base mt-1 md:text-2xl'>{company}</p>
            
            <h5 className='underline text-gray-500 pt-2'>Skills needed/learned:</h5>
            <p className='italic font-semibold pb-2'>{skills}</p>
            
            <p className='uppercase py-2 text-gray-300 text-sm'>
                From {dateStarted} - {isCurrentlyWorkingHere ? "Curring Working here" : `To ${dateEnded}`}
            </p>
        </div>

        <ul className='list-disc space-y-2 ml-3 text-sm md:text-base'>
            {points.map((point: string, i: number) => (
                <li key={i + 1}>{point}</li>
            ))}
        </ul>
    </article>
  )
}

export default ExperienceCard