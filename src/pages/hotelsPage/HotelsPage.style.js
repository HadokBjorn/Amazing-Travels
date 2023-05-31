import styled from "styled-components";

export const PageContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    padding: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media screen and (min-width: 765px){
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }
`
export const Card = styled.article`
    width: 100%;
    min-height: 320px;
    border-radius: 15px;
    //background-color: darkcyan;
    background-color: transparent;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    transition: .2s ease-in-out;

    :hover{
        transform: scale(1.1);
    }

    img{
        width: 90%;
        height: 200px;
        border-radius: 15px;
        object-fit: cover;
        object-position: center;
    }
    @media screen and (min-width: 765px){
        width: 300px;
    }
`
export const TravelDetail = styled.div`
    width: 90%;
    background-color: rgba(255,255,255, 0.4);
    border-radius: 15px;
    padding: 5px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    p{
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
export const FilterButton = styled.div`
    position: fixed;
    top: 110px;
    right: 5px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    background-color: white;
    transition: .2s ease-in-out;
    :hover{
        cursor: pointer;
        background-color: greenyellow;
        transform: scale(1.1);
    }
    @media screen and (min-width: 765px){
        right: 100px;
    }


`