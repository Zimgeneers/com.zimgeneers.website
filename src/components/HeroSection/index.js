import React from 'react'
import { Button } from '../ButtonElements'
import "./HeroSection.css"

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Make a Plan</h1>
            <p>An Antipodean Tech Start Up</p>
            <div className="hero-btns">
                <a href='/#contact'>
                    <Button fontBig big primary>
                        Get in Touch
                    </Button>
                </a>
            </div>
        </div>
    )
    }

export default HeroSection