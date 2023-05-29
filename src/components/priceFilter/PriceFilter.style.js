import styled from "styled-components";

export const ComponentContainer = styled.div`
    position: absolute;
    font-family: 'Poppins', sans-serif;

    
    width: 70%;
    right: 0;bottom: 0;
    top: 110px;
    background-color: #888;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    input{
        width: inherit;
    }
    button{
        width: inherit;
        font-family: 'Poppins';
    }
   
`