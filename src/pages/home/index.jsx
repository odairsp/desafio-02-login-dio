import React from 'react'
import {useNavigate} from 'react-router'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import banner from '../../assets/banner.png'
import {
    Container,
    TextContent,
    Title,
    TitleHighlight
} from './styles'

const Home = () => {

let navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/login');
        
    }

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>Implemente</TitleHighlight>
                        <br />
                        o seu furuto global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button onClick={handleNavigate} title="Começar agora!" variant='secondary' />
                </div>
                <div>
                    <img src={banner} alt='Imagem Principal.' /> 
                </div>
            </Container>

        </>
    )
}

export { Home }