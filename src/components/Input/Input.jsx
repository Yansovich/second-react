import { render } from "@testing-library/react"
import "./style.css"


export function Input () {

    return <>
     <input class="input-task" type="text" placeholder="Task to be done..."/>
    </>
}

export default Input