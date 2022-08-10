import styled from "styled-components"

export const Button = styled.button`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? "#b87a36" : "#101522")};
    white-space: no-wrap;
    padding: ${({ big}) => ( big ? "16px 64px" : "10px 20px")};
    color: #fff;
    font-size: ${({ fontBig}) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;
    font-family: 'Allerta Stencil', sans-serif;

    &:hover {
        transition: all 0.5s ease-out;
        background: ${({ primary }) => (primary ? "#101522" : "#b87a36")};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`
