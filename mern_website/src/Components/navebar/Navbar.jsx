import React, {  useState } from 'react'
import './navbar.scss'
import Logo from '../images/NetflixLogo.svg'
import ProfileLogo from '../images/logo.png'
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import {Link} from "react-router-dom"
const Navbar = () => {


    
    // creating a black navbar on scrolling and transparent at top by using useEffect
    const [isScrolled,setIsScrolled]=useState(false)
    // pageYoffset property define that the page is getting scrolled or not. 
    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset === 0? false :true)
        return()=>(window.onscroll=null);
    };



    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className='container'>
                <div className='left'>
                    <img src={Logo} alt='Logo' />
                    <Link to="/" className='link'>
                    <span>Homepage</span>
                    </Link>
                    <Link to="/series" className='link'>
                    <span>Series</span>
                    </Link>
                    <Link to="/movies" className='link'>
                    <span>Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className='right'>
                    <Search className='icon' />
                    <span>KID</span>
                    <Notifications className='icon' />
                    <img src={ProfileLogo} alt='profile_Logo' />
                    <div className='profile'>
                        <ArrowDropDown className='icon' />
                        {/* creating option on arrowdropdown */}
                        <div className='options'>
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
