import React, { useState,useEffect} from 'react'
import Nav from '../UI/navbar'
import Moviebox from "./movieBox"
import "./styles.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";


export default function Home(props){
   const[data,setData] =useState([]);
const nowRunning =async()=>{
   const response =await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`)
      if (!response.ok) {
         throw new Error("Network response was not ok");
       }
       const temp = await response.json();
       console.log(temp.results)
       setData(temp.results);
}
useEffect(()=>{
   nowRunning()
   // console.log(data)
},[])

return(<>
<Nav></Nav>

<h2 className='mt-4'>Now Running Movies</h2>
<Swiper 
        slidesPerView={5}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

{data.map(movie=><SwiperSlide id={movie.id}><Moviebox title ={movie.title} img={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} id={movie.id}></Moviebox></SwiperSlide>)}
{/* {data.map(movie=><Moviebox className="d-flex flex-row" title={movie.title} img={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} id={movie.id}></Moviebox>)} */}
</Swiper>

</>
   
)

    
}