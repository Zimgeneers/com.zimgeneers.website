import React from 'react'
import "./TeamSection.css"

function TeamSection() {
    return (
    <div>
       <span class="anchor" id="Team"></span>
       <section class="container">
       <div class="card">
            <a href="https://www.linkedin.com/in/angus-currie-022571241/" target="_blank" rel="noreferrer">
                <div class="card-image gus"></div>
                <h2>Angus Currie</h2>
                <p>A veterinarian based in Perth, Australia with over ten years of dedicated experience in the pet travel industry.</p>
                <h3>LinkedIn</h3>
            </a>
        </div>
        <div class="card">
            <a href="https://www.linkedin.com/in/jirosmunro/" target="_blank" rel="noreferrer">
                <div class="card-image jamie"></div>
                <h2>Jamie Munro</h2>
                <p>An IT consultant based in Stupava, Slovakia with over 25 years of broad industry experience including software development and IoT.</p>
                <h3>LinkedIn</h3>
            </a>
        </div>
        <div class="card">
            <a href="https://www.linkedin.com/company/zimgeneers/" target="_blank" rel="noreferrer">
                <div class="card-image zim"></div>
                <h2>Ziso</h2>
                <p>Established in 2021, Ziso is a company that is focused on keeping pets (and their owners) happy on their travels. Gus and Jamie have known each other since they went to school together. </p>
                <h3>LinkedIn</h3>
            </a>
        </div>
       </section>
    </div>
    )
    }

export default TeamSection