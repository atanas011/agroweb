import NewsCard from './NewsCard'
import  MiniCard from './MiniCard'
import Title from './Title'

const NewsWithLead = ({ cat }) => {

    return (
        <div className='w-full flex flex-col gap-3 pr-2'>
            <Title title={cat} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <NewsCard cat={cat} type='with-lead' />
                <div className='grid grid-cols-1 gap-y-1'>
                    {[1, 2, 3, 4].map(i => <MiniCard key={i} num={i} />)}
                </div>
            </div>
        </div>
    )
}

export default NewsWithLead
