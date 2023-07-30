import React, { useState } from 'react';
import phone from '../img/bigphone.png';
import axios from 'axios'; // Don't forget to include the axios import

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleLogin = async () => {
    try {
      const formData = new FormData();
      formData.append('email', emailOrPhone);
      formData.append('password', password);
      if (avatar) {
        formData.append('avatar', avatar, avatar.name);
      }

      const response = await axios.post('https://reqres.in/api/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('User created with avatar:', response.data);
    } catch (error) {
      console.error('Error creating user with avatar:', error);
    }
  };

  return (
    <div className='loginPage'>
      <div className="right">
        <div className="text">
          <h1>Ваша регистрация завершена! </h1>
          <h3>Вы успешно зарегистрированы на сайте <br /> киви и ваш пароль отправлен в виде <br /> смс на ваш телефонный номер</h3>
        </div>
        <div className="inputs">
          <label>Введите email или номер телефона</label>
          <input
            type="text"
            placeholder='99891 167 27 23'
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
          <label>Пароль</label>
          <input
            type="password"
            placeholder='***********'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Загрузить аватар</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
          />
          <button type='button' onClick={handleLogin}>
            Войти
          </button>
        </div>
        <div className="reset">
          <h2><span>или</span></h2>
          <a href="#">Восстановить ваше пароль</a>
        </div>
      </div>
      <div className="left">
        <img src={phone} alt="Phone" />
      </div>
    </div>
  );
};

export default Login;