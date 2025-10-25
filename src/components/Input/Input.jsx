import cn from 'classnames';
import style from './Input.module.css';

export default function Input({
  placeholder,
  name,
  value,
  handleInput,
  ref,
  icon = '',
}) {
  const inputClass = cn(style.input, {
    [style['input-with-icon']]: icon,
  });
  return (
    <div className={style['input-wrapper']}>
      {icon ? <img className={style['icon']} src={icon} alt="" /> : ''}
      <input
        className={inputClass}
        placeholder={placeholder}
        type="text"
        name={name}
        value={value}
        onChange={handleInput}
        ref={ref}
      />
    </div>
  );
}


