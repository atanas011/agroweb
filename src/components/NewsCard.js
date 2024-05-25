import { Link } from 'react-router-dom'

const NewsCard = ({ num, cat, type }) => {
    return (
        <div className='bg-white shadow'>
            <div className='group relative overflow-hidden'>
                <div className={`w-full h-62 group-hover:scale-[1.1] transition-all duration-[1s]`}>
                    <img alt='details' layout='fill' src={'https://res.cloudinary.com/dpv5tcps3/image/upload/v1715091273/dashboard/corn_yadxki.jpg'} />
                </div>
                <Link className='w-full h-full block absolute left-0 top-0 invisible group-hover:visible
                bg-white cursor-pointer opacity-5 transition-all duration-300' to='#'></Link>
                <div className='absolute left-5 bottom-4 flex justify-start items-start gap-2 text-white font-semibold'>
                    <div className='px-2 py-1 rounded-sm text-3 bg-lime-600'>{cat}</div>
                </div>
            </div>
            <div className='p-5'>
                <Link className='text-4 font-semibold text-[#333333] hover:text-lime-600' to='#'>Naslov {num}</Link>
                <div className='text-xs flex gap-x-2 text-slate-600'>
                    <span>26. mart 2024. / </span>
                    <span>Ana Jović</span>
                </div>
                {type === 'with-lead' &&
                    <p className='text-sm text-slate-600 pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                }
            </div>
        </div>
    )
}

export default NewsCard
