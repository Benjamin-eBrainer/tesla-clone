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
import { selectCars } from '../backend/cars/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="Tesla" />
      </a>
      <Menu>
        {
          cars && cars.map((car, index) => (
            <a key={index} href="#">{car}</a>
          ))
        }
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
        {
          cars && cars.map((car, index) => (
            <li key={index}><a href="#">{car}</a></li>
          ))
        }
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadaster</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header
