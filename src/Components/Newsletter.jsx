import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    /* @media (max-width:450px) {
        flex-wrap: wrap;
        height: auto;
    } */
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    gap: 5%;
    align-items: center;
    flex-direction: column;
    background: #e8cec5;
`
const Text = styled.div`
    @media (max-width:450px) {
        font-size: 2rem;
    }
    font-size: 4vw;
    font-weight: 900;

`

const Passage = styled.div`
    font-size: 2vw;
    @media (max-width:450px) {
        font-size: 1rem;
        text-align: center;
    }
`

const Email = styled.div`
    @media (max-width:450px) {
        width: 90%;
    }
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    input{
        @media (max-width:450px) {
        height: 8vh;
        font-size:.9rem;
        }
        width: 70%;
        height: 10vh;
        padding-left: 2%;
        font-size: 2vw;
        &:focus{
            outline: none;
        }
    }
    button{
        @media (max-width:450px) {
            height: 8vh;
            font-size:.9rem;
        }
        width: 30%;
        height: 10vh;
        background: #000;
        color: white;
        font-size: 2vw;
        border: none;
    }
`
function Newsletter() {
  return (
    <Container>
        <Text>
            Newsletter
        </Text>
        <Passage>
            Get timely updates from your favorite products.
        </Passage>
        <Email>
            <input type="email" placeholder='email address' />
            <button>Register</button>
        </Email>
        
    </Container>
  )
}

export default Newsletter