import styled from "styled-components";

export const Container = styled.div`
width: 60%;
height: 80%;
background-color: #303030;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
align-items: center;
overflow: auto;
border: 2px solid #ff5252;
box-shadow: 4px 4px #ff5252;
img {
    width: 32px;
}
h1, h2 {
    color: #ff5252
}
`

export const Containerzudo = styled.div`
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.75);
position: fixed;
top: 0;
`