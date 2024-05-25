import NewsCard from './NewsCard'
import MiniCard from './MiniCard'
import Title from './Title'

const NewsDetailsCol = () => {
    return (
        <div className='w-full flex flex-col gap-3 pl-2'>
            <Title title='Organska proizvodnja' />
            <div className='grid grid-cols-1 gap-y-6'>
                <NewsCard cat='Organska proizvodnja' type='with-lead' />
            </div>
            <div className='grid grid-cols-1 gap-y-3 mt-4'>
                {[1, 2, 3, 4].map(i => <MiniCard key={i} />)}
            </div>
        </div>
    )
}

export default NewsDetailsCol
