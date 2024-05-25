import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'
import { BsList } from 'react-icons/bs'

const Navbar = () => {

    const { pathname } = useLocation()

    const [showSearch, setShowSearch] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const paths = [
        '',
        'Vesti',
        'Najnovije',
        'Subvencije',
        'Produktna berza',
        'Manifestacije',
        'Organska proizvodnja',
        'Ostalo'
    ]

    return (
        <nav className='w-full'>
            <div className='w-full bg-lime-600 text-white uppercase font-semibold relative'>
                <div className='h-12 flex justify-between items-center relative'>
                    <div className={`w-12 h-full text-3xl font-bold flex justify-center items-center lg:hidden cursor-pointer
                    ${showMenu ? 'bg-[#00000026]' : ''} hover:bg-[#00000026]`} onClick={() => setShowMenu(!showMenu)} title='Meni'>
                        <BsList />
                    </div>
                    <div className='hidden flex-wrap lg:flex'>
                        {paths.map(path =>
                            <Link to={`${path.replace(/\s+/g, '-').toLowerCase()}`} key={path} className={`px-6 py-4 text-xs hover:bg-[#00000026]
                                ${pathname === `/${path}` ? 'bg-[#00000026]' : ''}`}>
                                {path === '' ? 'Početna' : path}
                            </Link>
                        )}
                    </div>

                    <div className='w-12 h-full'>
                        <div
                            className={`text-xl font-bold w-full h-full flex justify-center items-center
                        cursor-pointer hover:bg-[#00000026] ${showSearch ? 'bg-[#00000026]' : ''}`}
                            onClick={() => setShowSearch(!showSearch)} title='Pretraga'>
                            {showSearch ? <IoClose /> : <AiOutlineSearch />}
                        </div>

                        <div className={`absolute w-full transition-all text-slate-700 z-20 shadow-lg
                         lg:left-60 lg:right-60 lg:w-auto left-0 ${showSearch ? 'visible' : 'invisible'}`}>
                            <div className='p-2 bg-white'>
                                <div className='flex'>
                                    <div className='w-[calc(100%-45px)] h-10'>
                                        <input type='text' placeholder='Traži'
                                            className='w-full h-full p-2 border border-slate-300 outline-none bg-slate-100'
                                        />
                                    </div>
                                    <div className='w-11 h-10 flex justify-center items-center text-xl text-white
                                    cursor-pointer bg-lime-600 hover:bg-lime-700'>
                                        <AiOutlineSearch />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showMenu &&
                <div className='px-7 py-1 flex flex-wrap lg:hidden'>
                    {paths.map(path =>
                        <Link to={`${path.replace(/\s+/g, '-').toLowerCase()}`} key={path} className={`px-4 py-2 font-medium hover:bg-[#00000026]
                            ${pathname === `/${path}` ? 'bg-[#00000026]' : ''}`}>
                            {path === '' ? 'Početna' : path}
                        </Link>
                    )}
                </div>
            }
        </nav>
    )
}

export default Navbar
