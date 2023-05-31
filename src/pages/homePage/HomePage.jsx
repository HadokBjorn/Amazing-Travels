import { useEffect, useRef, useState } from "react";
import { Carousel, ContainerCarousel, DropdownContainer, DropdownOptions, HomePageContainer } from "./HomePage.style";
import {HiChevronDown} from "react-icons/hi"
import backgroundDropdown from "../../assets/background_dropdown.jpg"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomePage(){
  const carouselRef = useRef(null)
  const [dropDownVisible, setDropdownVisible] = useState("")
  const [states,setStates] = useState([])
  const [cities,setCities] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_URL_API}/states`)
      .then((res)=>{
        setStates(res.data)
      })
      .catch((err)=>console.log(err))
  },[])

  function citiesRequest(id){
    axios.get(`${process.env.REACT_APP_URL_API}/states/${id}/cities`)
      .then((res)=>{
        setCities(res.data)
      })
      .catch((err)=>console.log(err))
  }

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

              
              {
                (states.length>0 && cities.length===0)?
                states.map((item)=>(
                <li key={item.id} onClick={()=>citiesRequest(item.id)}>{item.state}</li>
                )):
                ""
              }

              {
                cities.length>0?
                cities.map((item)=>(
                <li key={item.id} onClick={()=>navigate(`/cities/${item.id}/travels`)}>{item.city}</li>
                )):
                ""
              }

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