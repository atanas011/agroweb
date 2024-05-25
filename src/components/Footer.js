import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'
import Category from './Category'

const Footer = () => {
    return (
        <div className='w-full'>

            <div className='bg-[#1e1919]'>
                <div className='w-full px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-4 gap-12'>
                    <div className='w-full'>
                        <div className='w-full flex flex-col gap-y-3'>
                            <img width={200} height={100} src={logo} alt='logo' />
                            <h2 className='text-slate-300'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </h2>
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-y-3'>
                        <div className='pl-3 text-xl text-white font-bold relative
                            before:absolute before:w-1 before:bg-lime-600 before:h-full before:left-0'>Galerija
                        </div>
                        <div className='grid grid-cols-3 gap-2'>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i =>
                                <div className='w-full relative' key={i}>
                                    <img
                                        alt='images'
                                        layout='fill'
                                        src={'https://res.cloudinary.com/dpv5tcps3/image/upload/v1715091273/dashboard/corn_yadxki.jpg'}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div><Category titleStyle='text-white' categories={[]} /></div>

                    <div className='w-full flex flex-col gap-y-3'>
                        <div className='pl-3 text-xl text-white font-bold relative
                            before:absolute before:w-1 before:bg-lime-600 before:h-full before:left-0'>Najnovije vesti
                        </div>
                        <div className='pt-3 grid grid-cols-1 gap-y-4'>
                            {[1, 2, 3, 4].map(i =>
                                <Link key={i} className='flex gap-x-2' to='#'>
                                    <div className='w-[80px] group relative overflow-hidden'>
                                        <div className='w-[80px] block group-hover:scale-[1.1] transition-all duration-[1s]'>
                                            <img
                                                alt='images'
                                                layout='fill'
                                                src={'https://res.cloudinary.com/dpv5tcps3/image/upload/v1715091273/dashboard/corn_yadxki.jpg'}
                                            />
                                            <div className='w-full h-full block absolute left-0 top-0 invisible group-hover:visible
                                                bg-white cursor-pointer opacity-5 transition-all duration-300'>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <h2 className='text-4 font-semibold text-white hover:text-lime-600'>Naslov {i}</h2>
                                        <div className='text-xs gap-x-2 text-white'>
                                            <span>26. mart 2024. / </span>
                                            <span>Ana Jović</span>
                                        </div>
                                    </div>
                                </Link>)
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#262323]'>
                <div className='px-4 md:px-8 py-5 flex flex-col md:flex-row gap-3 justify-between items-center'>
                    <div className='flex gap-y-2 justify-start items-center text-gray-400'>
                        <span>Copyright &copy; 2024 <Link to='#'>Agroweb</Link></span>
                    </div>

                    <div className='flex gap-x-px text-white'>
                        <a className='w-9 h-9 flex justify-center items-center bg-[#ffffff2b]' href='/#'><FaFacebookF /></a>
                        <a className='w-9 h-9 flex justify-center items-center bg-[#ffffff2b]' href='/#'><AiFillInstagram /></a>
                        <a className='w-9 h-9 flex justify-center items-center bg-[#ffffff2b]' href='/#'><AiFillYoutube /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
