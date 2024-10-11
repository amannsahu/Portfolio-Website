import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import {Link} from "react-router-dom";

const Hero = () => {

  return (
    <div className='mt-16 max-w-[800px] mx-auto'>
      <div className=' flex flex-col items-center gap-4'>
        <p className='text-white-200 uppercase'>dynamic web magic with React js</p>
        <h1 className='text-white-100 text-6xl font-semibold mt-3'>
            Transforming Concepts into Seamless <span className='text-purple'>User Experience</span>
        </h1>
        <h5 className='text-white-100 text-lg tracking-wider mt-5'>
            Hi! I'm Aman, a React.js Developer based in India
        </h5>
        <div>
            <Link to="/project">
              <button className=' flex items-center mx-auto py-2 px-6 gap-2 font-semibold rounded-xl text-white-100 border border-white-100 mt-5'>
                Show my work
                <FaTelegramPlane/>
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
