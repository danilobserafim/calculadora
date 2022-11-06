import styled from "styled-components";

const Button = styled.button`
    height: 48px;
    width: 48px;
    font-size: large;
    font-weight: 800;
    cursor: pointer;
    background-color: blue;
    border: none;
    border-radius: 10px;
    margin: 4px;
    color: whitesmoke;
    &:active{
        background-color: black;
    }
`

export default Button