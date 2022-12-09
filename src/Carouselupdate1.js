import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './style1.css';
import { useState } from 'react';
import About from './about';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'



export default function Carousel() {
    const [sliderRef, setSliderRef] = useState(null)

    const sliderSettings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
      
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
      }

      const sliderSettingsBanner = {
          arrows: true,
          infinite: false,  
          speed: 500,  
          slidesToShow: 1,  
          slidesToScroll: 1,
          autoplay: true, 

          
      };
  const hotelCards = [
    {
      imageSrc:
        '../watch1.jpg',
      title: 'Rolex',
      description: 'An elegant timepiece',
      pricingText: 'INR 10,200',
 
    },
    {
      imageSrc:
        '../watch2.jpg',
      title: 'Seiko',
      description: 'Features a face that flips over to protect itself within the watch casing',
      pricingText: 'INR 8,500',

    },
    {
      imageSrc:
        '../watch3.jpg',
      title: 'Patek Philippe',
      description: 'Watches used for military exploration',
      pricingText: 'INR 9000',
    
    },
    {
      imageSrc:
        '../watch4.jpg',
      title: 'Cartier',
      description: 'Offering the thinnest automatic watch in the world',
      pricingText: 'INR 12,200',

    },
    {
        imageSrc:
          '../watch5.jpg',
        title: 'Montblanc',
        description: 'An elegant timepiece',
        pricingText: 'INR 15000',

      },
      {
        imageSrc:
          '../watch6.jpg',
        title: 'Rolex',
        description: 'The first luxury watch to rock a rubber strap',
        pricingText: 'INR 35,000',

      },
      {
        imageSrc:
          '../watch7.jpg',
        title: 'Titan',
        description: 'Perfect for those who want the look and feel of a Rolex',
        pricingText: 'INR 5000',

      },
      {
        imageSrc:
          '../watch8.jpg',
        title: 'Fast Track',
        description: 'Timepieces guarantee the finest Italian craftsmanship',
        pricingText: 'INR 7,500',

      },
  ]

  const banner = [
    {
      id : 1,
      imageSrc:
        '../banner1.jpg',
      title: 'Rolex',
      description: 'An elegant timepiece',
      pricingText: 'INR 10,200',
      buttoninfo: "Read More",
 
    },
    {
      id : 2,
      imageSrc:
        '../banner2.jpg',
      title: 'Seiko',
      description: 'Features a face that flips over to protect itself within the watch casing',
      pricingText: 'INR 8,500',
      buttoninfo: "Read More",

    },
    {
      id : 3,
      imageSrc:
        '../banner3.jpg',
      title: 'Patek Philippe',
      description: 'Watches used for military exploration',
      pricingText: 'INR 9000',
      buttoninfo: "Read More",
    
    },
    {
      id : 4,
      imageSrc:
        '../banner4.jpg',
      title: 'Cartier',
      description: 'Offering the thinnest automatic watch in the world',
      pricingText: 'INR 12,200',
      buttoninfo: "Read More",

    },
    {
      id : 5,
        imageSrc:
          '../banner5.jpg',
        title: 'Montblanc',
        description: 'An elegant timepiece',
        pricingText: 'INR 15000',
        buttoninfo: "Read More",

      },
      {
      id : 6,

        imageSrc:
          '../banner6.jpg',
        title: 'Rolex',
        description: 'The first luxury watch to rock a rubber strap',
        pricingText: 'INR 35,000',
        buttoninfo: "Read More",

      },
      {
      id : 7,

        imageSrc:
          '../banner7.jpg',
        title: 'Titan',
        description: 'Perfect for those who want the look and feel of a Rolex',
        pricingText: 'INR 5000',
        buttoninfo: "Read More",

      },
      {
      id : 8,

        imageSrc:
          '../banner8.jpg',
        title: 'Fast Track',
        description: 'Timepieces guarantee the finest Italian craftsmanship',
        pricingText: 'INR 7,500',
        buttoninfo: "Read More",

      },
  ]

  return (
   <Router>
    <div className='content'>
        <h1 style={{textAlign:"center"}}>Card Slider Carousel</h1>
        <div className='main-banner'>
        <Slider {...sliderSettingsBanner}>
      {banner.map((banner, index) => (
        <div key={index} className='banner'>

            
          <img alt={banner.title} src={banner.imageSrc} className='banner-image' />
          <a href = "https://www.flipkart.com/">
          <button className='button-info'>{banner.buttoninfo}</button></a>
          <div className='banner-text'>
          <div className='banner-header'>
                <h2>{banner.title}</h2>
                
                <span>{banner.pricingText}</span>
              </div>

            <p>{banner.description}</p>
          </div>
          <Routes>
           <Route  path='/about' element={< About />}></Route>
         </Routes>
        </div>
      ))}
      
    </Slider>
   
    
    </div>
        
        <div className='controls'>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div>
        
    <Slider ref={setSliderRef} {...sliderSettings}>
      {hotelCards.map((card, index) => (
        <div key={index} className='card'>
          <img alt={card.title} src={card.imageSrc} className='card-image' />
          
          <div className='text-info'>
          <div className='card-header'>
                <h2>{card.title}</h2>
                <span>{card.pricingText}</span>
              </div>

            <p>{card.description}</p>
          </div>
          <button>Buy Now</button>
        </div>
      ))}
    </Slider>


  </div>
  </Router>

  )
}

