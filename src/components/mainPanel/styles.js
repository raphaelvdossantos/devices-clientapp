import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DevicesHeader = styled.div`
    border-bottom: 3px black solid;
    display: grid;
    grid-template-columns: 1fr 3fr 4fr;
    grid-template-areas: 'OSLogo Credentials Capacity';
    padding: 5px 2.5%;

    h1{
        font-size: 1.5rem;
    }
`;

export const OSLogo = styled.h1`
    grid-area: OSLogo;
`;

export const Credentials = styled.h1`
    grid-area: Credentials;
`;
export const Capacity = styled.h1`
    grid-area: Capacity;
`;

export const EmptyDeviceList = styled.div`
    text-align: center;
`;

export const EmptyDeviceListText = styled.h1`
    font-size: 1.5rem;
    color: rgba(0,0,0,0.6);
    margin: 10rem auto;
`;
