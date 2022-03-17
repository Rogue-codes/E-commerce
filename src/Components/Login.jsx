import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('https://assets.adidas.com/images/w_1880,f_auto,q_auto/c0d5ce7e947840c5a6c0a80900048429_9366/AQ1701_01_standard.jpg');
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-repeat: no-repeat;
    background-position: 10% 50%;
`
const Wrapper = styled.div`
    width: 25%;
    height: auto;
    padding: 2%;
    background-color: rgba(255, 255, 255, 0.678);
`
const Texts = styled.h1`
    font-size: 1.6vw;
    padding-bottom: 4%;
`
const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5%;
`
const Input = styled.input`
    width: 100%;
    height: 8vh;
    margin-bottom: 3%;
    padding-left: 2%;
`

const Button = styled.button`
    padding: 4% 8%;
    font-size: 1.4vw;
    border: none;
    background-color: teal;
    cursor: pointer;
    color: white;
`

function Login() {
  return (
     <>
        <Nav/>
         <Container>
        <Wrapper>
            <Texts>Sign in</Texts>
            <Form>
                <Input placeholder='Username'/>
                <Input placeholder='Password'/>
            </Form>
            <Button>Log in</Button>
        </Wrapper>
    </Container>
     </> 
  )
}

export default Login