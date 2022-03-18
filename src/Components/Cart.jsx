import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Nav from './Nav'

const Container = styled.div`
    width: 100%;
    height: 150vh;
    padding: 2%;
`
const TopperMost = styled.h1`
    display: flex;
    justify-content: center;
    margin-bottom: 2%;
    font-size: 2vw;
`
const Top = styled.div`
    width: 100%;
    margin-bottom: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Button = styled.button`
    padding: 1% 4%;
    background-color: ${props => props.bg};
    color: ${props => props.color};
    font-size: 1vw;
`
const Mid = styled.div`
    width: 30%;
    display: flex;
    gap: 10%;
    text-decoration: underline;
    font-size: 1.5vw;
`
const Bottom = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
`
const Bleft = styled.div`
    flex: 3;
    height: 100%;
`
const Bcont = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
`
const Left = styled.div`
    flex: 3;
    height: 100%;
    display: flex;
`
const Mage = styled.div`
    width: 50%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Desc = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8%;
    padding: 2%;
`

const Prod = styled.p``

const Id = styled.p``

const Circ = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => props.bgc};
`

const Sixe = styled.p``

const Right = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5%;
`

const Bright = styled.div`
    flex: 1;
    height: 80%;
    border-radius: 10px;
    border: 1px solid black;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5%;
`
const BrightTop = styled.div``
const Buttonn = styled.button`
    padding: 2%;
    margin: 2%;
    font-size: 2vw;
`

const BrightBot = styled.div`
    font-size: 2vw;
`
const Order = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Sub = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Est = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Ship = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Check = styled.button`
    padding: 3% 4%;
    background: #000;
    color: white;
    border: none;
`
const Hr = styled.hr`
    margin-top: 2%;
    margin-bottom: 2%;
    background: white;
`

function Cart() {
    const [count, setCount] = useState(0)
    // const [price, setPrice] = useState(30)

    const [count2, setCount2] = useState(0)
    // const [price2, setPrice2] = useState(30)

  return (
      <>
      <Nav/>
        <Container>
        <TopperMost>YOUR CART</TopperMost>
        <Top>
            <Button bg='white' color='black'>CONTINUE SHOPPING</Button>
            <Mid>
                <p>Shopping Bag(2)</p>
                <p>Your Wishlist (0)</p>
            </Mid>
            <Button bg='black' color='white'>CHECKOUT NOW</Button>
        </Top>
        <Bottom>
            <Bleft>
                <Bcont>
                    <Left>
                        <Mage>
                            <img src="https://nb.scene7.com/is/image/NB/m840lb5_nb_02_i?$pdpflexf2$&wid=880&hei=880" alt="" />
                        </Mage>
                        <Desc>
                            <Prod><b>Product:</b> New balnce T90</Prod>
                            <Id><b>Id:</b>T903245627MEI</Id>
                            <Circ bgc='skyblue'></Circ>
                            <Sixe><b>Size:</b> 42.5</Sixe>
                        </Desc>
                    </Left>
                    <Right> 
                        <BrightTop>
                        <Buttonn onClick={()=>{setCount(count < 1 ? alert(`can't have a value lower than 0`): Number(count) - 1)}}>-</Buttonn>
                        <Buttonn>{count}</Buttonn>
                        <Buttonn  onClick={()=>{setCount(count + 1)}}>+</Buttonn>
                        </BrightTop>

                        <BrightBot>
                            <p>$40</p>
                        </BrightBot>
                    </Right>
                </Bcont>
                <Hr/>
                <Bcont>
                    <Left>
                        <Mage>
                            <img src="https://assets.adidas.com/images/w_1880,f_auto,q_auto/9b9d273018614ede9fe7ada1011c7e19_9366/HD2220_01_standard.jpg" alt="" />
                        </Mage>

                        <Desc>
                            <Prod><b>Product:</b> New balnce T90</Prod>
                            <Id><b>Id:</b>T903245627MEI</Id>
                            <Circ bgc='red'></Circ>
                            <Sixe><b>Size:</b> 42.5</Sixe>
                        </Desc>
                    </Left>
                    <Right>
                        <BrightTop>
                            <Buttonn onClick={()=>{setCount2(count2 < 1 ? alert(`can't have a value lower than 0`): Number(count2) - 1)}}>-</Buttonn>
                            <Buttonn>{count2}</Buttonn>
                            <Buttonn onClick={()=>{setCount2(count2 + 1)}}>+</Buttonn>
                        </BrightTop>

                        <BrightBot>
                            <p>$60</p>
                        </BrightBot>
                    </Right>
                </Bcont>
            </Bleft>
            <Bright>  
                <Order>ORDER SUMMARY</Order>    
                <Sub>
                    <p>Subtotal</p>
                    <p>$80</p>
                </Sub>     
                <Est>
                    <p>Estimated Shipping</p>
                    <p>$80</p>
                </Est> 
                <Ship>
                    <p>Shiping Discount</p>
                    <p>$80</p>
                </Ship>
                <Total>
                    <p><b>Total</b></p>
                    <p><b>$80</b></p>
                </Total>
                <Check>CHECKOUT NOW</Check>
            </Bright>
        </Bottom>
        </Container>
        <Footer/>
    </>
  )
}

export default Cart