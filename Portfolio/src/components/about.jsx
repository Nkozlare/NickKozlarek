import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledFlex, StyledColumn, StyledRow, StyledHeader, Dot, ViewMore } from '../styledComponents.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledAbout = styled(StyledColumn)`
    transition: 0.7s;
    align-items: start;
    max-width: 50vw;
    margin-top: ${props =>(props.loading ? '30rem' : '15rem')};
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
        }
    }
`

const Font = styled.p`
    transition: 1s;
    height: ${props => (props.expanded ? '20rem' : '10rem')};
    color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
    border-bottom: 2px solid ${props => (props.expanded ? 'transparent' : (props.theme.dark ? props.theme.lightMagenta : props.theme.splash))};
    font-size: 1rem;
    line-height: 1.8rem;
    text-align: right;
    overflow: hidden;
`

const Dots = styled(StyledRow)`
    transition: 0.7s;
    gap: 1rem;
`

const SingleDot = styled(Dot)`
    transition: 0.7s;
    background-color: ${props => (props.theme.dark ? props.theme.mint : props.theme.mint)};
`

export default function About ({ toggle }) {
    const [expanded, setExpanded] = useState(false)
    return (
        <StyledAbout data-aos="fade-up">
            <Header>
                <p>
                    About Me
                </p>
                <Dots>
                    <SingleDot/>
                    <SingleDot/>
                    <SingleDot/>
                </Dots>
            </Header>
            <Font expanded={expanded}>
            Good day! As I mentioned earlier, I am a web designer who conveniently loves designing websites. I do a lot of other stuff when I am not coding, including but not limited to rock climbing, drinking coffee, wishing I could eat gluten, and traveling with my wife, Molly. We recently got back from two years spent working at a children's home in a little country called Eswatini (usually just called Swaziland by the locals). While there, I did some counseling and fixed the furniture that would break frequently from the 'passionate' use of nearly 100 kids. 

            <br/><br/>The idea of becoming a programmer popped up while thinking of how my wife and I could sustainably stay in a developing nation. I have a bunch of friends who are programmers and I decided I would hop on the bandwagon. I was pleasantly surprised when I discovered that not only was I good at it, it perfectly appealed to my creative tendencies and problem-solving process. 
            </Font>
            <ViewMore onClick={() => {
                setExpanded(!expanded)
            }}>
                {expanded ? 'View less...' : 'View more...'}
            </ViewMore>
        </StyledAbout>
    )
}