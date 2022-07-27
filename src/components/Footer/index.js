import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FooterContainer, SocialIcon, SocialIcons, SocialIconLink, SocialLogo, SocialMedia, SocialMediaWrap,WebsiteRights } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                            ZIMGENEERS
                    </SocialLogo>
                    <WebsiteRights>Zimgeneers © {new Date().getFullYear()}</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer