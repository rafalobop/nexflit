import React, {useRef} from 'react'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Carousel = ({movies}) => {
    let slideRef = useRef(null)

    const slideLeft = () => {
        slideRef.current.scrollLeft -= 500
    }

    const slideRight = () => {
        console.log('aaad', slideRef)
        slideRef.current.scrollLeft += 500
    }

    return (
        <>
            <MdChevronLeft onClick={slideLeft} size={40} className="bg-white absolute left-5 bottom-15 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" />
            <div id='slider' ref={slideRef} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                <div className="duration-200 ease-linear">
                    {movies.map((item, id) => (
                        <Movie item={item} key={id} data-carousel-item/>
                    ))}
                </div>
            </div>
            <MdChevronRight onClick={slideRight} size={40} className="bg-white absolute right-5 bottom-15 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" />
        </>
    )
}

export default Carousel