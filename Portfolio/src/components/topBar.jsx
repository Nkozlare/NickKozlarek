import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledFlex } from '../styledComponents.jsx';

const StyledTopBar = styled(StyledFlex)`
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
    padding: 2rem;
    width: 90vw;
    @media (max-width: 800px) {
        flex-direction: column;
        width: 70vw;
    }
`

const StyledLinks = styled(StyledFlex)`
    gap: 1rem;
    align-items: center;
    justify-content: center;
    a {
        border: 2px solid transparent;
        border-bottom-left-radius: 1rem;
        border-top-right-radius: 1rem;
        padding: 0.6rem;
        transition: 0.3s linear;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        text-decoration: none;
        color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
        font-size: 1rem;
        &:hover {
            border: 2px solid ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
        }
    }
    @media (max-width: 800px) {
        flex-direction: column;        
    }
`

const StyledLogo = styled.div`
    color: ${props => (props.theme.mint)};
    font-size: 3.5rem;
    text-align: center;
`

const PictureToggle = styled.img`
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    transition: transform 2s ease-in-out;
    animation-iteration-count: infinite;
    border-radius: 50%;
    padding: 2px;
    color: #132227;
    background-color: ${props => (props.theme.almond)};
    &:hover {
        transform: rotate(360deg);
    }
`

export default function topBar ({ color, setColor }) {
    function handleScroll (section) {
        let offsetTop  = document.getElementById(section).offsetTop;
        window.scrollTo({
            top: offsetTop-0,
            behavior: "smooth"
        });
    }
    return (
        <div>
            <StyledTopBar>
                <StyledLogo>
                    NK
                </StyledLogo>
                <StyledLinks>
                    <a onClick={() => { handleScroll("about")}}>ABOUT</a>
                    <a onClick={() => { handleScroll("experience")}}>EXPERIENCE</a>
                    <a onClick={() => { handleScroll("projects")}}>PROJECTS</a>
                    <a onClick={() => { handleScroll("contact")}}>CONTACT</a>
                    <PictureToggle
                        onClick={() => {setColor({...color, dark: !color.dark})}}
                        src={!color.dark ? 'https://www.pngall.com/wp-content/uploads/5/Crescent-Moon-PNG-File.png' : 
                        'https://static.vecteezy.com/system/resources/previews/001/193/042/non_2x/sun-png.png'}/>
                </StyledLinks>
            </StyledTopBar>
        </div>
    )
}