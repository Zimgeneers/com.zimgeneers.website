import { Link } from "gatsby"
import { GiCog } from "react-icons/gi";
import styled from "styled-components"

export const TeamContainer = styled.div`
    background-color: #e6e6e6;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const TeamWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 20px auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
    `

export const TeamCard = styled.div`
    display: flex;
    height: 500px;
    width: 400px;
    background-color: #fff;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */
`