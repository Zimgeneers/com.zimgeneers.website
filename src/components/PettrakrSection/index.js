import React from 'react'
import { Button } from '../ButtonElements'
import "./PetTrakrSection.css"

function PettrakrSection() {
    return (
        <div className="pettrakr-container" id="PetTrakr">
            <h1>Coming Soon</h1>
            <p>The Ziso PetTrakr</p>
            <div className="pettrakr-btns">
            <Button fontBig big primary>
                    Get in Touch
                </Button>
            </div>
        </div>
    )
    }

export default PettrakrSection