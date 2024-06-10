import React from 'react'
import { Button } from '../ButtonElements'
import "./HeroSection.css"
import { StaticImage } from "gatsby-plugin-image"

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Keeping an eye on your pet</h1>
            {/* <p>A picture is worth a thousand words</p> */}
            {/* <div className="hero-btns">
                <a href='/#contact'>
                    <Button fontBig big primary>
                        Get in Touch
                    </Button>
                </a>
            </div> */}
            <p> Now exclusively available through</p>
            <a href='https://www.jetpets.com.au/' target="_blank" rel="noreferrer">
                <StaticImage
                src="../../images/jetpets-logo.png"
                alt="jetpets Logo"
                placeholder="blurred"
                layout="fixed"
                width={350}
                className="hero-logo"
                />
            </a>
        </div>
    )
    }

export default HeroSection