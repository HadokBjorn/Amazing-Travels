import styled from "styled-components";

export const FilterContainer = styled.div`
    position: absolute;
    font-family: 'Poppins', sans-serif;

    border-radius:15px;
    width: 70%;
    right: 0;bottom: 0;
    top: 110px;
    background-color: #888;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    animation: filter-in .5s ease-in-out;

    @keyframes filter-in {
     0%{
        transform: translateX(100%);
     }
     100%{
        transform: translateX(0);
     }   
    }

    input{
        width: inherit;
    }
    button{
        width: inherit;
        font-family: 'Poppins';
    }
   
`