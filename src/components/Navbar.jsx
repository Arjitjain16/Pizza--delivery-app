import React from 'react';

function Navbar() {
  return (
    <>
    <nav className='w-full h-1/6 flex items-center justify-between py-7 px-9 sticky top-0 text-slate-100 bg-red-600'>
        <div className="contanct flex flex-row gap-4">
            <img src="/img/icons8-call-24.png" className='h-10 w-10' alt="" />
            <div className="cont text-[3vh]">
            <h1>Order Now</h1>
            <h1>99399399</h1>
            </div>
        </div>
        <div className="mid flex items-center gap-8 justify-center text-[3vh] ">
           <h4>Homepage</h4>
           <h4>Products</h4>
           <h4>Menu</h4>
           <div className="owner flex items-center flex-row ">
            <img src="/img/pizza-bike-img.png" alt="" className='h-[10vh]' />
            <h1 className='text-5xl font-mono'>Brew Pizza</h1>
           </div>
           <h4>Event</h4>
           <h4>Blog</h4>
           <h4>Conctact</h4>
        </div>
        <div className="inventory flex items-center justify-center">
            <img className='h-9' src="/img/icons8-shopping-cart-24.png" alt=""/>
            <h4 className='absolute top-4 right-7 text-1xl text-red-800 bg-white rounded-full  px-3 py-1 '>2</h4>
        </div>

    </nav>
    </>
  );
}

export default Navbar;
