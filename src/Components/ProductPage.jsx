import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 4%;
`
const Left = styled.div`
    width: 50%;
    height: 100%;
    background: url('https://assets.adidas.com/images/w_1880,f_auto,q_auto/7df69015a9024149b7f5ad490115139c_9366/GV7701_01_standard.jpg');
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-repeat: no-repeat;
    background-position: 70% 10%;
`
const Right = styled.div`
    width: 50%;
    height: 100%;
    background-position: 10% 30%;
`
const Text = styled.h2`
    font-size: 3vw;
    padding: 4%;
`
const Passage = styled.p`
    font-size: 1.3vw;
    padding: 4%;
`
const Number = styled.h2`
    padding-left: 4%;
`
const Color = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
`
const Coloribs = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2%;
    padding: 4%;
    width: 50%;
`
const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background:${props => props.color} ;
    cursor: pointer;
`
const Size = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    gap: 5%;
    select{
        width: 40%;
        height: 6vh;
    }
`
const Add = styled.div`
    width: 100%;
    height: 13vh;
    padding: 4%;
    display: flex;
    align-items: center;
`
const AddLeft = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5%;
`
const Minus = styled.div`
    font-size: 2vw;
`
const Plus = styled.div`
    font-size: 2vw;
`
const Button = styled.button`
    padding: 4% 6%;
    border-radius: 12px;
    border: .5px solid teal;

`
const AddRight = styled.button`
    padding: 4% 6%;
    border-radius: 12px;
    border: 2px solid teal;
    cursor: pointer;
    &:hover{
        background-color: #f8f4f4;
    }
`

function ProductPage() {
  return (
      <>
         <Nav/>
            <Container>
            <Left></Left>
            <Right>
                <Text>Denim Jeans</Text>
                <Passage>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quaerat cupiditate ipsum sint sunt aspernatur impedit placeat rerum adipisci iusto recusandae aliquam fugit consectetur accusantium assumenda sit obcaecati, odit nisi quisquam eaque necessitatibus, sed sequi delectus enim? Obcaecati, iure mollitia.</Passage>
                <Number>$50</Number>
                <Color>
                    <Coloribs>
                        <p>color:</p>
                        <Circle color='skyblue'></Circle>
                        <Circle color='black'></Circle>
                        <Circle color='red'></Circle>
                        <Circle color='maroon'></Circle>
                    </Coloribs>
                    <Size>
                        <p>Size:</p>
                    <select name="" id="">
                        <option value="">-Size-</option>
                        <option value="">XS</option>
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">XL</option>
                    </select>
                    </Size>
                </Color>

                <Add>
                    <AddLeft>
                        <Minus>-</Minus>
                        <Button>1</Button>
                        <Plus>+</Plus>
                    </AddLeft>

                    <AddRight>
                        ADD TO CART
                    </AddRight>
                    
                </Add>
            </Right>
            
        </Container>
      </>
  )
}

export default ProductPage