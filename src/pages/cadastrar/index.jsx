import React from 'react'
import { ColumnRegister, ContainerRegister, SubTitleResgister, SubTitleSpan, SubTitleSpanColor, TitleRegister, Wrapper } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from 'react-hook-form'
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'

import { useNavigate } from 'react-router'
import { api } from '../../services/api'


const schema = yup
  .object({
    name: yup.string().required('nome requerido'),
    email: yup.string().email('Email inválido!').required('email requerido'),
    password: yup.string().min(8, 'deve conter mais de 8 caracteres!').required('senha requerida'),
  })
  .required()


const Register = () => {
  const navigate = useNavigate()

  const { control, handleSubmit, watch, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async formdata => {

    const { data } = await api.get(`/users`);
    
    let newUser = {}
  
     try {

       if (data.length > 0) {

          if(data.some((elem)=> elem.email === formdata.email)){
            console.log("Email existente!");
            return
          }else{
          newUser = {
           id: (data.length + 1),
           name: formdata.name,
           email: formdata.email,
           password: formdata.password}
         
         }
       }else{
         newUser = {
           id: 1,
           name: formdata.name,
           email: formdata.email,
           password: formdata.password
          }
       }

       console.log(newUser.name);
       await api.post(`/users`, newUser)
         .then((response) => {
           console.log('Dados adicionados com sucesso:', response.data);
         })
         .catch((error) => {
           console.error('Erro ao adicionar dados:', error);
         });

     } catch (error) {
       console.log(error.message);
     } finally{
      
     }
  };

  return (
    <>
      <Header />
      <ContainerRegister>
        <ColumnRegister>
          <TitleRegister>
            A plataforma para você aprender com experts,
            dominar as principais tecnologias e entrar mais
            rápido nas empresas mais desejadas.
          </TitleRegister>
        </ColumnRegister>
        <ColumnRegister>
          <Wrapper>
            <TitleRegister>Comece agora grátis</TitleRegister>
            <SubTitleResgister>Crie sua conta e make the change._</SubTitleResgister>

            <form onSubmit={handleSubmit(onSubmit)}>

              <Input
                errorMessage={errors?.name?.message}

                name="name"
                control={control}
                placeholder="Nome completo"
                leftIcon={<MdPerson color='#8647AD' size={'1.2rem'} />} />

              <Input
                errorMessage={errors?.email?.message}
                name="email" control={control}
                placeholder="E-mail" type="text"
                leftIcon={<MdEmail color='#8647AD' />} />

              <Input
                errorMessage={errors?.password?.message}
                name="password" control={control}
                placeholder="Senha" type="password"
                leftIcon={<MdLock color='#8647AD' />} />

              <Button title={"Criar minha conta"} variant='secondary' type='submit' />

              <SubTitleResgister>
                Ao clicar em "criar minha conta grátis",
                declaro que aceito as Políticas de <br />
                Privacidade e os Termos de Uso da DIO.
              </SubTitleResgister>
              <SubTitleSpan>Já tenho conta. <a href='/login'>Fazer login</a></SubTitleSpan>

            </form>

          </Wrapper>
        </ColumnRegister >
      </ContainerRegister>
    </>
  )
}

export { Register }