import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 2.5%;
    margin-top: 2.5rem;
    border-bottom: 3px black solid;
`;

export const Button = styled.button`
    color: #f9f9f9;
    background-color: black;
    border: none;

    text-transform: lowercase;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 2rem;

    width: 100px;

    margin: 3rem auto;

    cursor: pointer;

    transition: 0.5s ease;

    &:hover{
        background-color: rgba(0,0,0,0.80);
    }
`;