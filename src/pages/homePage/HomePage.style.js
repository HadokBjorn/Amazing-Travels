import styled from "styled-components";
import backgroundFirstCard from "../../assets/background_first-card.png"
import backgroundSecondCard from "../../assets/background_second-card.png"
import backgroundThirdCard from "../../assets/background_third-card.png"


export const HomePageContainer =  styled.div`
    font-family: 'Poppins', sans-serif;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .active-dropdown{
        display: flex;
    }

    .image-and-dropdown{
        position: relative;
        width: 100%;
        height: 70px;
        border: 5px solid #e5e5e5;


        img{
            width: inherit;
            height: inherit;
            object-fit: cover;
            object-position: center;
        }

    }

    ul::-webkit-scrollbar{
        display: none;
    }
    @media screen and (min-width: 768px) {
        .image-and-dropdown{
            height: 150px;
        }
          
    }
    @media screen and (min-width: 940px) {
        .image-and-dropdown {
            height: 220px;
        }    
    }
`
export const DropdownContainer = styled.div`
    position: absolute;
    top: 0; bottom: 0;left:0; right: 0;
    

    display: flex;
    align-items: center;
    justify-content: center;

    .dropdown-title{
        position: relative;
        width: 80%;
        height: 40px;

        border-radius: 15px;
        background-color: rgba(255,255,255, .7);


        

        div{
            height: inherit;
            font-size: 12px;


            padding: 0 10px;


            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    @media screen and (min-width: 768px) {
        .dropdown-title{
            font-size: 20px;
        }
    }

`
export const DropdownOptions = styled.ul`
    position: absolute;
    left: 0; right: 0;
    top: 41px;
    z-index: 3;
    height: 400px;
    overflow: auto;

    display: none;
    align-items: center;
    flex-direction: column;

    background-color: rgba(255,255,255, .7);
    
    li{
        height: 20px;
        width: calc(100% - 2px);
        border: 1px solid #888;
        padding: 10px 0;

        display: flex;
        align-items: center;
        justify-content: space-evenly;
        
    }
`

export const ContainerCarousel = styled.div`
    width: 100%;
    height: auto;
    margin: 70px 0;
    position: relative;

    .buttons-container{
        position: absolute;
        width:100%;
        top: 0; bottom: 0;
        
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

        button{
            width: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            color: #111;
            background-color: #FFF;
            opacity: 0.5;
        }
    
    }
    @media screen and (min-width: 768px) {
        ul{
            justify-content: space-between;
            overflow-x: unset;

            li{
                width: 230px;
            }
        } 
        .buttons-container button{
            display: none;
        }
    }

    @media screen and (min-width: 940px) {
        
        ul{
            justify-content: space-between;
            overflow-x: unset;
            li{
                width: 30%;
            }
        }
          
    }
`

export const Carousel = styled.ul`

    border-radius: 15px;

    width: 100%;
    height: 400px;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    position: relative;
    
    li{
        width: 100%;
        height: inherit;
        border-radius: 15px;

        display: flex;
        flex: none;
        align-items: center;
        justify-content: center;

        background-position: center;
        background-size: cover;
        background-repeat: no-repeat; 
        
        p{
            width: 80%;
            padding: 10px 0;
            border-radius: 15px;
            background-color: rgba(255,255,255, 0.8);
            text-align: center;
            font-size: 17px;
            line-height: 20px;
            font-weight: 400;

        }
    }
    .first-card{
        background-image: url(${backgroundFirstCard});
    }
    .second-card{
        background-image: url(${backgroundSecondCard});
    }
    .third-card{
        background-image: url(${backgroundThirdCard});
    }

`