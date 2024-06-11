import React from 'react'
import "./CrateInstructions.css"
import { StaticImage } from "gatsby-plugin-image"

function CrateSection() {
    return (
        <div className="crate-container">
                       <span class="anchor" id="Crates"></span>
                       <h1>PetTrakr Crate Instructions</h1>
            <div className="crate-card-container">
                 <div class="crate-card">
                    <StaticImage
                    src="../../images/polaroids.png"
                    alt="PetTrakr Logo"
                    placeholder="blurred"
                    layout="constrained"
                    width={650}
                    className="polaroids"
                    />
                    <h2>Fully charge the device</h2>
                    <p>Plug in the device the day before departure and keep it charging. Unplug no earlier than 30 minutes before placing the pet in the crate.</p>
            </div>
            <div class="crate-card">
                <StaticImage
                src="../../images/polaroids.png"
                alt="PetTrakr Logo"
                placeholder="blurred"
                layout="constrained"
                width={650}
                className="polaroids"
                />
                <h2>Prepare the crate for attachment</h2>
                <p>Plug in the device the day before departure and keep it charging. Unplug no earlier than 30 minutes before placing the pet in the crate.</p>
            </div>
            <div class="crate-card">
                <StaticImage
                src="../../images/polaroids.png"
                alt="PetTrakr Logo"
                placeholder="blurred"
                layout="constrained"
                width={650}
                className="polaroids"
                />
                <h2>Fully charge the device</h2>
                <p>Plug in the device the day before departure and keep it charging. Unplug no earlier than 30 minutes before placing the pet in the crate.</p>
            </div>
            <div class="crate-card">
                <StaticImage
                src="../../images/polaroids.png"
                alt="PetTrakr Logo"
                placeholder="blurred"
                layout="constrained"
                width={650}
                className="polaroids"
                />
                <h2>Fully charge the device</h2>
                <p>Plug in the device the day before departure and keep it charging. Unplug no earlier than 30 minutes before placing the pet in the crate.</p>
            </div>
        </div>
    </div>
    )
    }

export default CrateSection