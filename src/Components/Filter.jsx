import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
`

const Filt = styled.div`
@media (max-width:450px) {
    width: 50%;
}
width: 30%;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 5%;
select{
    @media (max-width:450px) {
        font-size: .6rem;
        width: 70%;
    }
    height: 6vh;
    width: 30%;
    font-size: 1vw;
    &:nth-child(3){
        @media (max-width:450px) {
            font-size: .5rem;
            width: 70%;
        }
        width: 15%;
    }
    option{
        box-shadow: 2px 2px 4px red;
    }
}
p{
    @media (max-width:450px) {
        font-size: .8rem;
    }
}
`

const Sort = styled.div`
    @media (max-width:450px) {
        width: 50%;
    }
    width: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5%;
    select{
        @media (max-width:450px) {
        font-size: .8rem;
    }
    height: 6vh;
    width: 30%;
    font-size: 1vw;
}
p{
    @media (max-width:450px) {
        font-size: .8rem;
    }
}
`

function Filter() {
  return (
    <Container>
        <Filt>
            <p>Filter Products:</p>
            <select name="" id="">
                <option value="">-color-</option>
                <option value="">Blue</option>
                <option value="">Yellow</option>
                <option value="">Red</option>
                <option value="">Grey</option>
                <option value="">White</option>
                <option value="">Black</option>
                <option value="">Crimson</option>
                <option value="">Maroon</option>
                <option value="">Green</option>
            </select>

            <select name="" id="">
                <option value="">-Size-</option>
                <option value="">XS</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
            </select>
        </Filt>
        <Sort>
            <p>Sort:</p>
            <select name="" id="">
                <option value="">-sort by-</option>
                <option value="">Newest</option>
                <option value="">Price (asc)</option>
                <option value="">Price (dsc)</option>
            </select>
        </Sort>
        
    </Container>
  )
}

export default Filter