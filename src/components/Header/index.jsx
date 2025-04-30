import React from 'react'
import {useNavigate} from 'react-router'
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,

} from './styles'
import { Button } from '../Button'
import Logo from '../../assets/logo_dio.png'

import {FiSearch} from 'react-icons/fi'

const Header = ({ autenticado }) => {

  const navigate = useNavigate();

  const handleRegister = () =>{
    navigate("/register");
  }
  const handleLogin = () =>{
    navigate("/login");
  }

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={Logo} height={30} alt='Logo' />
          {autenticado ? (

            <>
              <BuscarInputContainer>
                <FiSearch></FiSearch>
                <Input placeholder= "Buscar..."/>
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/81966240?v=4" />
            </>

          ) : (
            <>
              <MenuRight href='/'>HOME</MenuRight>
              <Button title="Entrar"onClick={handleLogin} />
              <Button title="Cadastrar" onClick={handleRegister} />
            </>

          )}
        </Row>
      </Container >
    </Wrapper >
  )
}

export { Header }