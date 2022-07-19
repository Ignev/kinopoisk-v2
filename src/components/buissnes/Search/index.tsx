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

  let btnStyle = !searchStatus ? styles.searchBtn : styles.searchBtnHidden
  let searchStyle = searchStatus ? styles.searchBlock : styles.searchBlockHidden

  return (
    <div className={styles.search}>
      <button className={ btnStyle }  onClick={() => onClickSearchIcon()}></button>
      <div className={searchStyle}>
        <input type="text" className={styles.searchInput} />
        <button className={styles.searchClose} onClick={() => onClickClose()}></button>
      </div>
    </div>
  );
}

export default Search;
