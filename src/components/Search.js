import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
    return (
        <div className='p-4 bg-white'>
            <div className='flex'>
                <div className='w-[calc(100%-45px)] h-11'>
                    <input
                        type='text'
                        className='w-full h-full p-2 border border-slate-300 outline-none bg-slate-100'
                    />
                </div>
                <div className='w-11 h-11 flex justify-center items-center bg-lime-600 hover:bg-lime-700 text-white text-xl'>
                    <AiOutlineSearch />
                </div>
            </div>
        </div>
    )
}

export default Search
