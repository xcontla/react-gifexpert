import { useState } from "react"

export const AddCategory = ({onAddNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChangeHandle = ({ target }) => {
    console.log(target.value)
    setInputValue(target.value);
  }

  const onSubmitHandle = (event) =>{
    event.preventDefault();
    console.log(inputValue);
    if(inputValue.trim().length <= 1) return;
    
    onAddNewCategory(inputValue.trim())
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmitHandle}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChangeHandle} 
        />
    </form>
  )
}
