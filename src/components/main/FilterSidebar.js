import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import styles from './FilterSidebar.module.css';

const FilterSidebar = () => {
    const sidebarFilters = [
        "IDEAL FOR",
        "OCCASION",
        "WORK",
        "FABRIC",
        "SEGMENT",
        "SUITABLE FOR",
        "RAW MATERIALS",
        "PATTERN",
      ];
      return (
        <div className={styles.sidebar}>
          <div className={styles.customizableBtn}>
            <input type="checkbox" id="customizable" />
            <label htmlFor="customizable">CUSTOMIZABLE</label>
          </div>
          <div>
            {sidebarFilters.map((item) => (
              <FilterItem key={item} item={item} />
            ))}
          </div>
        </div>
      );
}

function FilterItem({ item }) {
    const [openOptions, setOpenOptions] = useState(false);
    function toggleOpen() {
      setOpenOptions((prev) => !prev);
    }
    return (
      <div className={styles.item}>
        <div className={styles.itemBar} onClick={toggleOpen}>
          <p>{item}</p>
          <Image
            src={openOptions ? "/arrow-up.png" : "/arrow-left.png"}
            alt="Image of down arrow icon"
            width={16}
            height={16}
          />
        </div>
        <p className={styles.all}>All</p>
        {openOptions && (
          <div className={styles.optionContainer}>
            <u className={styles.unSelect}>Unselect all</u>
            <div className={styles.options}>
              <div>
                <input type="checkbox" id="men" />
                <label htmlFor="men">Men</label>
              </div>
              <div>
                <input type="checkbox" id="women" />
                <label htmlFor="women">Women</label>
              </div>
              <div>
                <input type="checkbox" id="baby" />
                <label htmlFor="baby">Baby & Kids</label>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

export default FilterSidebar