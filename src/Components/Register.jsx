import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-repeat: no-repeat;
`
const Wrapper = styled.div`
    @media (max-width:450px) {
        width: 80%;
    }
    width: 50%;
    height: auto;
    padding: 2%;
    background-color: rgba(255, 255, 255, 0.678);
    border: 1px solid #000;
`
const Texts = styled.h1`
    @media (max-width:450px) {
        font-size:.8rem;
        margin-left: 4%;
        margin-bottom: 2%;
    }
    font-size: 2vw;
    padding-bottom: 2%;
`
const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
`
const Input = styled.input`
    @media (max-width:450px) {
        width: 90%;
        margin: auto;
        margin-bottom: 5%;
        font-size:.7rem;
    }
    width: 40%;
    height: 8vh;
    margin-bottom: 3%;
    padding-left: 2%;
`
const Aggreement = styled.p`
    @media (max-width:450px) {
        font-size:.8rem;
        margin-left: 4%;
    }
    font-size: 1.3vw;
    margin: 2% 0;
`
const Button = styled.button`
    @media (max-width:450px) {
        font-size:.8rem;
        margin-left: 4%;
    }
    padding: 2% 5%;
    font-size: 1vw;
    border: none;
    background-color: teal;
    cursor: pointer;
    color: white;
`
function Register() {
  return (
    <>
        <Nav/>
        <Container>

            <Wrapper>
                <Texts>CREATE AN ACCOUNT</Texts>
                <Form>
                    <Input placeholder='Name'/>
                    <Input placeholder='Last name'/>
                    <Input placeholder='Email'/>
                    <Input placeholder='Username'/>
                    <Input placeholder='Password'/>
                    <Input placeholder='Confirm Password'/>
                </Form>
                <Aggreement>By creating an account i consent to the proccessing of my prersonal data in accordance with the <b>privacy policy</b></Aggreement>
                <Button>CREATE</Button>
            </Wrapper>
        </Container> 
    </>
  )
}

export default Register