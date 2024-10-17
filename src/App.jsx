// import {useState} from 'react'
// import Button from "./components/Button/Button";

// function App () {

//     // const [initialState, setInitialState] = useState(0)
//     // console.log('render App');

//     return (
//     <>
//     {/* <Button title = 'Кнопка 1' />
//     <Button title = 'Кнопка 2' isDanger m/>
//     <Button title = 'Кнопка 3' isPrimary l/> */}

//     {/* <Button title='+' onClick={() => setInitialState((prevState) => prevState + 1)}/>
//     <h1>{initialState}</h1>
//     <Button title='-' onClick={() => setInitialState((prevState) => prevState - 1)}/> */} 
    
    
//     </>
//     )
// } 

// export default App

import {useState} from 'react'
import { Input } from './components/Input/Input'
import Button from "./components/Button/Button";
import './globalStyle.css'
import { AddItemSection } from './components/AddItemSection/AddItemSection';
import { ListItem } from './components/ListItem/ListItem';

// const items = [<h1>'car'</h1>, <h2>'phone'</h2>, <h3>'bag'</h3>]
// const items = [<AddItemSection/>, <ListItem />, <ListItem />]
const items = [{label: 'Todo1', id: 1}, {label: 'Todo2', id: 2}, {label: 'Todo3', id: 3}]

function App () {

    const [todos, setTodos] = useState([{label: 'Todo1', id: 1}, {label: 'Todo2', id: 2}, {label: 'Todo3', id: 3}])

    const list = todos.length ? todos.map((item, index) => <ListItem key={index} label ={item.label} />) : 'элементов нет'

        return  <div className="container">
        <AddItemSection/>
        {list}
    </div>
    
}

export default App