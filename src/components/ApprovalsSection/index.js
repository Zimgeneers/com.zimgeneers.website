import React from 'react'
import "./ApprovalsSection.css"
import { StaticImage } from "gatsby-plugin-image"

function ApprovalsSection() {
    return (
        <div className="approvals-container">
            <span class="anchor" id="Approvals"></span>
            <h1> Airline Approvals </h1>
            <p>The ZiSO PetTrakr G013A has been approved for use on the following airlines. If you would like to find out more please get in touch!</p>
                <StaticImage
                src="../../images/petrakr-white.png"
                alt="PetTrakr Logo"
                placeholder="blurred"
                layout="fixed"
                width={200}
                className="pettrakr-logo"
                />
            <section class="approval-container">
                <div class="airline-card">
                    <a href="https://www.airnewzealandcargo.com/cargo-data-loggers" target="_blank" rel="noreferrer">
                        <div class="airline-card-image">
                            <StaticImage
                            src="../../images/airnz-logo.png"
                            alt="Air New Zealand Logo"
                            placeholder="blurred"
                            layout="constrained"
                            className="airline-logo"
                            />
                        </div>
                        <h3>APPROVED</h3>
                    </a>
                </div>  
                <div class="airline-card">
                    <a href="https://www.skycargo.com/" target="_blank" rel="noreferrer">
                        <div class="airline-card-image">
                            <StaticImage
                            src="../../images/emirates-skycargo-logo.png"
                            alt="Emirates SkyCargo Logo"
                            placeholder="blurred"
                            layout="constrained"
                            className="airline-logo"
                            />
                        </div>
                        <h3>APPROVED</h3>
                    </a>
                </div>  
                <div class="airline-card">
                    <a href="https://www.etihadcargo.com/content/dam/eag/egcmc/etihadcargo/global/pdf/Etihad-List-of-Approved-EMD-Electronic-Monitoring-Devices-June-2023-v2.pdf" target="_blank" rel="noreferrer">
                        <div class="airline-card-image">
                            <StaticImage
                            src="../../images/etihad-cargo-logo.png"
                            alt="Etihad Cargo Logo"
                            placeholder="blurred"
                            layout="constrained"
                            className="airline-logo"
                            />
                        </div>
                        <h3>APPROVED</h3>
                    </a>
                </div>  
                <div class="airline-card">
                    <a href="https://mycargo01.qrcargo.com/s/qatar-airways-approved-devices" target="_blank" rel="noreferrer">
                        <div class="airline-card-image">
                            <StaticImage
                            src="../../images/qatar-cargo.png"
                            alt="Qatar Cargo Logo"
                            placeholder="blurred"
                            layout="constrained"
                            className="airline-logo"
                            />
                        </div>
                        <h3>APPROVED</h3>
                    </a>
                </div>  
            </section>
        </div>
    )
    }

export default ApprovalsSection