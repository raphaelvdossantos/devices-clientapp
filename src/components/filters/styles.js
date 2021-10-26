import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: auto 0 auto auto;
`;

export const Label = styled.label`
    font-size: 1rem;
    font-weight: 600;
`;

export const Filter = styled.input`
    margin-left: 3px;
    padding-left: 3px;
    border: none;
    border-bottom: 1px black solid;
    background-color: transparent;
    cursor: pointer;

    font-weight: 00;
    font-size: 1.1rem;

    text-align: center;

    &:focus{
        border: none;
        border-bottom: 3px black solid;
        outline: none;
    }
`;