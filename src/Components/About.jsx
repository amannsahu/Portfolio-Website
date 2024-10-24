import React from 'react'
import image from "../Images/profile-pic.png";

const About = () => {
  return (
    <div id='about' className=' mt-16'>
      <h1 className=' font-semibold text-7xl text-white-100'>About Me</h1>
      <div className='flex flex-col items-center lg:gap-12 lg:flex lg:flex-row lg:items-center pt-16'>
        <div className=''>
            <img src={image} width={375} className=' rounded-full'/>
        </div>

        <div className='font-medium text-lg text-white-100 p-12 lg:w-1/2 lg:text-left lg:tracking-wider'>
            <p>
                I am a passionate Web Developer with a focus on creating clean, efficient, 
                and responsive websites. I specialize in front-end technologies like 
                HTML5, CSS3, Tailwind CSS, JavaScript, and React.js, building intuitive 
                and dynamic user interfaces. My goal is to bridge the gap between design and 
                technology, delivering seamless digital experiences. I'm always eager to take 
                on new challenges, so check out my portfolio or get in touch if you'd like to 
                collaborate on something exciting!"
            </p>
        </div>
      </div>
    </div>
  )
}

export default About;
