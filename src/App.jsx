import {useState} from 'react'
import Button from "./components/Button/Button";

function App () {

    const [initialState, setInitialState] = useState(0)
    console.log('render App');

    return (
    <>
    {/* <Button title = 'Кнопка 1' />
    <Button title = 'Кнопка 2' isDanger m/>
    <Button title = 'Кнопка 3' isPrimary l/> */}

    <Button title='+' onClick={() => setInitialState((prevState) => prevState + 1)}/>
    <h1>{initialState}</h1>
    <Button title='-' onClick={() => setInitialState((prevState) => prevState - 1)}/>
    </>
    )
} 

export default App