import { useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import TopBar from './components/topBar.jsx'
import About from './components/About.jsx';

const Body = createGlobalStyle`
  body {
    transition: 0.7s;
    font-family: 'Raleway', sans-serif;
    color: #383838;
    background-color: ${props => (props.theme.dark ? props.theme.darkTeal : props.theme.almond)};
  }
`
// ${props => (props.theme.dark)}

const Components = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


const PictureToggle = styled.img`
  position: fixed;
  right: 1rem;
  top: 1rem;
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

function App() {
  const [color, setColor] = useState({
    darkTeal: '#213b44',
    almond: '#f2e4ce',
    AccentLight: '#004258',
    AccentDark: '#6cc0dc',
    splash: '#67004d',
    lightMagenta: '#a66896',
    dark: false
  });

  return (
    <div>
      <ThemeProvider theme={color}>
        <Body/>
        <Components>
          <TopBar color={color} setColor={setColor}/>
          <About/>
        </Components>
      </ThemeProvider>
    </div>
  )
}

export default App
