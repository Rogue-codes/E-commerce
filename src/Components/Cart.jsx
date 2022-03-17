import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: auto;
    border: 6px solid #000;
    padding: 2%;

`
const TopperMost = styled.h2`
    display: flex;
    justify-content: center;
    padding: 2%;
`
const Top = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
`
const Button = styled.button`
    padding: 1% 3%;
    background: ${props => props.bg};
    color: ${props => props.col};
    border: none;
    border: 1px solid #000;
    cursor: pointer;
    font-size: 1.2vw;
`

const Mid = styled.div`
    display: flex;
    gap: 5%;
    width: 30%;
    text-decoration: underline;
    cursor: pointer;
    font-size: 1.2vw;
`
const Bottom = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
`
const ContLeft = styled.div`
    height: 100%;
    flex: 3;
`
const HR = styled.hr`

`
const Left = styled.div`
    display: flex;
`
const One = styled.div`
    height: 100%;
    flex: 3;
    display: flex;
`
const Two = styled.div`
    height: 100%;
    width: 40%;
`
const Right = styled.div`
height: 100%;
flex: 1;
border: 1px solid grey;
border-radius: 12px;
`
const Image = styled.div`
    margin-top: 5%;
    margin-bottom: 5%;
    height: 100%;
    width: 50%;
    border: 1px solid #000;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Color = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-left: 4%;
    background: ${props=>props.bgc};
`
const Desc = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    P{
        padding: 8% 4%;
    }
`
const TwoTop = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
`
const Minus = styled.div`
    font-size: 2vw;
    padding: 2%;
    cursor: pointer;
`
const Buttonn = styled.button`
    padding: 2%;
    font-size: 1.5vw;
`
const Plus = styled.div`
    font-size: 2vw;
    padding: 2%;
    cursor: pointer;
`
const TwoBottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    font-size: 3vw;
`
const Order = styled.h3`
    display: flex;
    justify-content: center;
    padding:8% 2%;
    font-size: 2vw;
`
const SubTotal = styled.div`
    display: flex;
    justify-content: space-between;
    padding:8% 2%;
    font-size: 1.2vw;
`

const Estimated = styled.div`
    display: flex;
    justify-content: space-between;
    padding:8% 2%;
    font-size: 1.2vw;
`

const Shipping = styled.div`
    display: flex;
    justify-content: space-between;
    padding:8% 2%;
    font-size: 1.2vw;
`

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    padding:8% 2%;
    font-size: 1.2vw;
`

function Cart() {
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(30)

    const increment = () => {
        setCount(count + 1)
        setPrice(count * price)
    }
    const decrement = () => {
        
        if(count === 0){
            alert(`can't take a value lower than 0`)
            return
        }else{
            setCount(count-1)
        }
    }
  return (
    <Container>
        <TopperMost>Your Shopping Cart</TopperMost>
        <Top>
            <Button bg='transparent'>CONTINUE SHOPPING</Button>
            <Mid>
                <p>Your Shopping Cart (2)</p>
                <p>Your Wishlist(0)</p>
            </Mid>
            <Button bg='black' col = 'white'>CHECKOUT NOW</Button>
        </Top>
        <Bottom>
            <ContLeft>
            <Left>
                <One>
                    <Image>
                        <img src="https://assets.adidas.com/images/w_1880,f_auto,q_auto/c0d5ce7e947840c5a6c0a80900048429_9366/AQ1701_01_standard.jpg" alt="" />
                    </Image>
                    <Desc>
                        <p><b>Product:</b> Adidas Running Bag</p>
                        <p><b>ID:</b>46577444AE</p>
                        <Color bgc='black'></Color>
                        <p><b>Size:</b>XL</p>
                    </Desc>
                </One>
                <Two>                       
                    <TwoTop>
                        <Minus onClick={decrement}>-</Minus>
                        <Buttonn>{count}</Buttonn>
                        <Plus onClick={increment}>+</Plus>
                    </TwoTop>
                    <TwoBottom>${price}</TwoBottom>
                </Two>
            </Left>
                <HR/>
            <Left>
                <One>
                    <Image>
                        <img src="https://assets.adidas.com/images/w_1880,f_auto,q_auto/c0d5ce7e947840c5a6c0a80900048429_9366/AQ1701_01_standard.jpg" alt="" />
                    </Image>
                    <Desc>
                        <p><b>Product:</b> Adidas Running Bag</p>
                        <p><b>ID:</b>46577444AE</p>
                        <Color bgc='black'></Color>
                        <p><b>Size:</b>XL</p>
                    </Desc>
                </One>
                <Two>                       
                    <TwoTop>
                        <Minus onClick={decrement}>-</Minus>
                        <Buttonn>{count}</Buttonn>
                        <Plus onClick={increment}>+</Plus>
                    </TwoTop>
                    <TwoBottom>$30</TwoBottom>
                </Two>
            </Left>
            </ContLeft>

            
            <Right>
                <Order>ORDER SUMMARY</Order>
                <SubTotal>
                    <p>Subtotal:</p>
                    <p>$80</p>
                </SubTotal>
                <Estimated>
                    <p>Estimated Shipping:</p>
                    <p>$5.90</p>
                </Estimated>
                <Shipping>
                    <p>Shipping discount:</p>
                    <p>$-5.90</p>
                </Shipping>
                <Total>
                    <p><b>Total</b>:</p>
                    <p><b>$80</b></p>
                </Total>
            </Right>
        </Bottom>
        
    </Container>
  )
}

export default Cart