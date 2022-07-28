import styled from "styled-components"

export const Button = styled.button`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? "#FF4040" : "#101522")};
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
        background: ${({ primary }) => (primary ? "#101522" : "#FF4040")};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`
