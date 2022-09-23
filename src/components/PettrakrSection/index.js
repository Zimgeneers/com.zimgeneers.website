import React from 'react'
import { Button } from '../ButtonElements'
import "./PetTrakrSection.css"
import { StaticImage } from "gatsby-plugin-image"

function PettrakrSection() {
    return (
        <div className="pettrakr-container" id="PetTrakr">
            <h1>Coming Soon</h1>
            <StaticImage
            src="../../images/petrakr-white.png"
            alt="Ziso PetTrakr Logo"
            placeholder="blurred"
            layout="fixed"
            height={280}
            />
            <p>The Ziso PetTrakr</p>
            <div className="pettrakr-btns">
                <a href='/#contact'>
                    <Button fontBig big primary>
                        Get in Touch
                    </Button>
                </a>
            </div>
        </div>
    )
    }

export default PettrakrSection