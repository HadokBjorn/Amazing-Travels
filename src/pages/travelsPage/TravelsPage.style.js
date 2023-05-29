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
    height: 300px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    border: 1px solid red;

    img{
        width: 90%;
        height: 200px;
        object-fit: cover;
        object-position: center;
    }
    @media screen and (min-width: 765px){
        width: 300px;
    }
`
export const TravelDetail = styled.div`
    width: 90%;
    border: 1px solid white;

    p{
        text-align: center;
        height: 20px;
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
    :hover{
        cursor: pointer;
        background-color: greenyellow;
    }
    @media screen and (min-width: 765px){
        right: 100px;
    }


`