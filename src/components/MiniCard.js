import { Link } from 'react-router-dom'

const MiniCard = ({num}) => {
    return (
        <div className='bg-white shadow flex gap-x-2 p-3'>
            <div className='h-full relative group overflow-hidden'>
                <div className='w-[160px] lg:w-[100px] transition-all duration-[1s] group-hover:scale-[1.1] relative'>
                    <img
                        layout='fill'
                        alt='minicard'
                        src={'https://res.cloudinary.com/dpv5tcps3/image/upload/v1715091273/dashboard/corn_yadxki.jpg'}
                    />
                </div>
                <div className='w-full h-full block absolute left-0 top-0 invisible group-hover:visible
                    bg-white cursor-pointer opacity-5 transition-all duration-300'>
                </div>
            </div>
            <div className='flex flex-col'>
                <Link className='text-4 font-semibold text-lime-600' to='#'>Produktna berza</Link>
                <Link className='text-4 font-semibold text-[#333333] hover:text-lime-600' to='#'>Naslov {num}</Link>
                <div className='text-xs flex gap-x-2 text-slate-600'>
                    <span>26. mart 2024. / </span>
                    <span>Ana Jović</span>
                </div>
            </div>
        </div>
    )
}

export default MiniCard
