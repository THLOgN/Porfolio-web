import React from 'react';
import Link from 'next/link';
import {FaGithub, FaLinkedinIn, FaFacebook , FaYoutube}   from 'react-icons/fa';

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/THLOgN'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/long-nguy%E1%BB%85n-th%C4%83ng-b61aa4248/'},
    {icon: <FaYoutube/>, path: ''},
    {icon: <FaFacebook/>, path: ''},
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
            {socials.map((item, index) => {
                return(
                    <Link 
                            key={index} 
                            href={item.path} 
                            className={iconStyles}
                    >
                        {item.icon} 
                    </Link>
                );
            })}
    </div>
  )
}

export default Social