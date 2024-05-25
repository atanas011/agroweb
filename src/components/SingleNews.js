import { Link } from 'react-router-dom'

const SingleNews = ({ num }) => {
    return (
        <div className='group relative'>
            <div className='overflow-hidden'>
                <div className={`w-full group-hover:scale-[1.1] transition-all duration-[1s]`}>
                    <img alt='news' layout='fill'
                        src={'https://res.cloudinary.com/dpv5tcps3/image/upload/v1715091273/dashboard/corn_yadxki.jpg'}
                    />
                </div>
            </div>
            <Link to='#' className='w-full h-full block absolute left-0 top-0 bg-white
                invisible group-hover:visible cursor-pointer opacity-5 transition-all duration-300'>
            </Link>
            <div className='text-white font-semibold absolute left-5 bottom-4
                flex flex-col justify-start items-start gap-y-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                <div className='px-1 py-1 rounded-sm text-3 bg-lime-600'>Subvencije</div>
                <h2 className='text-xl'>Naslov {num} o subvencijama</h2>
                <div className='text-sm flex gap-x-2'>
                    <span>26. mart 2024. / </span>
                    <span>Ana Jović</span>
                </div>
            </div>
        </div>
    )
}

export default SingleNews
