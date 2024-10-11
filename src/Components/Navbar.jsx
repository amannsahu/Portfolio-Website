import React from 'react'
import {Link} from 'react-scroll';

const Navbar = () => {

  return (
    <div className=' relative max-w-[500px] mx-auto h-32'>
      <div className=' fixed top-8 left-0 right-0 w-1/2 mx-auto'>
        <nav className=' bg-white/10 backdrop-blur-lg rounded-full p-2'>
            <ul className=' flex items-center justify-evenly cursor-pointer'>
                <li>
                    <Link to="about" spy={true} smooth={true} offset={-70} duration={500}
                    className=" text-white-100 font-semibold text-lg hover:text-white">
                      About
                    </Link>
                </li>
                <li>
                    <Link to="project" spy={true} smooth={true} offset={-150} duration={500}
                    className=" text-white-100 font-semibold text-lg hover:text-white">
                      Project
                    </Link>
                </li>
                <li>
                    <Link to="skills" spy={true} smooth={true} offset={-10} duration={500}
                    className=" text-white-100 font-semibold text-lg hover:text-white">
                      Skills
                    </Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}
                    className=" text-white-100 font-semibold text-lg hover:text-white">
                      Contact
                    </Link>
                </li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;