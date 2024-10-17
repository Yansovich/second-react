import Button from '../Button/Button'
import './style.css'

export function ListItem (props) {

    const {label} = props
   
    return  <li className="result__list-item">
    <h2 className="title">{label}</h2>
    <Button title='Remove'/>
    <div className="line"></div>             
</li>
}