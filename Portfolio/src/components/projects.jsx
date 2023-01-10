import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledFlex, StyledColumn, StyledRow, StyledHeader, Dot, ViewMore } from '../styledComponents.jsx';

const StyledProjects = styled(StyledColumn)`
    margin-top: 15rem;
    align-items: start;
    width: 50vw;
`
const Header = styled(StyledHeader)`
    p {
        color: ${props => (props.theme.dark ? props.theme.lightMagenta : props.theme.splash)};
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

const Dots = styled(StyledRow)`
    transition: 0.7s;
    gap: 1rem;
`

const SingleDot = styled(Dot)`
    transition: 0.7s;
    background-color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
`

const Project = styled(StyledColumn)`
    transition: 1s;
    align-items: flex-start;
    justify-content: end;
`

const NameLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50vw;
    h2 {
        transition: 0.7s;
        font-weight: normal;
        font-size: 2.3rem;
        color: ${props => (props.theme.dark ? props.theme.lightMagenta : props.theme.splash)};
    }
    div {
        a {
            img {
                transition: 0.7s;
                height: 3rem;
                width: auto;
                border-radius: 50%;
                border: 1px solid transparent;
                &:hover {
                    background-color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
                    border: 1px solid ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
                }
            }
        }
    }
`

const Info = styled(StyledColumn)`
    img {
        transition: 0.3s;
        height: 15rem;
        width: auto;
        border: 2px solid ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
        &:hover {
            border: 2px solid ${props => (props.theme.dark ? props.theme.lightMagenta : props.theme.splash)};
        }
    }
    p {
        transition: 0.7s;
        padding-left: 2rem;
        color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
        line-height: 1.8rem;
        overflow: hidden;
    }
`


export default function Projects () {
    const [projects, setProjects] = useState([
        {
            name: 'Chat Chat',
            link: 'https://github.com/RFE2207-Rivendell/blue-ocean',
            image: 'https://github.com/RFE2207-Rivendell/blue-ocean/raw/main/assets/Chat_Profile.gif',
            description: "Chat Chat is an educational learning website that allows teachers and language learners to connect, schedule meetings and practice their skills with one another. This is the culmination of eight engineers working closely over the course of one week to complete an MVP based on client's request. I was the lead UI designer and built out most of the front end for this entire project. The front end was built using React and Javascript while the backend and server utilized PostgreSQL and Node.js. The live chat implemented Socket.io and google translate for live translation. Click the github logo to view the repository."
        },
        {
            name: 'Atelier',
            link: 'https://github.com/Trig-Titans/Project-Atelier',
            image: 'https://github.com/Trig-Titans/Project-Atelier/raw/main/client/demo/Overview.png',
            description: "Project Atelier is a website built with React, Express, and Webpack which used an API and business requirements that were set by stakeholders. Our engineering team of four worked on four seperate components on the site: Product Overview, Related Products/Outfit, Questions & Answers, and Ratings & Reviews. The first phase of our development was acclimating to project management tools we had not previously used in depth, such as the Git Feature Branch Workflow and Trello. We used an agile scrum methodology and held two daily standups to keep track of each member's progress on the sub-components of the product as well as rotated group leader each sprint. The strengths of this product are a functional and intuitive user experience as well as its sleek and consistent design. Our team challenged ourselves by learning new technologies, including styled-components, React Hooks, and Jest testing."
        },
        {
            name: 'Atelier Backend',
            link: 'https://github.com/rfce2207-Ki-Adi-Mundi/reviews',
            image: '',
            description: "The original database available for Atelier was sluggish and old. Our team was tasked with recreating the database, building a fully functional RESTful API and deploying it using AWS. We were given multiple CSV files with 15+ million data entries and had to import the data, transform the resulting data using queries, optimize our queries, and eventually deploy the API to AWS. I was able to stress test the API using Loader.io and it performed very well, being able to withstand over two thousand requests every seconds. During this project we got more experience with Postgres, PGAdmin, AWS, git workflow, nginx, and Loader.io. Click the project title or Github icon to be brought to the Github repo."
        },
        
        {
            name: 'SD Navs Rally 2023',
            link: 'http://sdnavsrally2023.com/',
            image: '',
            logo: 'https://www.navigators.org/wp-content/uploads/2018/04/Navigators-Favicon.png',
            description: "The home page for a conference that will be happening later this year. I worked closely with a client over a month to put it together. It is currently active using a AWS.ec2 instance. It is built with React, Javascript and Vite"
        }
    ])


    const projectList = projects.map((project, index) => {
        return (
            <Project key={index}>
                <NameLink>
                    <h2>
                        {project.name}
                    </h2>
                    <StyledRow>
                        <a href={project.link} target='_blank'>
                            <img src={project.logo ? project.logo : 'https://cdn-icons-png.flaticon.com/512/25/25231.png'}/>
                        </a>
                    </StyledRow>
                </NameLink>
                <Info>
                    {project.image ? <img src={project.image}/> : null}
                    <p>
                        {project.description}
                    </p>
                </Info>
            </Project>
        )
    })

    return (
        <StyledProjects>
            <Header>
                <p>
                    Projects
                </p>
                <Dots>
                    <SingleDot/>
                    <SingleDot/>
                    <SingleDot/>
                </Dots>
            </Header>
            {projectList}
        </StyledProjects>
    )
}