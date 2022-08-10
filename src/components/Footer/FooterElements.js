import styled from "styled-components"
import {Link} from "gatsby"
import { GiCog } from "react-icons/gi";


export const FooterContainer = styled.div`
    background-color: #101522;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: sticky;
    bottom: 0;
    z-index: 999;
    border-top: 2px solid #fff;
`
export const SocialMedia = styled.section`
    width: 100%
`
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    max-width: 1000px;
    margin: 10px auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`
export const SocialIcon = styled(GiCog)`
    `

export const WebsiteRights = styled.small`
    align-items: center;
    text-align: center;
    color: #fff;
    margin-bottom: 10px
    font-family: 'Allerta Stencil', sans-serif;
`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    margin-top:5px;
`
export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`