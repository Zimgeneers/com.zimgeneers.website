import React,{useState, useEffect} from 'react'
import { FaBars,FaTimes} from "react-icons/fa"
import { IconContext} from "react-icons/lib"
import { StaticImage } from "gatsby-plugin-image"
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from "./NavbarElements"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)

    const changeNav = () =>{
        if (window.scrollY >= 80) {
            setScroll(true)
            } else {
            setScroll(false)
            }
    }

    useEffect(()=> {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

    return (
        <>
            <IconContext.Provider value={{ color: "#141414"}}>
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            {/* <NavIcon /> */}
                            <StaticImage
                                src="../../images/ziso-logo.png"
                                alt="Ziso Logo"
                                placeholder="blurred"
                                layout="fixed"
                                height={70}
                                />
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/#Team">Who we are</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/#PetTrakr">PetTrakr</NavLinks>
                            </NavItem>
                            <NavItem>
                            <NavLinks to="/#Approvals">Airlines</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/#contact">Contact Us</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar





