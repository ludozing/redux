function Header({input, onChange, onSubmit}){
  return (
    <div>
      <h1>TO DO LIST</h1>
      <p>
        <input name="todoInput" value={input} onChange={onChange} />
        <button onClick={onSubmit}>+</button>
      </p>
    </div>
  )
}
export default Header;