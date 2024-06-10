import React from 'react'
import "./PetTrakrSection.css"
import { StaticImage } from "gatsby-plugin-image"

function PettrakrSection() {
    return (
        <div className="pettrakr-container">
            <span class="anchor" id="PetTrakr"></span>
            <h1>PetTrakr</h1>
            <p>Sometimes, a picture really is worth a thousand words.</p>
                <StaticImage
                src="../../images/polaroids.png"
                alt="PetTrakr Logo"
                placeholder="blurred"
                layout="constrained"
                width={650}
                className="polaroids"
                />
            <div class="pettrakr-blurb">
                <p>PetTrakr is a unique technology designed to allow pet owners to track their pet’s journey in real time. Pet travel by air has until now been a ‘behind closed doors’ experience for pet owners. PetTrakr provides assurance and allows pet owners to travel virtually along with their pet.</p>
                <p>Now available exclusively through Jetpets on routes between Australia, Auckland and Heathrow.</p>
                <a href='https://www.jetpets.com.au/contact-us/' target="_blank" rel="noreferrer">
                    <StaticImage
                    src="../../images/jetpets-logo-transparent.png"
                    alt="PetTrakr Logo"
                    placeholder="blurred"
                    layout="fixed"
                    width={150}
                    className="logo"
                    />
                </a>
            </div>
        </div>
    )
    }

export default PettrakrSection