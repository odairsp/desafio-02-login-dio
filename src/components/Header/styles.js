import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    max-width:90%;
    height: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
   
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img{
        margin-left:2rem
    }
    
 `

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const Wrapper = styled.div`
    background-color:#151515;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;   

`
export const BuscarInputContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-evenly;
    width: 175px;
    height: 30px;
    background: #2d2d37;
    border-radius: 10px;
    padding: 2px 5px;
    margin: 0 12px;



`

export const Menu = styled.a`

    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    margin-right: 1rem;
    text-decoration: none;

`
export const MenuRight = styled.a`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
    width: 100%;

`
export const UserPicture = styled.img`
    width: 2rem;
    right: 2rem;
    border-radius: 22px;
    border: solid 2px #fff;
 
`

export const Input = styled.input`
    width: 85%;
    background: transparent;
    border:0;
    color: #fff;


`