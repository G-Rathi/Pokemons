import React from 'react'
import '../styles/Navbar.css'


const Navbar = () => {


    return (
        <div className='nav_Container'>
            <div className='logoText'>POKEMON PEDIA</div>
            <div className='navItems'>
                <span>Blogs</span>
                <span>Movies</span>
                <span>Shows</span>
                <span>Series</span>
            </div>
        </div >
    )
}

export default Navbar