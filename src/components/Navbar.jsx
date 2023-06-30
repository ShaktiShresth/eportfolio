import { useState } from 'react';
import Logo from '../assets/sslogo1.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';
import Resume from '../assets/resume.pdf';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = ()=> setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="logo for portfolio" style={{width:"50px"}}/>
      </div>

      {/* menu */}
        <ul className='hidden md:flex'>
            <li className='hover:text-pink-600 link-style'>
              <Link to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='hover:text-pink-600 link-style'>
              <Link to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li className='hover:text-pink-600 link-style'>
              <Link to='skills' smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='hover:text-pink-600 link-style'>
              <Link to='work' smooth={true} duration={500}>Work</Link>
            </li>
            <li className='hover:text-pink-600 link-style'>
              <Link to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='z-10 md:hidden cursor-pointer'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
            <li className='py-6 text-4xl hover:text-pink-600'>
              <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='py-6 text-4xl hover:text-pink-600'>
              <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li className='py-6 text-4xl hover:text-pink-600'>
              <Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='py-6 text-4xl hover:text-pink-600'>
              <Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link>
            </li>
            <li className='py-6 text-4xl hover:text-pink-600'>
              <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
      </ul>

      {/* Social icons */}
      <div className='hidden socialplats:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a 
              className='flex justify-between items-center w-full text-hray-300' 
              href="https://www.linkedin.com/in/shakti-shrestha-5a0288178/"
              target='_blank'
              rel="noreferrer" 
              >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a 
              className='flex justify-between items-center w-full text-hray-300' 
              href="https://github.com/ShaktiShresth"
              target='_blank'
              rel="noreferrer" 
              >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a 
              className='flex justify-between items-center w-full text-hray-300' 
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              target='_blank'
              rel="noreferrer"
              >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-hray-300' href={Resume} download="resume.pdf">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;