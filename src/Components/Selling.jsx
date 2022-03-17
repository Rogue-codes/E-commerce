import { faCartShopping, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import {sellingItems} from './Data'

const Container = styled.div`
    @media (max-width:450px) {
        flex-wrap: wrap;
        height: auto;
    }
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    flex-wrap: wrap;
`
const Shadow = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.438);
    opacity: 0;
    transition: all .5s linear;
`

const ContainerCards = styled.div`
    @media (max-width:450px) {
        min-width: 90%;
        margin: auto;
        margin-bottom: 10%;
        max-height: 60%!important;
        margin-top: 15%;
    }
    max-width: 24%;
    height: 70vh;
    margin-bottom: 4%;
    background: #eceff1;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    &:hover ${Shadow}{
       opacity: 1;
    }
`
const Icons = styled.div`
    width: 80%;
    margin: auto;
    height: auto;
    display: flex;
    justify-content: center;
    gap: 15%;
    padding: 4%;
    align-items: center;
    .icon{
        @media (max-width:450px) {
            font-size: 2rem;
        }
        font-size: 3vw;
        color:white;
        transition: all .5s ease;
        cursor: pointer;
        &:hover{
            color: red;
            transform: scale(1.2);
        }
    }
`

function Selling() {
  return (
    <Container>
        {
            sellingItems.map((item => 
                <ContainerCards>
                    <img src={item.image} alt="" />
                    <Shadow>
                        <Icons>
                            <FontAwesomeIcon className='icon' icon={faCartShopping}></FontAwesomeIcon>
                            <FontAwesomeIcon className='icon' icon={faSearch}></FontAwesomeIcon>
                            <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
                        </Icons>
                    </Shadow>
                </ContainerCards>
                ))
        }
        
    </Container>
  )
}

export default Selling