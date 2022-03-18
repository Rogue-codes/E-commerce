import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {slideItems} from './Data'
import { Link } from 'react-router-dom'

const Container = styled.div`
    @media (max-width:450px) {
        height: 50vh;
    }
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background: #000;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 50;
    margin: auto;
    left: ${props => props.direction === 'left' && '2%'} ;
    right: ${props => props.direction === 'right' && '2%'} ;
    cursor: pointer;
    opacity: 0.5;
    transition: all .5s linear;
    &:hover{
        opacity: 1;
    }
`

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    transform: translateX(${props => props.sliderIndex * -100}vw);
    transition: all 1s ease;
`
const Slide = styled.div`
    min-width: 100%;
    height: 100vh;
    display: flex; 
    justify-content: center;
    align-items: center;
    background-color:${props => props.bg};
`
const ImageCont = styled.div`
    flex: 1;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const TextCont = styled.div`
    @media (max-width:450px) {
        font-size: 1.5rem;
        display: none;
    }
    flex: 1;
    height: 100%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Tittle = styled.h1`
    font-size: 4vw;
`
const Desc = styled.p`
    margin: 4% 0%;
    width: 80%;
    font-size: 2vw;
    font-weight: 500;
    letter-spacing: 3px;
`
const Btn = styled.button`
    width: 30%;
    padding: 3%;
    font-size: 1.5vw;
    background: transparent;
    cursor: pointer;
    transition: all .5s linear;
    &:hover{
        background: #000;
        a{
            color: white;
        }
    }
    a{
        font-size: 1.5vw;
        text-decoration: none;
        color: #000;
    }
`

function Slider() {
    const [sliderIndex, setSliderIndex] = useState(0)

    const handleClick = (direction) => {
        if(direction === "left"){
            setSliderIndex(sliderIndex > 0 ? sliderIndex - 1: 3)
        }else{
            setSliderIndex(sliderIndex < 3 ? sliderIndex + 1 : 0)
        }
    }


  return (
    <Container>
        <Arrow direction="left" onClick={() => {handleClick("left")}}>
            <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </Arrow>

        <Wrapper sliderIndex={sliderIndex}>
            {
                slideItems.map((item => 
                    <Slide>
                    <ImageCont>
                        <img src={item.image} alt="" />
                    </ImageCont>
    
                    <TextCont>
                        <Tittle>{item.title}</Tittle>
                        <Desc>{item.desc}</Desc>
                        <Btn>
                            <Link to='/prodpage'>{item.btn}</Link>
                        </Btn>
                    </TextCont>
                </Slide>
                    ))
            }
        </Wrapper>

        <Arrow direction='right' onClick={() => {handleClick('right')}}>
            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </Arrow>
    </Container>
  )
}

export default Slider