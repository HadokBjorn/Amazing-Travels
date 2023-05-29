import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import HomePage from "./pages/homePage/HomePage"
import MenuBar from "./components/menuBar/MenuBar"
import TravelsPage from "./pages/travelsPage/TravelsPage"

export default function App() {
 
  return (
    <PagesContainer>
        <MenuBar/>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/travels" element={<TravelsPage />} />
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
