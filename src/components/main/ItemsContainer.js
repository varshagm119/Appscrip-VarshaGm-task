import React from 'react';
import styles from './ItemsContainer.module.css';
import Image from 'next/image';

const ItemsContainer = ({data}) => {
  return (
    <div className={styles.itemsContainer}>
        {data.map((item) => (
            <Item key={item.id} item={item} />
        ))}
    </div>
  )
}

function Item({ item }) {
    let { image, title, description } = item;
    return (
      <div className={styles.itemBox}>
        <div>
          <Image
            src={image}
            alt={description}
            width={300}
            height={400}
            className={styles.image}
          />
        </div>
        <div className={styles.itemInfoCon}>
          <div className={styles.itemInfo}>
            <p className={styles.itemInfoTitle}>{title.slice(0, 23) + "..."}</p>
            <span className={styles.itemInfoDes}>
              Sign in or Create an account to see pricing
            </span>
          </div>
          <Image
            src="/heart.png"
            alt="Image of a heart icon"
            width={24}
            height={24}
            className={styles.heartImage}
          />
        </div>
      </div>
    );
  }

export default ItemsContainer