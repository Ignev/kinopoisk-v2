import React from 'react'
import Search from "../../buissnes/Search"
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { setSingPopup } from '../../../app/slice/singPopupSlice';
import "./style.css";

function Header() {
  const dispatch = useAppDispatch();
  return (
    <header className='header'>
        <Link to="/" className='headerLogo'>CinemaLike</Link>
        <Search></Search>
        <div className="profile" onClick={() => dispatch(setSingPopup(true))}>
            <img src="person.png" alt="" className="profileImage" />
        </div>
    </header>
  )
}

export default Header