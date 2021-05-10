import React from 'react'
import { Button } from './button'
import './HeroSection.css'; 
import '../App.css';




function HeroSection() {

    
    
    return (
        <div className='hero-container'>
            <video src='/videos/maui.mp4' autoPlay loop muted/>
            <h1>Favorite spots in Hawaii</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button onClick={()=>document.querySelector('#cards').scrollIntoView({ behavior: 'smooth', block: 'start' })} className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button onClick={()=> window.open("https://youtu.be/bnda1-ezRgQ", "_blank")} className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER<i className='far fa-play-circle'/> </Button>
            </div>  

        </div>
    )
}

export default HeroSection;
