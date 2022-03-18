import React, { useState } from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faShoppingCart, faSign, faUser } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'

const Components = styled.div`
    @media (max-width:450px) {
        justify-content: space-between;
        padding: 4%;
    }
    padding:2%; 
    width:100%;
    height:15vh;
    background: #000;
    border-bottom: 1px solid #000;
    position: sticky;
    top: 0;
    bottom: 0;
    z-index: 80;
    display:flex;
    justify-content: flex-start;
    align-items:center;
    .firstAnimate{
    @media (max-width:480px) {
      display: block;
    }
    display: none;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    background-color: #010214a6;
  }
  .animate{
    @media (max-width:480px) {
      display: block;
    }
    display: none;
    width: 80%;
    box-shadow: 2px 2px 4px #010214a6;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 70;
    background-color: black;
    .menu{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      height: 10vh;
      color: $textColor;
    }
    a{
      display: block;
      height: 15vh;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-top: 1px solid $textColor;
      padding: 2% 5%;
      font-size: 1.5rem;
      color: white;
      border-bottom: 1px solid #fff;
      text-decoration: none;
    }
  }
`

const Left = styled.div`
    @media (max-width:450px) {
        width: 50%;
    }
    width:30%;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:5%;
`

const Center = styled.div`
    a{
        @media (max-width:450px) {
            font-size: 1.2rem;
        }
        font-size: 2vw;
        text-decoration: none;
        color: white;
    }

`

const Right = styled.div`
@media (max-width:450px) {
    display: none;
}
display:flex;
justify-content:flex-end;
margin-left: 25%;
width:40%;
align-items:center;
.log{
    display:flex;
    justify-content:center;
    gap:10%;
    width:25%;
    align-items:center;
    height:8vh;
    transition: all .5s linear;
    &:hover{
        border-bottom: 1px solid #fff;
    }
    .ico{
        font-size: 1vw;
        color: white;
    }
    a{
        text-decoration: none;
        color: white;
        font-size: 1.2vw;
    }
}
.sign{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10%;
    width:35%;
    height:8vh;
    transition: all .5s linear;
    &:hover{
        border-bottom: 1px solid #fff;
    }
    .ico{
        font-size: 1vw;
        color: white;
    }
    a{
        text-decoration: none;
        color: white;
        font-size: 1.2vw;
    }
}

.cart{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10%;
    width:35%;
    height:8vh;
    transition: all .5s linear;
    &:hover{
        border-bottom: 1px solid #fff;
    }
    .ico{
        font-size: 1vw;
        color: white;
    }
    a{
        text-decoration: none;
        color: white;
        font-size: 1.2vw;
    }
}

`

const Lang = styled.p`
@media (max-width:450px) {
    display: none;
}
font-size:1.2vw;
`

const Form = styled.div`
    @media (max-width:450px) {
        display: none;
    }
    display:flex;
    justify-content:center;
    align-items:center;
    width:80%;
input{
    @media (max-width:450px) {
        height:6vh;
        width:100%;
    }
    height:7vh;
    width:100%;
    border:solid 1px lightgrey;
    padding-left: 4%;
    border-top-left-radius:12px;
    border-bottom-left-radius:12px;
    &:focus{
        outline: none;
    }
}
`

const Button = styled.div`
width:20%;
margin-left:-15%;
button{
    border:none;
    height:7vh;
    width:90%;
    background:transparent;
    cursor:pointer;
}
`

function Nav() {
    const [showMenu, setShowMenu]= useState(false)

    const maskTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: showMenu,
        delay: 200,
        // config: config.molasses,
        // onRest: () => set(!show),
      })

      const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: "translateX(-100%)"},
        enter: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(-100%)" },
        reverse: showMenu,
        delay: 200,
         // config: config.molasses,
        // onRest: () => set(!show),
      })
  return (
    <Components>
        <Center>
            <Link to='/'>ShopLite</Link>
        </Center>

        <Left>
            <Lang>
                EN
            </Lang>

            <Form>
                <input type="search" />
                <Button>
                    <button>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </button>
                </Button>
            </Form>

        </Left>

        <Right>
            <div className="log">
            <FontAwesomeIcon className='ico' icon={faUser}></FontAwesomeIcon>
            <Link to='/login'>Log in</Link>
            </div>

            <div className="sign">
            <FontAwesomeIcon className='ico'  icon={faSign}></FontAwesomeIcon>
            <Link to='/register'>Sign Up</Link>
            </div>

            <div className="cart">
            <FontAwesomeIcon className='ico'  icon={faShoppingCart}></FontAwesomeIcon>
            <Link to='/cart'>Cart </Link>
            </div>
        </Right>

        <span className='icon'>
            <FontAwesomeIcon icon={faBars} onClick ={ () => setShowMenu(!showMenu) } style={{color:'white'}} size="xl"></FontAwesomeIcon>
        </span>

        {
            maskTransitions(
            (styles, item) => item && <animated.div style={styles} className='firstAnimate' onClick={()=> setShowMenu(false)}>

            </animated.div>
            )
        }

        {
            menuTransitions(
            (styles, item) => item && <animated.div style={styles} className='animate'>
                <Link to='/login' onClick={()=> setShowMenu(false)}>Login</Link>
                <Link to='/register' onClick={()=> setShowMenu(false)}>Sign in</Link>
                <Link to='/cart' onClick={()=> setShowMenu(false)}>Cart</Link>
            </animated.div>
            )
        }
    </Components>
  )
}

export default Nav