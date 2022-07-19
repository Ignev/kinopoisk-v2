import React from 'react'
import Search from "../../buissnes/Search"
import { Link } from "react-router-dom";


import styles from "./style.module.css";
import HeaderProfil from '../../buissnes/HeaderProfil';

function Header() {
  return (
    <header className={styles.header}>
        <Link to="/" className={styles.headerLogo}>CinemaLike</Link>
        <Search></Search>
        <HeaderProfil/>
    </header>
  )
}

export default Header