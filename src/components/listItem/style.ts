import styled from "styled-components";
type Props={
    done:boolean;
    edit:boolean;
    check:boolean;
}
export const Container=styled.div(({edit,done,check}:Props)=>`
margin-top: 10px;
font-size:18px;
.title{
        padding:8px;
        border: solid .5px #151544;
        display: flex;
        border-radius:10px ;
        align-items: center;
        box-sizing:border-box;
        border-right:${check?"solid 20px green":"none"};
    label{
    color:white;
    }
    span{
        color:white;
        margin:0 5px;
        font-weight:bold;
        font-size:25px;
        transition: .5s;
        transform:rotate(${done?"0deg":"180deg"});
        cursor:pointer;
    }
}

.description{
    overflow: hidden;
    color:white;
    margin-left: 10px;
    margin-top: 7px;
    border: solid .5px #151544;
    height:${done?"0px":"100px"};
    transition:.5s;
    display:flex;
    background:#04040F;
    div{
        display: flex;
        flex-direction:column;
        justify-content:center;
    }
   button{
    background: transparent;
    font-size:16px;
    color:white;
    display: block;
    cursor:pointer;
    border: none;
    margin:5px auto ;
   }
}
textarea{
    height: 100%;
    width: 90%;
    resize:none;
    border:none;
    background:${edit?"white":"transparent"};
    color:${edit?"black":"white"};
    font-size:20px;
    padding: 10px;
    
}


`)
   

