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
    gap: 5rem;
`

export const Wrapper = styled.div`
    max-width: 300px;

    Button {
        margin-top: 1rem;
    }
`

export const Column = styled.div`
   flex: 2;
`
export const ColumnText = styled.div`
   flex: 3;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-style: normal;
    font-weight: 700; 
    font-size: 2rem;
    width: 565px;
    margin-bottom: 1rem;
    line-height: 48px;
    color: #fff;
 `

export const TitleLogin = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    width: 320px;
    margin-bottom: 1rem;
    line-height: 44px;
    
`
export const SubTitleLogin = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 25px;
    
`
export const ForgotText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    
    line-height: 19px;
    color: #e5e044;
    
`
export const CreateText = styled.a`
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    text-decoration:none;
    line-height: 19px;
    color: #e23dd7;

`

