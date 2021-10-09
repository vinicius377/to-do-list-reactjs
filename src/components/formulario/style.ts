import styled from "styled-components";

export const Form=styled.form`
    padding: 8px;
    border:solid .5px  #151544;
    margin:5px 0;
    display: flex;
    align-items: center;
    input{
        background:transparent;
        flex:1;
        font-size: 18px;
        color:white;
        border:none;
        outline: none;
    }
    button{
        background:transparent;
        border:none;
        margin-right: 5px;
        cursor: pointer;
    }
`