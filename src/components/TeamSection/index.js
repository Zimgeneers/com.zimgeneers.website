import React from 'react'
import { TeamCard, TeamContainer, TeamWrapper } from './TeamElements'

function TeamSection() {
    return (
        <TeamContainer id="Team">
            <h1>Who we are</h1>
            <TeamWrapper>
                <TeamCard>
                    <h3>Angus Currie</h3>
                </TeamCard>
                <TeamCard>Jamie Munro</TeamCard>
            </TeamWrapper>
        </TeamContainer>
    )
}

export default TeamSection