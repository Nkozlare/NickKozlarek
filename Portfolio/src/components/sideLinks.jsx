import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledFlex, StyledColumn } from '../styledComponents.jsx';

const StyledLinks = styled(StyledColumn)`
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    gap: 1rem;
    a {
        img {
            cursor: pointer;
            transition: 0.7s;
            height: 2rem;
            width: auto;
            border: 1px solid transparent;
            border-radius: 50%;
            &:hover {
                background-color: ${props => (props.theme.mint)};
                border: 1px solid ${props => (props.theme.mint)};
            }
        }
    }
`

const Line = styled.div`
    height: 5rem;
    width: 0.2rem;
    background-color: ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
`


export default function SideLinks () {
    return (
        <StyledLinks>
            <a href='https://github.com/Nkozlare' target='_blank'>
                <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt={'github octocat'}/>
            </a>
            <a href='https://www.facebook.com/nick.kozlarek' target='_blank'>
                <img src='https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png' alt={'Facebook Logo'}/>
            </a>
            <a href='https://www.linkedin.com/in/nicholas-kozlarek/' target='_blank'>
                <img src='https://cdn.freebiesupply.com/logos/large/2x/linkedin-icon-logo-png-transparent.png' alt={'LinkedIn logo'}/>
            </a>
            <Line></Line>
        </StyledLinks>
    )
}