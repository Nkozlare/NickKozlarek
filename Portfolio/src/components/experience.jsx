import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledFlex, StyledHeader, StyledColumn, StyledRow, Dot } from '../styledComponents.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledExp = styled(StyledColumn)`
    align-items: start;
    width: 50vw;
    margin-bottom: 15rem;
    @media (max-width: 800px) {
        width: 70vw;  
        align-items: center;
        margin-bottom: 5rem;
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
    @media (max-width: 800px) {
        flex-direction: column;
        justify-content:center;
        p {
            text-align: center;
            margin-bottom: 1rem;
        }        
    }
`

const Job = styled(StyledColumn)`
    transition: 0.7s;
    align-items: start;
    padding: 2rem 0 2rem 1rem;
    border-bottom: 2px solid ${props => (props.theme.mint)};
    i {
        text-decoration: underline;
        text-decoration-color: ${props => (props.theme.dark ? props.theme.lightMagenta : props.theme.splash)};
        color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
        font-style: normal;
    }
    h2 {
        transition: 0.7s;
        font-weight: normal;
        font-size: 1.7rem;
        color: ${props => (props.theme.dark ? props.theme.lightMagenta : props.theme.splash)};
    }
    p {
        padding-left: 2rem;
        color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
        line-height: 1.8rem;
    }
    @media (max-width: 800px) {
        justify-content: center;
        p {
            text-align: center;
            padding-left: 0rem;
        }
        i, h2 {
            text-align: center;
            width: 70vw;
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

export default function Experience () {
    const [jobs, setJobs] = useState([
        {
            company: 'Galvanize',
            position: 'Software Engineer Immersive Resident',
            dates: '2022-current',
            description: "After completing Hack Reactor's Software Engineering bootcamp, I was asked to come back and be a SEIR (Software Engineering Immersive Resident) for the next class. During this role I mentored and led workshops for 30+ students on Javascript fundamentals and the creation of full-stack applications, along with answering any technical or non-technical questions that may arise. From this job I have gained real world experience in the industry and grown as both an engineer and as a leader."
        },
        {
            company: 'Hack Reactor',
            position: '',
            dates: '2022',
            description: "I decided to transition in to web development just about 1 year ago, starting with self-teaching and then chooseing to attend Hack Reactor's bootcamp! Attending Hack Reactor has taught me so many new amazing skills. During this bootcamp we have worked solo, in pairs, and also in groups. The schedule is pretty rigorous with classes lasting 11 hours Mon-Fri and 8 hours on Saturday, but because of this I now have experience in JS, React, HTML, CSS, AWS, Postgres, MySQL, MongoDB, and Postgres!"
        },
        {
            company: 'Insight Enterprises',
            position: 'Remote Hands Technician',
            dates: '2021-2022',
            description: "While at Insight, I was an IT specialist that maintained and monitored thousands of devices in data centers, recognizing hardware and software issues and ascertaining solutions to keep hundreds of companies across the globe running smoothly. I also trained 4 new hires, customizing the training process to address the needs of the individual learning styles resulting in expanded capacity at the leadership level to address higher priorities"
        },
        {
            company: "Pasture Valley Children's Home",
            position: "Counselor and Technical Upkeep Manager",
            dates: '2019-2021',
            description: "It is hard to sum up these two years spent in Swaziland. I was partly there for counseling and music therapy, and partly there for farm management. The Children's home was self-sustaining as it was located on a dairy farm. On the technical side, I built and repaired furniture and buildings, recognizing problems and fixing malfunctioning plumbing and electric components to last for years of hard use while managing and delegating the 50+ workers working on the farm. The most important work I did however, was integrating therapy with instrument and voice lessons to help the kids process what brought them to the children's home in the first place."
        }
    ])
    const jobList = jobs.map((job, index) => {
        return (
            <Job key={index}>
                <h2>
                    {job.company} {job.position ? ` - ${job.position}` : null}
                </h2>
                <i>
                    {job.dates}
                </i>
                <p>
                    {job.description}
                </p>
            </Job>
        )
    })
    return (
        <StyledExp  data-aos="fade-up">
            <Header>
                <p>
                    Experience
                </p>
                <Dots>
                    <SingleDot/>
                    <SingleDot/>
                    <SingleDot/>
                </Dots>
            </Header>
            {jobList}
        </StyledExp>
    )
}