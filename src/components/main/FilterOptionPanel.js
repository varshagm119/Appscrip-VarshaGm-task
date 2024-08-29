import React, { useState } from "react";
import Image from "next/image";
import styles from "./FilterOptionPanel.module.css";

const FilterOptionPanel = ({ data, showCategory, toggleCategory }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("RECOMMENDED");
  function changeCurrentFilter(e) {
    if (e.target.tagName === "P") {
      setCurrentFilters(e.target.textContent);
      setShowFilters(false);
    }
  }
  function toggleFilters() {
    setShowFilters((prev) => !prev);
  }

  return (
    <div className={styles.panel}>
      <div className={styles.filterPanel}>
        <p className={styles.filterItemsCount}>{data.length}ITEMS</p>
        <div className={styles.filter} onClick={toggleCategory}>
          <Image
            src={showCategory ? "/arrow-l.png" : "/arrow-right.png"}
            alt="Image of left arrow icon"
            width={16}
            height={16}
            className={styles.arrowImage}
          />
          <u className={styles.filterText}>
            {showCategory ? "HIDE FILTER" : "SHOW FILTER"}
          </u>
        </div>
      </div>
      <div className={styles.filter} onClick={toggleFilters}>
        <p className={styles.recommended}>{currentFilter}</p>

        <Image
          src={showFilters ? "/arrow-up.png" : "/arrow-left.png"}
          alt="Image of down arrow icon"
          width={16}
          height={16}
          className={styles.arrowImage}
        />
      </div>

      {showFilters && (
        <div className={styles.categoryContainer} onClick={changeCurrentFilter}>
          <p
            className={
              currentFilter === "RECOMMENDED" ? styles.active : styles.normal
            }
          >
            {currentFilter === "RECOMMENDED" && (
              <Image
                src="/active.png"
                alt="Image to check"
                width={26}
                height={26}
              />
            )}
            RECOMMENDED
          </p>
          <p
            className={
              currentFilter === "NEWEST FIRST" ? styles.active : styles.normal
            }
          >
            {currentFilter === "NEWEST FIRST" && (
              <Image
                src="/active.png"
                alt="Image to check"
                width={26}
                height={26}
              />
            )}
            NEWEST FIRST
          </p>
          <p
            className={
              currentFilter === "POPULAR" ? styles.active : styles.normal
            }
          >
            {currentFilter === "POPULAR" && (
              <Image
                src="/active.png"
                alt="Image to check"
                width={26}
                height={26}
              />
            )}
            POPULAR
          </p>
          <p
            className={
              currentFilter === "PRICE: HIGH TO LOW"
                ? styles.active
                : styles.normal
            }
          >
            {currentFilter === "PRICE: HIGH TO LOW" && (
              <Image
                src="/active.png"
                alt="Image to check"
                width={26}
                height={26}
              />
            )}
            PRICE: HIGH TO LOW
          </p>
          <p
            className={
              currentFilter === "PRICE: LOW TO HIGH"
                ? styles.active
                : styles.normal
            }
          >
            {currentFilter === "PRICE: LOW TO HIGH" && (
              <Image
                src="/active.png"
                alt="Image to check"
                width={26}
                height={26}
              />
            )}
            PRICE: LOW TO HIGH
          </p>
        </div>
      )}
    </div>
  );
};

export default FilterOptionPanel;
