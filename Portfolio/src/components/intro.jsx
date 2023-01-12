import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledFlex, StyledColumn, StyledRow } from '../styledComponents.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledAbout = styled(StyledFlex)`
    padding: 10rem 0 0 0;
    flex-direction: row;
    gap: 5rem;
    align-items: center;
    justify-content: center;
    width: 70vw;
    @media (max-width: 800px) {
        flex-direction: column;
        gap: 3rem;
        padding-top: 5rem;
    }
`

const StyledProfile = styled(StyledFlex)`
    flex-direction: column;
    align-items: end;
    justify-content: center;
    @media (max-width: 800px) {
        align-items: center;
    }
`

const StyledPhoto = styled.img`
    width: 20rem;
    height: auto;
    border: 2px solid ${props => (props.theme.dark ? props.theme.lightMagenta : props.theme.splash)};
    @media (max-width: 800px) {
        max-width: 70vw;
    }
`

const StyledName = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
    h1 {
        font-weight: normal;
        margin-top: 0rem;
        transition: 0.4s;
        font-size: 3.5rem;
        color: ${props => (props.theme.dark ? props.theme.lightMagenta : props.theme.splash)};
        border-bottom: 4px solid ${props => (props.theme.mint)};
        &:hover {
            color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
            border-bottom: 4px solid ${props => (props.theme.dark ? props.theme.lightMagenta : props.theme.splash)};
        }
    }
    h2 {
        color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
        font-size: 2rem;
        font-style: italic;
    }
    @media (max-width: 800px) {
        max-width: 70vw;
        h1 {
            font-size: 2.5rem;
            text-align: center;
        }
        h2 {
            text-align: center;
        }
    }
`

const StyledDescription = styled.p`
    color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
    text-align: right;
    line-height: 1.6rem;
    @media (max-width: 800px) {
        text-align: center;        
    }
`

const Skills = styled(StyledColumn)`
        margin-top: 2rem;
        margin-bottom: 15rem;
    p {
        display: flex;
        color: ${props => (props.theme.dark ? props.theme.lightMagenta : props.theme.splash)};
        font-size: 1.5rem;
        flex-wrap: wrap;
        text-align: center;
        @media (max-width: 800px) {
            max-width: 70vw;
        }
    }
`

const Icons = styled(StyledRow)`
    i {
        transition: 0.3s;
        width: 5rem;
        text-align: center;
        height: 5rem;
        font-size: 3.5rem;
        color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
        &:hover {
            font-size: 4rem;
        }
    }
    flex-wrap: wrap;
    @media (max-width: 800px) {
        gap: 1rem;
        max-width: 70vw;
        i {
            font-size: 3rem;
        }
    }
`

export default function Intro () {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);
    return (
        <StyledColumn data-aos="fade-up">
            <StyledAbout>
                <StyledProfile>
                    <StyledName>
                        <h1>
                            NICK KOZLAREK
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
            <Skills>
                <p>
                    These are some of the skills and languages that I'm good at:
                </p>
                <Icons>
                    <i className="devicon-javascript-plain colored"></i>
                    <i className="devicon-typescript-plain colored"></i>
                    <i className="devicon-react-original colored"></i>
                    <i className="devicon-postgresql-plain"></i>
                    <i className="devicon-mongodb-plain colored"></i>
                    <i className="devicon-jest-plain colored"></i>
                    <i className="devicon-html5-plain-wordmark colored"></i>
                    <i className="devicon-css3-plain-wordmark colored"></i>
                </Icons>
            </Skills>
        </StyledColumn>
    )
}

