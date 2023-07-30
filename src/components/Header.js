import React, { useState } from 'react';
import logo from '../img/kivi_logo.png';
import Slider from './Slider';

const Header = ({ login }) => {

  return (
    <div>
      <div className="head">
        <div className="logo">
          <img src={logo} alt="" />
          <div className="text">
            Продай, найди, купи <br />
            все что пожелаешь…
          </div>
        </div>
        {/* <div className="links">
          <a href="#">Объявления</a>
          <a href="#">Магазины</a>
          <a href="#">Для бизнеса</a>
          <a href="#">Помощь</a>
        </div> */}
        <div className="lan-sel">
          <h3>Рус</h3> <h3>|</h3> <h3>O'z</h3>
        </div>
        <div className="login">
          {!login ? (
            <>
              <a href='#'>Регистрация</a> <p>|</p> <a href="#">Вход</a>
            </>
          ) : (
            <>
              Hello
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
