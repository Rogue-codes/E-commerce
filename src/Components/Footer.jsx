import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest, faTwitter }  from '@fortawesome/free-brands-svg-icons'
import { faLocation, faMailForward, faPhone } from '@fortawesome/free-solid-svg-icons'

const Container = styled.footer`
    @media (max-width:450px) {
        height: auto;
        flex-direction: column;
    }
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    background: #fffff0;
`
const Left = styled.div`
    @media (max-width:450px) {
        width: 100%;
    }
    width: 30%;
    height: 100%;
    padding: 2% 0%;
    h1{
        @media (max-width:450px) {
            font-size: 1.5rem;
        }
        padding: 2% 0%;
    }
    p{
        @media (max-width:450px) {
            font-size: .8rem;
        }
        padding: 4% 0%;
        font-size: 1.5vw;
    }
    span{
        display: flex;
        justify-content: flex-start;
        gap: 5%;
        .ico{
            @media (max-width:450px) {
                font-size: 1rem;
            }
            font-size: 2vw;
            color: red;
        }
    }
`
const Center = styled.div`
    @media (max-width:450px) {
        width: 100%;
    }
    padding: 2%;
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5%;
    ul{
        list-style-type: none;
        li{
            @media (max-width:450px) {
                font-size: .8rem;
            }
            padding: 3% 0%;
        }
    }
`
const Right = styled.div`
    @media (max-width:450px) {
        width: 100%;
    }
    width: 30%;
    height: 100%;
    padding: 2% 0%;
    h2{
        @media (max-width:450px) {
            font-size: 1rem;
        }
        padding-bottom: 5%;
    }
    ul{
        list-style-type: none;
        .ico{
            @media (max-width:450px) {
                font-size: 1rem;
            }
            padding-right: 5%;
            font-size: 2vw;
        }
        li{
            @media (max-width:450px) {
                font-size: .8rem;
            }
            display: flex;
            padding-bottom: 3%;
        }
    }
`

function Footer() {
  return (
    <Container>
        <Left>
            <h2>Dynatrace</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus modi illo sapiente corrupti qui.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus modi illo sapiente corrupti qui.</p>
            <span>
                <FontAwesomeIcon className='ico' style={{color:'blue'}} icon={faFacebook}></FontAwesomeIcon>
                <FontAwesomeIcon className='ico' style={{color:'skyblue'}} icon={faTwitter}></FontAwesomeIcon>
                <FontAwesomeIcon className='ico' icon={faPinterest}></FontAwesomeIcon>
                <FontAwesomeIcon className='ico' style={{color:'pink'}} icon={faInstagram}></FontAwesomeIcon>
            </span>
        </Left>
        <Center>
            <h2>Useful links</h2>
            <ul>
                <li>Home</li>
                <li>Man Fashion</li>
                <li>Accesories</li>
                <li>Order Tracking</li>
                <li>Wishlist</li>
                <li>Woman fashion</li>
                <li>Cart</li>
                <li>My account</li>
                <li>Terms and condition</li>
                <li>others</li>
            </ul>
        </Center>
        <Right>
            <h2>Contact</h2>
            <ul>
                <li><FontAwesomeIcon className='ico' icon={faLocation}></FontAwesomeIcon>622 Dixie North, south Tobinchester 98339</li>
                <li><FontAwesomeIcon className='ico' icon={faPhone}></FontAwesomeIcon> +234 805 809 1098</li>
                <li><FontAwesomeIcon className='ico' icon={faMailForward}></FontAwesomeIcon> nnamdidanielosuji@gmail.com</li>
            </ul>
        </Right>
    </Container>
  )
}

export default Footer