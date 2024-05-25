import LoadingSpinner from 'react-spinners-components'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

const HeadLines = () => {

    const headlines = [
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ]

    return (
        <div className='shadow flex flex-wrap'>
            <div className='w-full md:w-[170px] flex relative bg-[#dddddd] after:bg-[#dddddd] after:w-5
                after:absolute after:top-0 after:bottom-0 after:left-40 after:z-10 after:skew-x-[20deg]'>
                <div className='w-full pl-4 py-2 md:pl-8 flex justify-start items-center gap-x-1'>
                    <span><LoadingSpinner type='Ripple' size={'30px'} colors={['800000', '#c80000']} /></span>
                    <h2 className='text-lg font-semibold text-[333333]'>Aktuelno</h2>
                </div>
            </div>
            <div className='w-full flex md:w-[calc(100%-170px)]'>
                <div className='w-full flex justify-start items-center'>
                    <Marquee>
                        {headlines.map(h =>
                            <Link to='#' key={h.title} className='block text-sm font-semibold hover:text-[#c80000] pr-9'>
                                {h.title}
                            </Link>
                        )}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default HeadLines
