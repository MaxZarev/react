import styles from './LoginForm.module.css';
import Input from './../Input/Input';
import Button from './../Button/Button';
import { useContext, useRef, useState } from 'react';
import UserContext from './../../context/UserContext';

export default function LoginForm() {
  const [inputValue, setInputValue] = useState('');
  const loginRef = useRef(null);

  const { userState, login, } = useContext(UserContext);
  const {isLogin} = userState;

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const onClick = () => {
    if (inputValue.trim()) {
      login(inputValue);
    }
  };

  if (isLogin) {
    return null;
  }

  return (
    <div className={styles['login-container']}>
      <Input
        placeholder={'Ваше имя'}
        value={inputValue}
        name={'loginName'}
        handleInput={handleInput}
        ref={loginRef}
      />
      <Button onClick={onClick} text="Войти в профиль" />
    </div>
  );
}
