import './Input.css'
export default function Input( { placeholder, name, value, handleInput, icon='' }) {
    const inputClass = icon ? "input-with-icon" : "input";
  return (
    <div className="input-wrapper">
        {icon ? <img className="icon" src={icon} alt="" /> : ''}
      <input
        className={inputClass}
        placeholder={placeholder}
        type="text"
        name={name}
        value={value}
        onChange={handleInput}
      />
    </div>
  );
}
