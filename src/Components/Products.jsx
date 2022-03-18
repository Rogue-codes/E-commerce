import React from 'react'
import styled from 'styled-components'
import {ProductItems} from './Data'
import { Link } from 'react-router-dom'

const Container = styled.div`
    @media (max-width:450px) {
        flex-wrap: wrap;
        height: auto;
    }
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    align-items: center;
    gap: 2%;
    background: #e4ebf2;
    margin-bottom: 5%;
`

const ContCard = styled.div`
    @media (max-width:450px) {
        min-width: 90%;
        margin: auto;
        margin-bottom: 10%;
        max-height: 60%!important;
        margin-top: 15%;
    }
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
    flex-direction: column;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Textt = styled.h1`
    @media (max-width:450px) {
        font-size: 1.2rem;
    }
    color:black;
    position: absolute;
    top: 20%;
`

const Passage = styled.p`
    @media (max-width:450px) {
        font-size: .9rem;
    }
    color:#333;
    position: absolute;
    top: 40%;
    padding: 2%;
    width: 90%;
    background-color:  rgba(240, 248, 255, 0.726);
`

const Btn = styled.a`
    @media (max-width:450px) {
        top: 70%;
        font-size: 1rem;
    }
    color: black;
    position: absolute;
    top: 60%;
    left: 35%;
    border: 2px solid #000;
    padding: 2% 4%;
    font-size: 1.2vw;
    transition: all .5s ease-in-out;
    &:hover{
        background: #000;
        color: white;
    }
`


const Products = () => {
  return (
    <Container>
        {
            ProductItems.map((item =>
                <ContCard>
                    <img src={item.image} alt="" />
                    <Textt>{item.title}</Textt>
                    <Passage>{item.desc}</Passage>
                    <Link to='/prodpage'><Btn>{item.btn}</Btn></Link>
                </ContCard>
            ))
        }
    </Container>
  )
}

export default Products