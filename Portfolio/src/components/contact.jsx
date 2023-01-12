import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledFlex, StyledHeader, StyledColumn, StyledRow, Dot, ViewMore } from '../styledComponents.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PDF from '../assets/Nicholas Kozlarek Resume.pdf';

const StyledContact = styled(StyledColumn)`
    align-items: start;
    width: 50vw;
    div {
        color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
    }
    @media (max-width: 800px) {
        width: 70vw;  
        align-items: center;
    }
`
const Header = styled(StyledHeader)`
    p {
        color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
        margin: 0px;
        margin-right: 1rem;
    }
    display: flex;
    flex-direction: row;
    &:hover {
        div {
            margin-left: 2rem;
            gap: 2rem;
            div {
                background-color: ${props => (props.theme.dark ? props.theme.lightMagenta : props.theme.splash)};
            }
            @media (max-width: 800px) {
                margin-left: 0;
                gap: 4rem;
            }
        }
    }
    @media (max-width: 1000px) {
        flex-direction: column;
        justify-content:center;
        p {
            text-align: center;
            margin-bottom: 1rem;
        }        
    }
    
`

const Dots = styled(StyledRow)`
    transition: 0.7s;
    gap: 1rem;
`

const SingleDot = styled(Dot)`
    transition: 0.7s;
    background-color: ${props => (props.theme.dark ? props.theme.mint : props.theme.mint)};
`

const ContactInfo = styled(StyledRow)`
    gap: 2rem;
    p {
        transition: 0.7s;
        padding-left: 2rem;
        color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
        line-height: 1.8rem;
        margin-right: 2rem;
        @media (max-width: 1000px) {
            text-align: center;      
        }
    }
    a {
        text-decoration: none;
        color: ${props => (props.theme.dark ? props.theme.lightMagenta : props.theme.splash)};
        img {
            cursor: pointer;
            transition: 0.7s;
            height: 3rem;
            width: auto;
            border: 1px solid transparent;
            border-radius: 50%;
            &:hover {
                background-color: ${props => (props.theme.mint)};
                border: 1px solid ${props => (props.theme.mint)};
            }
        }
    }
    @media (max-width: 1000px) {
        flex-direction: column;     
    }
`

const Acknowledgement = styled(StyledColumn)`
    color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
    margin: 5rem 0rem 1rem 0rem;
    flex-wrap: wrap;
    p {
        text-decoration: underline;
        text-align: center;
    }
    a {
        transition: 0.7s;
        text-decoration: none;
        margin-top: 4rem;
        color: ${props => (props.theme.dark ? props.theme.lightMagenta : props.theme.splash)};
        cursor: pointer;
        &:hover {
            color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
        }
    }
`

const StyledLogos = styled(StyledRow)`
    gap: 2rem;
    flex-wrap: wrap;
`

const Resume = styled(ViewMore)`
    text-decoration: none;
    border: 2px solid ${props => (props.theme.dark ? props.theme.lightMagenta : props.theme.splash)};
`

export default function Contact () {
    function handleScroll (section) {
        let offsetTop  = document.getElementById(section).offsetTop;
        window.scrollTo({
            top: offsetTop-0,
            behavior: "smooth"
        });
    }
    return (
        <StyledColumn  data-aos="fade-up">
        <StyledContact>
            <Header>
                <p>
                    Get in Touch!
                </p>
                <Dots>
                    <SingleDot/>
                    <SingleDot/>
                    <SingleDot/>
                </Dots>
            </Header>
            <ContactInfo>
                <p>
                    I am currently looking for a job in the software engineering field. If anything on this website piqued your interest, feel free to contact me using any of these links, or email me at kozlareknicholas@gmail.com.
                </p>
                <StyledLogos>
                    <a href='https://github.com/Nkozlare' target='_blank'>
                        <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt={'github octocat'}/>
                    </a>
                    <a href='https://www.facebook.com/nick.kozlarek' target='_blank'>
                        <img src='https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png' alt={'Facebook Logo'}/>
                    </a>
                    <a href='https://www.linkedin.com/in/nicholas-kozlarek/' target='_blank'>
                        <img src='https://cdn.freebiesupply.com/logos/large/2x/linkedin-icon-logo-png-transparent.png' alt={'LinkedIn logo'}/>
                    </a>
                    <a href={PDF} target='_blank'>
                        <Resume>Resume</Resume>
                    </a>
                </StyledLogos>
            </ContactInfo>
        </StyledContact>
        <Acknowledgement>
            <p>
                Created and designed by Nick Kozlarek
            </p>
            <a onClick={() => { handleScroll("topbar")}}>
                back to top
            </a>
        </Acknowledgement>
        </StyledColumn>
    )
}