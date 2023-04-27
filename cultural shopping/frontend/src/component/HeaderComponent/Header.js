import React from 'react'

export const Header = () => {
  return (
    <header>
      <div className="logo"><a href="#">Cultural Shopping</a></div>
      <div className="menu">
        <a href="#">
          <ion-icon name="close" className="close"></ion-icon>
        </a>
  
        <ul>
          <li><a href="#" className="under">HOME</a></li>
          <li><a href="#" className="under">SHOP</a></li>
          <li><a href="#" className="under">OUR PRODUCTS</a></li>
          <li><a href="#" className="under">CONTACT US</a></li>
          <li><a href="#" className="under">ABOUT US</a></li>
        </ul>
      </div>
      <div className="search">
  
        <a href=""><input type="text" placeholder="search products" id="input"></input>
          <ion-icon className="s" name="search"></ion-icon>
        </a>
      </div>
      <div className="heading">
        <ul>
          <li><a href="#" className="under">HOME</a></li>
          <li><a href="#section2" className="under">SHOP</a></li>
          <li><a href="#section2 "className="under">OUR PRODUCTS</a></li>
          <li><a href="#footer" className="under">CONTACT US</a></li>
          <li><a href="#footer" className="under">ABOUT US</a></li>
        </ul>
      </div>
      <div className="heading1">
        <ion-icon name="menu" className="ham"></ion-icon>
      </div>
    </header>

  )
}
export default Header;