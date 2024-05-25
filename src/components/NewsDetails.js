import Title from './Title'
import NewsCard from './NewsCard'

const NewsDetails = () => {
    return (
        <div className='w-full flex flex-col gap-3 pr-2 py-8'>
            <Title title='Ostalo' />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-3 lg:gap-x-3'>
                <NewsCard cat='Ostalo' type='with-lead' />
                <NewsCard cat='Ostalo' type='with-lead' />
            </div>
        </div>
    )
}

export default NewsDetails
