import PopularNews from '../../components/PopularNews'
import Breadcrumb from '../../components/Breadcrumb'
import NewsCard from '../../components/NewsCard'
import MiniCard from '../../components/MiniCard'
import Category from '../../components/Category'
import Search from '../../components/Search'
import Title from '../../components/Title'

const Page = ({ path }) => {
    return (
        <>
            <div className='shadow-sm py-4'>
                <div className='w-full px-4 md:px-8'>
                    <Breadcrumb cat='Vesti' path={path} />
                </div>
            </div>

            <div className='w-full bg-slate-200'>
                <div className='w-full px-4 md:px-8 py-8'>
                    <div className='flex flex-wrap'>
                        <div className='w-full xl:w-2/3'>
                            <div className='w-full pr-0 xl:pr-4'>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                                    {[1, 2, 3, 4, 5, 6].map(i =>
                                        <NewsCard key={i} num={i} cat='Ostalo' type='with-lead' />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='w-full xl:w-1/3'>
                            <div className='w-full pl-0 xl:pl-4'>
                                <div className='flex flex-col gap-y-8'>
                                    <Search />
                                    <div className='w-full flex flex-col gap-y-3 pt-4 bg-white'>
                                        <div className='pl-4'>
                                            <Title title='Najnovije vesti' />
                                        </div>
                                        <div className='grid grid-cols-1 gap-y-3'>
                                            {[1, 2, 3, 4, 5, 6].map(i =>
                                                <MiniCard key={i} />
                                            )}
                                        </div>
                                    </div>
                                    <div className='p-4 bg-white'>
                                        <Category titleStyle={'text-gray-700 font-bold'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-8'>
                        <PopularNews cat='Popular News' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
