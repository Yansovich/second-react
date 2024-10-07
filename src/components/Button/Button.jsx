import './style.css'

function Button (props) {

    // const {title, isDanger} = props
    const {title, type} = props
    let style =''
    console.log(props);

    // const classes = isDanger ? 'btn danger' : "btn"

    switch (type) {
        case 'isDanger' : 
            style = 'btn danger' 
            break
        case 'isPrimary' : 
            style = 'btn primary'  
            break
        default:
            style = 'btn'
    }
    
    return <button className={style} 
    onClick={() =>console.log(title)}>{title}</button>
}

export default Button