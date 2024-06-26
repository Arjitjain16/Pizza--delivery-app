import React, { useState } from 'react';
import styles from '../components/style/Featured.module.css'; // Importing featured.module.css for CSS modules

const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/img/pngwing.com (9).png",
        "/img/get one free-img.png",
        "/img/pngwing.com (8).png",
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
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")}>
                <img src="/img/left arrow.png" alt="" className='h-[40px] ml-4' />
            </div>
            <div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
                {images.map((img, i) => (
                    <div className={styles.imgContainer}  key={i}>
                        <img src="/img/get one free-img.png" alt="" className='object-cover h-[90%] mt-[3%] ml-[5%] '/>
                    </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("r")}>
                <img src="/img/right-arrow.png"  alt=""  className='h-[40px] mr-2' />
            </div>
        </div>
    );
};

export default Featured;
