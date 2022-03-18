import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faSign, faUser } from '@fortawesome/free-solid-svg-icons'

const Components = styled.div`
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
`

const Left = styled.div`
width:30%;
display:flex;
justify-content:center;
align-items:center;
gap:5%;
`

const Center = styled.div`
    a{
        font-size: 2vw;
        text-decoration: none;
        color: white;
    }

`

const Right = styled.div`
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
font-size:1.2vw;
`

const Form = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:80%;
input{
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
            <Link to='/cart'>Cart</Link>
            </div>
        </Right>
    </Components>
  )
}

export default Nav