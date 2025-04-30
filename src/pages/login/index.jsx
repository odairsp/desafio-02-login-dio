import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { MdEmail, MdLock } from 'react-icons/md'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { Column, ColumnText, Container, CreateText, ForgotText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles'
import { Input } from '../../components/Input'

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { api } from '../../services/api'

const schema = yup
    .object({
        email: yup.string().email('Email não é válido!').required('email requerido'),
        password: yup.string().min(6, 'Minimo 6 caracteres!').required('senha requerida'),
    })
    .required()


const Login = () => {
    
    const navigate = useNavigate();

    const { control, handleSubmit, watch, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async formdata => {
        try {
            console.log(formdata);
            const { data } = await api.get(`/users?email=${formdata.email}&senha=${formdata.password}`)
            console.log(data);
            if (data.length === 1) {
                navigate('/feed');
            }

        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <Header />
            <Container>
                <ColumnText>
                    <Title>
                        A plataforma para você aprender com experts,
                        dominar as principais tecnologias e entrar mais
                        rápido nas empresas mais desejadas.
                    </Title>

                </ColumnText>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro!</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                errorMessage={errors?.email?.message}
                                name="email" control={control}
                                placeholder="Email" type="email"
                                leftIcon={<MdEmail color='#E4105D' />} />
                            <Input errorMessage={errors?.password?.message}
                                name="password" control={control}
                                placeholder="Password" type="password"
                                leftIcon={<MdLock color='#E4105D' />} />
                            <Button title="Entrar" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <ForgotText>Esqueci minha senha!</ForgotText>
                            <CreateText href='/register'>Criar conta!</CreateText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>

        </>
    )
}

export { Login }