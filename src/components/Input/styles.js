import styled from "styled-components";


export const Label = styled.label`
    display: flex;
    justify-content: space-between;
    padding: 15px 2%;
    font-size: 1.3rem;
    font-weight: 600;
    margin: 1rem 0;
`;

export const Input = styled.input`
    width: 40%;
    border: 1px black solid;
    padding-left: 5px;
    font-size: 1.3rem;
    line-height: 1.5rem;
`;

export const Separator = styled.div`
    height: 1px;
    width: 70%;
    background-color: rgba(0,0,0,0.25);
`;