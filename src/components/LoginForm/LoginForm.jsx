import styles from './LoginForm.module.css';
import Input from './../Input/Input';
import Button from './../Button/Button';
import { useRef, useState } from 'react';

export default function LoginForm({login, onLogin}) {
  const [inputValue, setInputValue] = useState('');
  const loginRef = useRef(null);
 
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const onClick = () => {
    if (inputValue.trim()){
        onLogin(inputValue);
    }
  };

  if (login) {
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
