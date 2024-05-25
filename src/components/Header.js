import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

import headerBg from '../assets/header-bg.jpeg'
import add from '../assets/add-sample.jpg'
import logo from '../assets/logo.png'
import Navbar from './Navbar.js'

const Header = () => {

    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }
    const dateStr = new Date().toLocaleDateString('sr-latn', options)
    const date = dateStr[0].toUpperCase() + dateStr.slice(1)

    return (
        <header>
            <div className='px-5 lg:px-8 flex justify-between items-center bg-[#333] text-[#ccc]'>
                <span className='text-sm font-medium'>{date}</span>

                <div className='flex gap-x-px'>
                    <a className='w-9 h-9 flex justify-center items-center bg-[#ffffff2b]' href='/#'><FaFacebookF /></a>
                    <a className='w-9 h-9 flex justify-center items-center bg-[#ffffff2b]' href='/#'><AiFillInstagram /></a>
                    <a className='w-9 h-9 flex justify-center items-center bg-[#ffffff2b]' href='/#'><AiFillYoutube /></a>
                </div>
            </div>

            <div style={{ backgroundImage: `url(${headerBg})`, backgroundSize: 'cover' }}>
                <div className='px-8 py-14'>
                    <div className='flex justify-center items-center flex-wrap'>
                        <div className='w-full md:w-1/3'>
                            <div className='flex flex-col justify-center items-center md:items-start'>
                                <img className='w-2/3' src={logo} alt='logo' />
                            </div>
                        </div>
                        <div className='w-full hidden md:w-2/3 md:block '>
                            <div className='w-full flex justify-end'>
                                <img src={add} alt='add' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar />

        </header>
    )
}

export default Header
