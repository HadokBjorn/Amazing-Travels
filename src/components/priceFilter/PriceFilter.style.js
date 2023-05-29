import styled from "styled-components";

export const FilterContainer = styled.div`
    position: fixed;
    z-index: 3;
    font-family: 'Poppins', sans-serif;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius:15px;
    width: 70%;
    right: 0;bottom: 0;
    top: 0px;
    background-color: #888;

    animation: filter-in 0.5s ease-in-out;

    @keyframes filter-in {
     0%{
        transform: translateX(100%);
     }
     100%{
        transform: translateX(0);
     }   
    }

    form{
        width: 90%;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        div{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    label{
        color: #fff;
        margin-top: 15px;
        padding: 10px;
        border-radius: 15px;
        background-color: rgba(255,255,255, 0.2);
    }
    input{
        width: 80%;
    }
    button{
        width: 80%;
        font-family: 'Poppins';
    }
   
`

export const ReturnButton = styled.article`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
`