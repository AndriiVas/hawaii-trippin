import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'
import {Button} from './button';

function Navbar() {
    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = ()=>setClick(!click);
    const closeMobileMenu = () =>setClick(false);

    const showButton = ()=>{
        if(window.innerWidth<=960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton()
    }, [])

    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        TRIPPIN <i className="fas fa-globe-americas"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/maui' className='nav-links' onClick={closeMobileMenu}>
                            Maui
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/kauai' className='nav-links' onClick={closeMobileMenu}>
                            Kauai
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/kona' className='nav-links' onClick={closeMobileMenu}>
                            Kona
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/oahu' className='nav-links' onClick={closeMobileMenu}>
                            Oahu
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "https://www.google.com/travel/flights" }} target="_blank" className='nav-links-mobile' onClick={closeMobileMenu}>
                            Book It!
                            </Link>
                        </li>
                    </ul>
                    {button &&<Button onClick={()=> window.open("https://www.google.com/travel/flights", "_blank")} buttonStyle='btn--outline'>Book It!</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
