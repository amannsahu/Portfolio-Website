import React from 'react';
import c from "../Images/pngegg (2).png";
import oops from "../Images/pngegg (3).png";
import python from "../Images/pngegg (1).png";
import sql from "../Images/pngegg.png";
import html from "../Images/pngegg (4).png";
import css from "../Images/pngegg (5).png";
import javascript from "../Images/pngegg (6).png";
import react from "../Images/pngegg (7).png";
import redux from "../Images/pngegg (10).png";
import tailwind from "../Images/pngwing.com.png";
import github from "../Images/pngwing.com (2).png";
import git from "../Images/pngegg (9).png";

const Skills = () => {
  return (
    <div id='skills' className='lg:mt-16'>
      <h1 className=' text-white-100 font-semibold text-7xl mb-16'>My Skills</h1>
      <div className='relative w-4/5 mx-auto'>
        <div className='py-10 max-w-[800px] mx-auto space-y-6 border border-white rounded-xl'>
            <div className='flex items-center justify-evenly'>
                <img src={c} width={70} className='lg:w-24' alt='c lan' />
                <img src={oops} width={70} className='lg:w-24' alt='c++' />
                <img src={python} width={70} className='lg:w-24' alt='python' />
                <img src={sql} width={70} className='lg:w-24' alt='sql' />
            </div>

            <div className='flex items-center justify-evenly'>
                <img src={html} width={70} className='lg:w-24' alt='html' />
                <img src={css} width={70} className='lg:w-24'  alt='css'/>
                <img src={javascript} width={70} className='lg:w-24' alt='javaScript' />
                <img src={react} width={70} className='lg:w-24' alt='reactjs' />
            </div>

            <div className='flex items-center justify-evenly'>
                <img src={redux} width={70} className='lg:w-24' alt='redux' />
                <img src={tailwind} width={70} className='lg:w-24' alt='tailwindcss' />
                <img src={github} width={70} className='lg:w-24' alt='guthub' />
                <img src={git} width={70} className='lg:w-24' alt='gitrepo' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
