import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSign, faUser } from '@fortawesome/free-solid-svg-icons'

const Components = styled.div`
padding:2%; 
width:100%;
height:15vh;
border-bottom: 1px solid #000;
display:flex;
justify-content: flex-start;
align-items:center;
`

const Left = styled.div`
width:50%;
display:flex;
justify-content:center;
align-items:center;
gap:5%;
`

const Center = styled.div`
font-weight:900;
text-shadow:2px 2px 4px red;
color:black;
`

const Right = styled.div`
display:flex;
justify-content:flex-end;
width:40%;
align-items:center;
.log{
    display:flex;
    justify-content:center;
    gap:10%;
    width:25%;
    align-items:center;
    height:8vh;
}
.sign{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10%;
    width:35%;
    height:8vh;
    border-left:solid 2px grey;
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
    border-top-left-radius:12px;
    border-bottom-left-radius:12px;
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

        <Center><h1>DYNATRACE</h1></Center>

        <Right>
            <div className="log">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            <p>Log In</p>
            </div>

            <div className="sign">
            <FontAwesomeIcon icon={faSign}></FontAwesomeIcon>
            <p>Sign Up</p>
            </div>
        </Right>
    </Components>
  )
}

export default Nav