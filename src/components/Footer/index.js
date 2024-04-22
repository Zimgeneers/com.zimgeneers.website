import React from 'react'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { FooterContainer, SocialIcon, SocialIcons, SocialIconLink, SocialLogo, SocialMedia, SocialMediaWrap,WebsiteRights } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    {/* <SocialLogo to="/">
                        <SocialIcon />
                            ZIMGENEERS 
                    </SocialLogo> */}
                    <WebsiteRights>ACN: 653 169 923<br />Registered office:
Heaney Business Group, Unit 7 , 12 Belgravia Terrace , Rockingham WA 6168<br />zimgeneers t/a ziso.io © {new Date().getFullYear()}</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.linkedin.com/company/zimgeneers/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="mailto://hello@ziso.io" target="_blank" aria-label="Email">
                            <FaEnvelope />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer


