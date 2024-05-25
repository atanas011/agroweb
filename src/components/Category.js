import { Link } from 'react-router-dom'

const Category = ({ titleStyle, categories }) => {
    return (
        <div className='w-full flex flex-col gap-y-3'>
            <div className={`pl-3 text-xl ${titleStyle} relative
                before:absolute before:w-1 before:bg-lime-600 before:h-full before:left-0`}>Kategorije
            </div>
            <div className={`pt-3 flex flex-col justify-start items-start text-sm gap-y-3 ${titleStyle}`}>
                {[1, 2, 3, 4, 5, 6].map((category, i) =>
                    <li className='list-none' key={i}><Link to='#'>Ostalo ({i + 1})</Link></li>
                )}
            </div>
        </div>
    )
}

export default Category
