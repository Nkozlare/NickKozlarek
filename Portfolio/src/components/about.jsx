import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledFlex } from '../styledComponents.jsx';

const StyledAbout = styled(StyledFlex)`
    padding: 10rem;
    flex-direction: row;
    gap: 5rem;
    align-items: center;
    justify-content: center;
    width: 70vw;
`

const StyledProfile = styled(StyledFlex)`
    flex-direction: column;
    align-items: end;
    justify-content: center;
`

const StyledPhoto = styled.img`
    width: 20rem;
    height: auto;
    border: 2px solid ${props => (props.theme.dark ? props.theme.lightMagenta : props.theme.splash)};
`

const StyledName = styled.div`
    text-align: right;
    h1 {
        font-size: 4rem;
        color: ${props => (props.theme.dark ? props.theme.lightMagenta : props.theme.splash)};
        border-bottom: 2px solid ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
    }
    h2 {
        color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
        font-size: 2rem;
    }
`

const StyledDescription = styled.p`
    color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
    text-align: right;
`

export default function About () {
    return (
        <StyledAbout>
            <StyledProfile>
                <StyledName>
                    <h1>
                        Nick Kozlarek
                    </h1>
                    <h2>
                        Full Stack Software Engineer
                    </h2>
                </StyledName>
                <StyledDescription>
                    Hello! I am a full stack web developer that specifically enjoys UI and UX design. I come from a creative background and excel at implementing my artistic nature in creating aesthetically pleasing and effective websites.  
                </StyledDescription>
            </StyledProfile>
            <StyledPhoto src='https://i.ibb.co/g9JpRJF/Screen-Shot-2022-12-12-at-9-43-00-AM.png' alt='Picture of Nick Kozlarek with very colorful shirt'/>
        </StyledAbout>
    )
}

