import HeadLines from '../components/HeadLines'
import LatestNews from '../components/LatestNews'
import Title from '../components/Title'
import SingleNews from '../components/SingleNews'
import PopularNews from '../components/PopularNews'
import NewsWithLead from '../components/NewsWithLead'
import NewsDetails from '../components/NewsDetails'
import NewsDetailsCol from '../components/NewsDetailsCol'
import MiniCard from '../components/MiniCard'

const Home = () => {

    return (
        <>
            <HeadLines />

            <main>
                <div className='bg-slate-100'>
                    <div className='px-4 py-8 md:px-8'>
                        <div className='flex flex-wrap'>
                            <div className='w-full lg:w-1/2'>
                                <LatestNews />
                            </div>
                            <div className='w-full lg:w-1/2 mt-5 lg:mt-0'>
                                <div className='w-full flex flex-col gap-y-3 pl-0 lg:pl-2'>
                                    <Title title='Subvencije' />
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                                        {[1, 2, 3, 4].map(i =>
                                            <SingleNews key={i} num={i} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <PopularNews cat='Manifestacije' />
                        <div className='w-full'>
                            <div className='flex flex-wrap'>
                                <div className='w-full lg:w-2/3'>
                                    <NewsWithLead cat='Produktna berza' />
                                    <NewsDetails />
                                </div>
                                <div className='w-full lg:w-1/3'>
                                    <NewsDetailsCol />
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='flex flex-wrap'>
                                <div className='w-full lg:w-1/3'>
                                    <div className='pr-2'>
                                        <NewsDetailsCol />
                                    </div>
                                </div>
                                <div className='w-full lg:w-2/3'>
                                    <div className='pl-2'>
                                        <NewsWithLead cat='Produktna berza' />
                                        <NewsDetails />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='flex flex-wrap'>
                                <div className='w-full lg:w-2/3'>
                                    <NewsWithLead cat='Produktna berza' />
                                </div>
                                <div className='w-full lg:w-1/3'>
                                    <div className='pl-2'>
                                        <Title title='Najnovije vesti' />
                                        <div className='grid grid-cols-1 gap-y-3 mt-4'>
                                            {[1, 2, 3, 4].map(i => <MiniCard key={i} />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
