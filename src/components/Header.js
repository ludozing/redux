import { useState } from 'react';

function Header({todos, onCreate}){
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText('');
  }
  return (
    <header>
      <h1>TO DO LIST</h1>
        <form onSubmit={onSubmit}>
          <p>
            <input name="todoInput" value={text} onChange={onChange} />
            <button type='submit'>+</button>
          </p>
        </form>
    </header>
  )
}
export default Header;