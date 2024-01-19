import React, { useEffect, useRef, useState } from 'react'
import GlobalAPI from '../services/GlobalAPI';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;

const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    useEffect(()=> {
        getTrendingMovies();
    }, [])

    const getTrendingMovies = () => {
        GlobalAPI.getTrendingVideos.then(resp=>{
            setMovieList(resp.data.results)
            // console.log(resp.data.results)
        })
    }
    const slideRight = (element) => {
      element.scrollLeft+=screenWidth - 110
    }
    const slideLeft = (element) => {
      element.scrollLeft-=screenWidth - 110
    }
  return (
    <div>
      <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[155px] cursor-pointer' onClick={()=>slideRight(elementRef.current)}/>
      <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[155px] cursor-pointer right-0' onClick={()=>slideLeft(elementRef.current)}/>
      <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
        {
          movieList.map((item, index) => (
            <img src={IMAGE_BASE_URL+item.backdrop_path} alt="" 
            className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[3px] border-gray-400 transition-all duration-200 ease-in'
            />
          ))
        }
      </div>
    </div>
  )
}

export default Slider