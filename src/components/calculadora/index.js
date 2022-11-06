import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Input from '../Input'


const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 auto;
  background: black;
  padding: 32px 16px;
`
const LineButtons = styled.div`
    display: flex;
    justify-content: space-around;
`
const Title = styled.h1`
color: aliceblue;
font-family: sans-serif;
`



export default function Calculadora() {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [operacao, setOperacao] = useState('')
    
    const [result, setResult] = useState(0)

  return (
      <Container>
            <Title>{result}</Title>

            <Input value={(num1||num2) && num2 + operacao + num1} placeholder="0" />
            <div>
                <LineButtons>
                    <Button onClick={()=> setNum1(num1 + '7')}>7</Button>
                    <Button onClick={()=> setNum1(num1 + '8')}>8</Button>
                    <Button onClick={()=> setNum1(num1 + '9')}>9</Button>
                    <Button onClick={()=> {
                        if (operacao === '') {
                            num1!==''&& setOperacao('+')
                            num1!==''&& setNum2(num1)
                            setNum1('')
                        }
                }}>+</Button>
                </LineButtons>
                <LineButtons>
                    <Button onClick={()=> setNum1(num1 + '4')}>4</Button>
                    <Button onClick={()=> setNum1(num1 + '5')}>5</Button>
                    <Button onClick={()=> setNum1(num1 + '6')}>6</Button>
                    <Button onClick={()=> {
                        if (operacao === '') {
                            num1!==''&& setOperacao('-')
                            num1!==''&& setNum2(num1)
                            setNum1('')
                        }
                }}>-</Button>
                </LineButtons>
                <LineButtons>
                    <Button onClick={()=> setNum1(num1 + '1')}>1</Button>
                    <Button onClick={()=> setNum1(num1 + '2')}>2</Button>
                    <Button onClick={()=> setNum1(num1 + '3')}>3</Button>
                    <Button onClick={()=> {
                        if (operacao === '') {
                            num1!==''&& setOperacao('*')
                            num1!==''&& setNum2(num1)
                            setNum1('')
                        }
                }}>*</Button>
                </LineButtons>
                <LineButtons>
                    <Button onClick={()=>{
                        setNum1('') 
                        setNum2('')
                        setOperacao('')
                        setResult(0)
                        }}>C</Button>
                    <Button onClick={()=>setNum1(num1 + '0')}>0</Button>
                    <Button onClick={()=>Calcular(num1, num2, operacao)}>=</Button>
                    <Button onClick={()=> {
                        if (operacao==='') {
                            num1!==''&& setOperacao('/')
                            num1!==''&& setNum2(num1)
                            setNum1('')
                            
                        }
                }}>/</Button>
                </LineButtons>

                     
        </div>
</Container>
  )

  function Calcular(num1, num2, operacao) {
    switch (operacao) {
        case '+':
            setResult(Number.parseInt(num1) + Number.parseInt(num2))
            break;
        case '-':
            setResult(Number.parseInt(num2) - Number.parseInt(num1))
            break;
        case '*':
            setResult(Number.parseInt(num1) * Number.parseInt(num2))
            break;
        case '/':
            setResult(Number.parseInt(num2) / Number.parseInt(num1))
            break;
        default:
            break;
    }
    setNum1('')
    setNum2('')
    setOperacao('')
    
}
}
