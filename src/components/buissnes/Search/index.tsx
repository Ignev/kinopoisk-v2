import React from "react";
import styles from "./style.module.css";

function Search() {
  const [searchStatus, setSearchStatus] = React.useState(false);
  const inputRef: any = React.useRef();

  const onClickSearchIcon = () => {
    setSearchStatus(true);
  };

  const onClickClose = () => {
    setSearchStatus(false);
    inputRef.current.value = "";
  };

  let btnStyle = !searchStatus ? styles.searchBtn : styles.searchBtnHidden
  let searchStyle = searchStatus ? styles.searchBlock : styles.searchBlockHidden

  return (
    <div className={styles.search}>
      <button className={ btnStyle }  onClick={() => onClickSearchIcon()}></button>
      <div className={searchStyle}>
        <input ref={inputRef} type="text" className={styles.searchInput} />
        <button  className={styles.searchClose} onClick={() => onClickClose()}></button>
      </div>
    </div>
  );
}

export default Search;
