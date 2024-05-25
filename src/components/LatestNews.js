import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import Title from '../components/Title'
import SingleNews from './SingleNews'

const LatestNews = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    const BtnGroup = ({ previous, next }) => {
        return (
            <div className='flex justify-between items-center'>
                <Title title='Najnovije vesti' />
                <div className='flex justify-center items-center gap-x-3'>
                    <button onClick={() => previous()} className='w-7 h-7 flex justify-center items-center bg-white border-slate-200'>
                        <span><FiChevronLeft /></span>
                    </button>
                    <button onClick={() => next()} className='w-7 h-7 flex justify-center items-center bg-white border-slate-200'>
                        <span><FiChevronRight /></span>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className='w-full h-full flex flex-col-reverse gap-3 pr-0 lg:pr-2'>
            <Carousel
                autoPlay={true}
                arrows={false}
                renderButtonGroupOutside={true}
                responsive={responsive}
                infinite={true}
                transitionDuration={500}
                customButtonGroup={<BtnGroup />}
            >
                {[1, 2, 3, 4, 5, 6].map(i =>
                    <SingleNews key={i} num={i} type='latest' />
                )}
            </Carousel>
        </div>
    )
}

export default LatestNews
