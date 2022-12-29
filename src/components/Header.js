import React, {useState}  from 'react'
import styled from "styled-components"
function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
        <a>
          <img src ="/images/logo.svg"/>
        </a>
        <Menu>
          <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a>
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <CustomMenu onClick={()=>setBurgerStatus(true)}><a><img src="/images/hamburger.png"/></a></CustomMenu>
        </RightMenu>
        <BurgerNav show = {burgerStatus} >
              <img src="/images/close.png" onClick={()=>setBurgerStatus(false)}></img>
              <li><a href="#">Model X</a></li>
              <li><a href="#">Model Y</a></li>
              <li><a href="#">Model 3</a></li>
              <li><a href="#">Model S</a></li>
              <li><a href="#">Cybertruck</a></li>
              <li><a href="#">Roadster</a></li>
              <li><a href="#">Existing Inventory</a></li>
              <li><a href="#">Existing Inventory</a></li>
              <li><a href="#">Existing Inventory</a></li>
              <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding:0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;
`
const Menu = styled.div`
@media(max-width:1000px){
  display:none;
}
  display:flex;
  align-items:center;
  transform:translateX(26%);
  a{
    font-weight:600;
    text-transform:uppercase;
    padding: 0 10px;
    felx-wrap:nowrap;
  }
`

const RightMenu = styled.div`
display:felx;
align-items:center;
  a{
    font-weight:600;
    text-transform:uppercase;
    padding: 0 10px;
    margin-right:10px;
  }
`

const CustomMenu = styled.div`
  img{
    cursor:pointer;
    height:25px;
    width:25px;
  }
`

const BurgerNav = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background:white;
  width:300px;
  z-index:50;
  list-style:none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:start;
  transform:${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition:transform 0.2s;
    li{
      padding:15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
         a{
          font-weight:600;
         }
    }
    img{
      height:25px;
      width:25px;
      transform:translateX(900%);
      cursor:pointer;
    }
`