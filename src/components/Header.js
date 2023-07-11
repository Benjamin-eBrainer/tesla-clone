import React, { useState } from 'react'
import {
  Container,
  Menu,
  RightMenu,
  CustomMenu,
  BurgerNav,
  CloseWrapper,
  CustomClose
} from '../styled components/headerStyles'

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="Tesla" />
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
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadaster</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header
