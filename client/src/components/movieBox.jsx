import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import "./styles.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
export default function moviebox(props){
  const {title,img,id} = props;
 

    return(
      <>

      
      <div className='emovies'>
      <img src={img} className="moivesplate" alt="" />
      <h3>{title}</h3>
    
      </div>
      </>
     
    )
}