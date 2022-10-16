import './App.css';
import { Visualizer } from './components/Visualizer'
import { Navbar } from './components/Navbar'
import styled from 'styled-components'
import { useEffect } from 'react';
import { Statusbar } from './components/Statusbar';
const Layout = styled.div`
   width: 100vw;
   height: 100vh;
   background: #161716;
   color: white;
   display:flex;
`
const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  position: relative;
`

const Footer = styled.footer`
  background: #161716;
  color: grey;
  font-size: 1rem;
  padding:20px;
  text-align: center;
`

function App() {
  const footerText = `This app is created with ReactJS, Redux, JS and Styled Components. Developed by rhombus. 2022.`
  return (
    <div style={{overflow : 'hidden'}}>
    <Layout>
      <Navbar />
      <MainPanel>
        <Statusbar />
        <Visualizer />
      </MainPanel>
    </Layout>
    <Footer>{footerText}  <a href='#' target='_blank'>Go to source code</a></Footer>
    </div>
  );
}


export default App;
