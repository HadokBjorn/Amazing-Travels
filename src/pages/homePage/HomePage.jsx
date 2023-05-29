import { useRef, useState } from "react";
import { Carousel, ContainerCarousel, DropdownContainer, DropdownOptions, HomePageContainer } from "./HomePage.style";
import {HiChevronDown} from "react-icons/hi"
import backgroundDropdown from "../../assets/background_dropdown.jpg"

export default function HomePage(){
  const carouselRef = useRef(null)
  const [dropDownVisible, setDropdownVisible] = useState("")

  function moveLeft(e) {
    e.preventDefault();
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };

  function moveRight (e){
    e.preventDefault();

    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };
  function openDropdown(){
    if(dropDownVisible === "active-dropdown"){
      setDropdownVisible("")
    }else{
      setDropdownVisible("active-dropdown")
    }
  }
  
  return(
   <HomePageContainer>

      <div className="image-and-dropdown">
        <img src={backgroundDropdown} alt=""/>
        
        <DropdownContainer>
          <div className="dropdown-title" >

            <div onClick={openDropdown}>
            <p>Selecione a cidade de destino</p>
            <HiChevronDown/>
            </div>
            
            <DropdownOptions className={dropDownVisible}>

              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>
              <li>Opção 1</li>

            </DropdownOptions>
          </div>
        </DropdownContainer>
      </div>



      <ContainerCarousel>
        <Carousel ref={carouselRef}>
          <li className="first-card"><p>1. Escolha a cidade que deseja visitar.</p></li>
          <li className="second-card"><p>2. Veja as passagens disponíveis, com preços e datas.</p></li>
          <li className="third-card"><p>3. Veja os locais onde você pode se hospedar e todo o conforto que eles oferecem.</p></li>
        </Carousel>

        <div className="buttons-container">
            <button onClick={moveLeft}> {"<"} </button>
            <button onClick={moveRight}> {">"} </button>
        </div>

      </ContainerCarousel>
   </HomePageContainer>
  )
}