import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    position: relative;
    border-radius: 22px;
    background-color: #565656;
    color: #FFF;
    cursor: pointer;
    padding: 0.3rem 2rem;
    min-width: 120px;
    width: 100%;
    border:none;
    margin-right: 0.5rem;
    
    &:hover{
        filter: invert(1) brightness(1.2);
    }
    
    ${({variant}) => variant !== "primary" && css`
        min-width: 137px;
        height: 33px;
        background-color: #e4105d;

        &:hover{
            filter: invert(0);
            opacity: 0.8;
        }
        &:active{
            transform: scale(0.98);
        }
        &::after{
            content: '';
            position: absolute;
            border: solid 1px #e4105d;
            top: -6px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 50px;
        }
    ` }
 
`

