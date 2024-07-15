"use client";

import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
    } from '@/components/ui/select';

import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const info =[
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "0984 609 506",
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "longnt2601@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt/>,
        title: "Address",
        description: "Binh Thanh, Thanh Pho Ho Chi Minh",
    },
]

const Contact = () => {
    return ( 
        <motion.section 
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 1.4,duration: 0.4, ease:'easeIn'}}}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className=' flex flex-col xl:flex-row gap-[30px] '>
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none ">
                        <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl '>
                            <h3 className='text-4xl text-accent'>
                                Let's work together
                            </h3>
                            <p className='text-white/60'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum tempore commodi itaque explicabo ex totam at culpa? 
                            </p>
                            {/* input */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <Input type="firstname" placeholder='Firstname' />
                                <Input type="lastname" placeholder='Lastname' />
                                <Input type="email" placeholder='Email' />
                                <Input type="phone" placeholder='Phone' />
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder='Select a service' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                       <SelectLabel>Select a service</SelectLabel> 
                                       <SelectItem value='est'>Web Developer</SelectItem>
                                       <SelectItem value='cst'>UI/UX Design </SelectItem>
                                       <SelectItem value='mst'>Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* text area */}
                            <Textarea 
                                className='h-[200px]'
                                placeholder='Type your message here.'
                            >
                            </Textarea>
                            <Button
                                size='md'
                                className='max-w-40'
                            >
                                Send message
                            </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                        <ul className='flex flex-col gap-10'>
                            {info.map((item, index) => {
                                return(
                                    <li 
                                        key={index} 
                                        className='flex items-center gap-6 '
                                    >
                                        <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-primary text-accent rounded-md flex items-center justify-center'>
                                           <div className=' text-[28px]'>
                                                {item.icon}
                                           </div> 
                                        </div>
                                        <div className='flex-1 '>
                                            <p className='text-white/60'>
                                                {item.title} 
                                            </p>
                                            <h3 className='text-xl'>
                                                {item.description}
                                            </h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;