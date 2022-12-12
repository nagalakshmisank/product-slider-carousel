import React from 'react';
import ReactDOM from 'react-dom/client';

//import './index.css';
//import images from "./images";
//import ImageSlider from "./ImageSlider";
//import MultipleItems from './ReactSlick';
import Carousel from './Carouselupdate1';
import reportWebVitals from './reportWebVitals';
//import GridExampleDemo from './productcardupdate1';





//import GridExampleDemo from './productcardupdate2';
//import Productcard from './prodcard-bootstarp';
//import GridExampleDemo from './productcardupdate2';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <>
      <Carousel />
      
      </>


    {/*<Productcard />*/}
    {/*<ImageSlider images={images}/>*/}
    {/*<MultipleItems />*/}
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
