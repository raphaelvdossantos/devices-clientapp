import styled from "styled-components";

export const DeviceContainer = styled.div`
    border-bottom: 1px black solid;
    display: grid;
    grid-template-columns: 1fr 3fr 3fr 1fr;
    grid-template-areas: 'OSLogo Credentials Capacity Icons';
    align-items: center;

    padding: 1.5rem 2.5%;

    svg{
        height: 45px;
        width: 45px;
    }

    svg:first-child{
        grid-area: OSLogo;
    }

    input:disabled{
        color: black;
        border: none;
    }
    
    input:not(:disabled){
        border: none;
        border-bottom: 1px black solid;
        width: fit-content;
        background-color: transparent;        
    }
`;

export const SystemName = styled.input`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem;
`;

export const SystemType = styled.input`
    margin-top: 5px;
    display: block;
    font-weight: 500;
    font-size: 0.9rem;
    min-width: 200px;
`;

export const HDDCapacity = styled.input`
    grid-area: Capacity;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem;
`;

export const SysCredentials = styled.div`
    grid-area: Credentials;
`;

export const Icons = styled.div`
    grid-area: Icons;
    grid-gap: 0.5rem;
    display: flex;
    justify-content: space-between;
`;

export const EditingButton = styled.button`
    color: #f9f9f9;
    background-color: black;
    border: none;

    text-transform: lowercase;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 2rem;

    width: 100px;
    cursor: pointer;

    transition: 0.5s ease;

    &:hover{
        background-color: rgba(0,0,0,0.80);
    }
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;