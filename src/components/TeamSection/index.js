import React from 'react'
import "./TeamSection.css"

function TeamSection() {
    return (
    <div>
       <span class="anchor" id="Team"></span>
       <section class="container">
       <div class="card">
            <a href="/">
                <div class="card-image gus"></div>
                <h2>Angus Currie</h2>
                <p>A veterinarian based in Perth, Australia with over ten years of dedicated experience in the pet travel industry.</p>
                <h3>LinkedIn</h3>
            </a>
        </div>
        <div class="card">
            <a href="/">
                <div class="card-image jamie"></div>
                <h2>Jamie Munro</h2>
                <p>An IT consultant based in London, United Kingdom with over 25 years of broad industry experience including software development and IoT.</p>
                <h3>LinkedIn</h3>
            </a>
        </div>
        <div class="card">
            <a href="/">
                <div class="card-image zim"></div>
                <h2>Zimgeneers</h2>
                <p>Established in 2021, Zimgeneers is a company that is focused on keepings pets (and their owners) happy on their travels. Gus and Jamie have known each other since they went to school together. </p>
                <h3>LinkedIn</h3>
            </a>
        </div>
       </section>
    </div>
    )
    }

export default TeamSection