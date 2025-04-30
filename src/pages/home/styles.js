import styled from "styled-components";

export const Container =  styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    Button{
        margin-top: 4rem;
        width: 177px;
    }
`
export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    width: 320px;
    margin-bottom: 1rem;
    line-height: 44px;
    color: #fff;
    
`
export const TitleHighlight = styled.span`
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

