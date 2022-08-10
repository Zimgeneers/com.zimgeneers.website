import React from 'react'
import { Button } from '../ButtonElements'
import "./PetTrakrSection.css"

function PettrakrSection() {
    return (
        <div className="pettrakr-container" id="PetTrakr">
            <h1>Coming Soon</h1>
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