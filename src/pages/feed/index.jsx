import React from 'react'
import { Header } from '../../components/Header'
import {
    Container, Column, Title, TitleHighlight

} from './styles'
import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'


const Feed = () => {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                <Title>Feeds</Title>
                    <Card />
                    <Card />
                   
                
                </Column>
                <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={75} name="odair" image='https://avatars.githubusercontent.com/u/81966240?v=4' />
                    <UserInfo percentual={40} name="odair" image='https://avatars.githubusercontent.com/u/81966240?v=4' />
                    <UserInfo percentual={3} name="odair" image='https://avatars.githubusercontent.com/u/81966240?v=4' />
                    <UserInfo percentual={25} name="odair" image='https://avatars.githubusercontent.com/u/81966240?v=4' />
                    <UserInfo percentual={95} name="odair" image='https://avatars.githubusercontent.com/u/81966240?v=4' />
                </Column>
            </Container>

        </>
    )
}

export { Feed }