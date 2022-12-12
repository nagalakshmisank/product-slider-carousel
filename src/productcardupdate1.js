import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container, Card, Row, Button} from 'react-bootstrap'; 
//import Paginate from './paginate';
import Pagination from "react-custom-pagination";




const hotelCards = [
    {
      imageSrc:
        '../watch13.jpg',
      title: 'Rolex',
      description: 'An elegant timepiece looks good and smart to wear',
      pricingText: 'INR 10,200',
 
    },
    {
        imageSrc:
          '../watch10.jpg',
        title: 'Seiko',
        description: 'Features a face that flips over to protect itself within the watch casing',
        pricingText: 'INR 8,500',
  
      },
      {
        imageSrc:
          '../watch3.jpg',
        title: 'Patek Philippe',
        description: 'Watches used for military exploration and looks smart on hand',
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
        description: 'An elegant timepiece looks good and smart to wear',
        pricingText: 'INR 15000',

      },
      {
        imageSrc:
          '../watch11.jpg',
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
          '../watch12.jpg',
        title: 'Fast Track',
        description: 'Timepieces guarantee the finest Italian craftsmanship',
        pricingText: 'INR 7,500',

      },
      {
        imageSrc:
          '../watch4.jpg',
        title: 'Cartier',
        description: 'Offering the thinnest automatic watch in the world',
        pricingText: 'INR 12,200',
  
      },
]

function GridExampleDemo(){

    const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(3);

   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = hotelCards.slice(indexOfFirstPost, indexOfLastPost);

   const paginate = (number) => {
    setCurrentPage(number);
 };



    return(
        <div className="App"> 
    <h1 style={{textAlign:"center"}}>Product Grid</h1> 
    <Container>  

      <Row>  
      
  {currentPosts.map((prod, idx) => (  
   <Card  
   key={idx}  
    style={{width:"25%", height:"auto"}}  
     className="m-2"  
   >  
     <Card.Img src={prod.imageSrc} style={{textAlign:"center"}} />   
     <Card.Body> 
        <div style={{marginTop:"10px"}}> 
       <Card.Title>{prod.title} </Card.Title>  
       <Card.Text>  
        {prod.description}
       </Card.Text> 
       </div> 
       <div>
       <Button style={{marginTop:"10px"}}>Read More</Button>
       </div>
     </Card.Body>  
   </Card>  
 ))}  
 </Row>  
 </Container><br />
 <div style={{ width: "50%", margin: "auto" }}>
 <Pagination
        totalPosts={hotelCards.length}
        postsPerPage={postsPerPage}
        paginate={paginate}
        view={5}
        showLast={true}
        showFirst={true}
        showIndex={true}
               />
               </div>
 </div>
    );

}
export default GridExampleDemo;