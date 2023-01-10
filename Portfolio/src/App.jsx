import { useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import TopBar from './components/topBar.jsx'
import Intro from './components/intro.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';

const Body = createGlobalStyle`
  body {
    transition: 0.7s;
    font-family: 'Open Sans', sans-serif;;
    color: #383838;
    background-color: ${props => (props.theme.dark ? props.theme.darkTeal : props.theme.almond)};
    padding-bottom: 10rem;
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
    lightMagenta: '#d585c1',
    mint: '#5eeac2',
    dark: true,
    about: false,
  });

  return (
    <div>
      <ThemeProvider theme={color}>
        <Body/>
        <Components>
          <TopBar color={color} setColor={setColor}/>
          <Intro/>
          <About toggle={color} setColor={setColor}/>
          <Experience/>
          <Projects/>
        </Components>
      </ThemeProvider>
    </div>
  )
}

export default App
