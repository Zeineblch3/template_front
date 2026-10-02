
function Input({label, type, name, placeholder}) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} placeholder={placeholder}></input>
    </div>
  )
}

export default Input
