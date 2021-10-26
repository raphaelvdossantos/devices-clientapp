import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    border-bottom: 3px black solid;
`;

export const Tab = styled.h1`
    ${({ isActive }) => {
        if (isActive) {
            return (`
                color: #f9f9f9;
                background-color: black;
                border: none;
                
                &:hover{
                    background-color: rgba(0,0,0,0.80);
                }`
            );
        } else {
            return (`
                background-color: #f9f9f9;
                color: black;
                border: none;`
            );
        }
    }}
   

    text-transform: lowercase;
    font-weight: 600;
    font-size: 1.6rem;

    padding: .5rem 1rem;

    cursor: pointer;

    transition: 0.5s ease;


`;