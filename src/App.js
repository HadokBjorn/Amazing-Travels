import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import HomePage from "./pages/homePage/HomePage"
import MenuBar from "./components/menuBar/MenuBar"

export default function App() {
 
  return (
    <PagesContainer>
        <MenuBar/>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  height: auto;
  
  div::-webkit-scrollbar{
    display: none;
  }
`
