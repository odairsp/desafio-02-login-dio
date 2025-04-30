import React from 'react'
import {
    CardContainer, Content, HasInfo,
    ImageBackground,
    PostInfo, UserInfo, UserPicture
} from './styles'

import { FiThumbsUp } from 'react-icons/fi'
import bannerCard from '../../assets/bannerCard.webp'

const Card = () => {
    return (
        <CardContainer>

            <ImageBackground src={bannerCard}/>
            <Content>
                <UserInfo>
                    <UserPicture src= "https://avatars.githubusercontent.com/u/81966240?v=4"/>
                    <div>
                        <h4>ODR</h4>
                        <p>há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso HTML e CSS</h4>
                    <p>Projeto feito para o curso de html e css no bootcamp dio Global avanade...
                        <strong>SAiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JAVASCRIPT</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }