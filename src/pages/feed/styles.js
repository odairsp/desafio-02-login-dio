import styled from "styled-components";

export const Container =  styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`
export const Title = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    width: 320px;
    margin-bottom: 1rem;
    line-height: 44px;
    color: #fff;
    
`
export const TitleHighlight = styled.h4`
    color: #E4105D;
`

export const TextContent = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    width: 420px;
    margin-bottom: 1rem;
    line-height: 22px;
    color: #fff;

`
export const Column = styled.div`
    flex:${({flex})=> flex};
    padding: 24px;
`
