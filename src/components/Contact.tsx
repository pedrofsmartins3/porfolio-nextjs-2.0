"use client"

import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}


type Props = {}

function Contact({}: Props) {

    const { register, handleSubmit } = useForm<Inputs>();

      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:pedrofsmartins3@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
      };

  return (
    <div className='h-screen relative flex text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 
            className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-4 md:space-y-10'>
            <h4 className='text-2xl font-semibold text-center'>
                I have just what you need.{" "}
                <span className='underline decoration-[#146c86]/80'>Let's talk.</span>
            </h4>

            <div className='space-y-3 md:space-y-6'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#146c86] h-7 w-7 animate-pulse'/>
                    <p className='text-base'>+351 930593707</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#146c86] h-7 w-7 animate-pulse'/>
                    <p className='text-base'>pedrofsmartins3@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#146c86] h-7 w-7 animate-pulse'/>
                    <p className='text-base'>Porto, Portugal</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 mx-auto w-fit'>
                <div className='flex flex-col gap-2 md:flex-row'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>
                <input  {...register('subject')} placeholder="Subject" className='contactInput' type="text" />

                <textarea  {...register('message')} placeholder='Messge' className='contactInput' />

                <button type="submit" className='bg-[#146c86] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact