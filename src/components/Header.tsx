"use client"

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'


type Props = {}

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
            initial={{ x: -500, opacity: 0, scale: 0.5}}
            animate={{ x: 0, opacity: 1, scale: 1}}
            transition={{ duration: 1.5 }}
            className='flex flex-row items-center cursor-pointer'
        >
            {/* Social Icons */}
            <SocialIcon 
                url="https://linkedin.com/in/pedrofsmartins3"
                fgColor='gray'
                bgColor='transparent'
            />
            <SocialIcon 
                url="https://github.com/pedrofsmartins3"
                fgColor='gray'
                bgColor='transparent'
            />
            <SocialIcon 
                url="https://www.instagram.com/pedrofsmartins3/"
                fgColor='gray'
                bgColor='transparent'
            />

        </motion.div>
        <Link href="#contact">
            <motion.div 
                initial={{ x: 500, opacity: 0, scale: 0.5}}
                animate={{ x: 0, opacity: 1, scale: 1}}
                transition={{ duration: 1.5 }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'
            >
                {/* Get in toucth */}
                
                    <SocialIcon 
                        className='cursor-pointer'
                        network='email'
                        fgColor='gray'
                        bgColor='transparent'
                    />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
            </motion.div>
        </Link>
    </header>
  )
}

export default Header