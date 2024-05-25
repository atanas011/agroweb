import Title from '../components/Title'
import NewsCard from './NewsCard'

const PopularNews = ({cat}) => {
    return (
        <div className='w-full pb-6 mt-5'>
            <div className='w-full flex flex-col gap-y-3'>
                <Title title='Popularne vesti' />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 sm:gap-3 lg:gap-x-3'>
                    {[1, 2, 3, 4].map(i =>
                        <NewsCard key={i} num={i} cat={cat} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default PopularNews
