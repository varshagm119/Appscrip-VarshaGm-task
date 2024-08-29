import React from 'react';
import styles from './GreyStrip.module.css';
import Image from 'next/image';
import logo from '../../../public/element-4.png';

const GreyStrip = () => {
  return (
    <div className={styles.greyStrip}>
        <Content />
        <Content />
        <Content />
    </div>
  )
}

function Content() {
    return(
        <div className={styles.contentContainer}>
            <Image 
                src={logo}
                alt='Logo Image'
                height='16'
                width='16'
                quality={100}
            />
            <p className={styles.content}>Lorem ipsum dolor</p>
        </div>
    );
}

export default GreyStrip;