import React from "react";
import styles from "./style.module.css";

function Search() {
  const [searchStatus, setSearchStatus] = React.useState(false);

  const onClickSearchIcon = () => {
    setSearchStatus(true);
  };

  const onClickClose = () => {
    setSearchStatus(false);
  };

  return (
    <div className={styles.search}>
      <button className={!searchStatus ? styles.searchBtn : styles.searchBtnHidden }  onClick={() => onClickSearchIcon()}></button>
      <div className={searchStatus ? styles.searchBlock : styles.searchBlockHidden}>
        <input type="text" className={styles.searchInput} />
        <button className={styles.searchClose} onClick={() => onClickClose()}></button>
      </div>
    </div>
  );
}

export default Search;
