import React from 'react'
import { Button } from '../ButtonElements'
import "./HeroSection.css"

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Keeping an eye on your pet</h1>
            <p>A picture is worth a thousand words</p>
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