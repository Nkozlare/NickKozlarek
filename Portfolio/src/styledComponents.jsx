import styled from 'styled-components';

const StyledFlex = styled.div`
    display: flex;
`

const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const StyledHeader = styled.h2`
    font-style: italic;
    font-size: 3rem;
    font-weight: normal;
`

const Dot = styled.div`
    min-width: 0.7rem;
    min-height: 0.7rem;
    border-radius: 50%;
`

const ViewMore = styled.div`
    border: 2px solid transparent;
    border-bottom-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 0.6rem;
    transition: 0.3s linear;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${props => (props.theme.dark ? props.theme.lightMagenta : props.theme.splash)};
    font-size: 1.5rem;
    &:hover {
        border: 2px solid ${props => (props.theme.dark ? props.theme.almond : props.theme.darkTeal)};
    }
`

export {
    StyledFlex,
    StyledColumn,
    StyledRow,
    StyledHeader,
    Dot,
    ViewMore
}