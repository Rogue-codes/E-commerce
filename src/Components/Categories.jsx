import React from 'react'
import styled from 'styled-components'
import {CategoryItem} from './Data'


const Container = styled.div`
    @media (max-width:450px) {
        flex-wrap: wrap;
        height: auto;
    }
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    align-items: center;
    background: #e4ebf2;
`

const CateCards = styled.div`
    @media (max-width:450px) {
        min-width: 90%;
        margin: auto;
        margin-bottom: 10%;
        max-height: 60%!important;
        margin-top: 15%;
    }
    height: 80%;
    width: 30%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    position: relative;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    gap: 5%;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
        transition: all 1s linear;
    }
    &:hover{
        img{
            transform: scale(1.2);
        }
    }
`

const Text = styled.h1`
    @media (max-width:450px) {
        font-size: 1.2rem;
    }
    color: black;
    z-index: 20;
    position: absolute;
`

const Button = styled.button`
    @media (max-width:450px) {
        font-size: 1rem;
    }
    color: black;
    border: 2px solid #000;
    position: absolute;
    top: 60%;
    padding: 2% 4%;
    font-size: 1.2vw;
    transition: all .5s ease-in-out;
    &:hover{
        background: #000;
        color: white;
    }
`

function Categories() {
  return (
    <Container>
        {
           CategoryItem.map((item =>
            <CateCards>
                <Text>{item.title}</Text>
                <img src={item.image} alt="" />
                <Button>{item.btn}</Button>
            </CateCards>
            
            )) 
        }
        
    </Container>
  )
}

export default Categories