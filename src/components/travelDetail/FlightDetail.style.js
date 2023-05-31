import styled from "styled-components";

export const ComponentContainer = styled.div`

    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    font-family: 'Poppins', sans-serif;

    background-color: rgba(000,000,000, 0.9);

    //padding: 25px;
`
export const Card = styled.div`
    position: absolute;
    top: 110px;
    width: 100%;
    min-height: 320px;
    border-radius: 15px;
    //border: 1px solid white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    animation: get-in 1s ease-in-out;

    @keyframes get-in {
        0%{
            transform: translateY(-200%);
        }
        100%{
            transform: translateY(0);
        }
    }

    img{
        width: 90%;
        height: 100px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        object-fit: cover;
        object-position: center;
    }

    button{
        width: 90%;
        background-color: darkturquoise;
        border-radius: 0;
        border: none;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        font-family: 'Poppins', sans-serif;
        color: #000;

        
    }
`

export const TravelDetail = styled.div`
    width: 90%;
    background-color: rgba(255,255,255, 0.6);
    //border-radius: 15px;
    padding: 5px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    p{
        width: 90%;
        padding:5px;
        //height: 20px;
        display: flex;
        flex: none;
        align-items: center;
        justify-content: center;

        color: #FFF;
        
        background-color: rgba(32,33,36, 0.4);
        border-radius: 15px;
        font-weight: 600;
    }
`