"use client"

import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const About = (props: Props) => {
  return (
    // com o snap-center que demos ao About em page.tsx quando fazemos scroll ele vai focar no centro do about, e como lhe demos um height de screen  vai dar o efeito automatico no scroll para o centro
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex relative flex-col text-center md:text-left md:flex-row md:max-w-[1000px] lg:max-w-[1200px] px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        
        <motion.img
            src='https://i.imgur.com/I1iHM4u.jpg'
            initial={{
                x: -200,
                opacity: 0
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className='-mb-20 mt-10 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-80 xl:w-[300px] xl:h-[500px]'
        /> 

        <div className='space-y-5 p-0 md:px-10'>
            <h4 className='text-2xl font-semibold'>
                Here is a{" "}
                <span className='underline decoration-[#146c86]/50'>little</span> 
                {" "}background
            </h4>
            <p className='text-xs md:text-base'>
                I am 26 years old. 💯 Proudly a father and husband. Passionate about sports, where I find not only a source of health but also a discipline for my mind. I consider myself an eternal learner of the world, constantly absorbing new knowledge to enhance my understanding and action. As a good communicator, I seek to collaborate with people who share my vision and mindset. I am a dedicated person and strive to improve my skills daily. Although I acknowledge that I don't know everything, my determination is unwavering, and I face daily challenges with the conviction that, through perseverance, I will find solutions to any problem. This is me, a person with the desire to evolve and pursue excellence in everything I do. 🏆
            </p>
        </div>
    </motion.div>
  )
}

export default About