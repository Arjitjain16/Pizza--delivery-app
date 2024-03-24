import React from 'react';
import '../components/style/Featured.css'; // Importing featured.css


function Featured() {
  return (
    <div className="container-img overflow-x-hidden " style={{ overflow: 'hidden' }}>
        <div className="img1 ">
        <img src="/img/left arrow.png" className='img-left h-9' alt="" />
            <div className="cont1 ">

                <div className="section1 flex items-center flex-col">
                    <h4 className='font-bold text-3xl'>Hot & Spicy</h4>
                    <h1 className='font-bold text-9xl'>PIZZA</h1>
                </div>
                <div className="section2 flex items-center flex-col">
                    <h1 className='font-bold text-3xl'>50% OFF</h1>

                    <h1 className='font-bold text-3xl'>ORDER NOW</h1>
                    <h3 className='font-bold text-2xl'>Brew Pizza</h3>
                </div>
            </div>
            <div className="cont2">
            <img src="/img/pngwing.com (9).png" alt="" />
            </div>  
            <img src="/img/right-arrow.png" className='img-right h-9' alt="" />
        </div>
        <div className="img2">
            <img src="/img/PngItem_33910.png" alt="" />
            
        </div>
        <div className="img3">
            <img src="/img/mixed-pizza-with-various-ingridients-removebg-preview.png" alt="" />
        
        </div>
        
    </div>
  );
}

export default Featured;


