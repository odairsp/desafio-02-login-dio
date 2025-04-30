import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3b3450;
    display: flex;
    align-items: center;
    margin-top: 20px;

`

export const IconContainer = styled.div`
    margin-right: 10px;
    height: 18px;
   
`
export const InputText = styled.input`
    width: 100%;
    background-color: transparent;
    color: #fff;
    border: 0;
    height: 30px;
    
    &:focus{
        outline: none;
    }

`

export const ErrorText = styled.p`
    color: red;
    font-size:1rem ;
    margin: 0 0 1rem 0;
   

`