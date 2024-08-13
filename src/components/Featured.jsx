import  { useState } from 'react';
import styles from '../components/style/Featured.module.css'; // Importing featured.module.css for CSS modules

const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    const handleArrow = (direction) => {
        if (direction === "l") {
            setIndex(index !== 0 ? index - 1 : 2);
        }
        if (direction === "r") {
            setIndex(index !== 2 ? index + 1 : 0);
        }
    };

    return (
        <div className='relative overflow-hidden' style={{ height: "calc(100vh - 100px)"}}>
            <div className="flex h-20 rounded-full w-20 items-center absolute top-60 ml-9 cursor-pointer z-10" style={{ left: 0 }} onClick={() => handleArrow("l")}>
                
                <i className="text-[5vmax]   ml-4 ri-arrow-left-wide-line"></i>
           </div>
                <div className={styles.wrapper}>
                    <div className='wrapper w-[300vw] h-full  flex items-center ' style={{ transform: `translateX(${-100 * index}vw)` }}>
                        {images.map((img, idx) =>(
                           <div key={idx} className='h-full w-[100vw]'>
                            <img key={idx} src={img} alt="Featured" className='object-cover h-full w-full ' />
                           </div>
                        ))}
                    </div>
                </div>
            <div className="flex h-20 rounded-full w-20 items-center absolute top-60 mr-10 cursor-pointer" style={{ right: 0 }} onClick={() => handleArrow("r")}>
            <i className=" text-[5vmax]  text-black ml-4 ri-arrow-right-wide-line"></i>
            </div>
        </div>
    );
};

export default Featured;
