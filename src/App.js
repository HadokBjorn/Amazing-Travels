import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import HomePage from "./pages/homePage/HomePage"
import MenuBar from "./components/menuBar/MenuBar"
import TravelsPage from "./pages/travelsPage/TravelsPage"
import HotelsPage from "./pages/hotelsPage/HotelsPage"

export default function App() {
 
  return (
    <PagesContainer>
        <MenuBar/>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cities/:id/travels" element={<TravelsPage />} />
            <Route path="/cities/:id/hotels" element={<HotelsPage />} />
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
