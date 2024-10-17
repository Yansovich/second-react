import {useState} from 'react'
import { classNames } from '../../utilis/index.tsx';
import './style.css'

// function Button (props) {

//     // const {title, isDanger} = props
//     const {title, isDanger, isPrimary, m, l, onClick} = props
//     const [counter, setCounter] = useState(0)
//     const [style, setStyle] = useState(false)
//     // let style =''
//     // console.log(props);
//     console.log('render button');

//     // const classes = isDanger ? 'btn danger' : "btn"

//     // switch (type) {
//     //     case 'isDanger' : 
//     //         style = 'btn danger' 
//     //         break
//     //     case 'isPrimary' : 
//     //         style = 'btn primary'  
//     //         break
//     //     default:
//     //         style = 'btn'
//     // }
    
//     return (<button 
//             className={classNames(
//                 'btn', 
//                 {danger: isDanger, primary: isPrimary, 'btn_m': m, 'btn_l': l, temp: style},
//             ['color-red'], 
//             )
//         } 
//             onClick={() => {
//                 onClick()
//                 setCounter((prevState) => prevState + 1)
//                 setStyle((prevState) => !prevState)
//             }}
//         >
//             {`${title} - кликнули: ${counter} раз`}

//         </button>)
// }

// export default Button


function Button (props) {

    const {title} = props
     
    return <button class="btn btn-add ">{title}</button>
}

export default Button