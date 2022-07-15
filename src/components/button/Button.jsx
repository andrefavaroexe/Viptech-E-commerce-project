import icon from '../../images/button.png'
import './Button.css'
import { Link } from 'react-router-dom'
export function Button () {
    return (
        <Link className='line' to = "/pagina2">
        <button className='Button'><img src={icon} alt=""/>Adicionar Produto</button>
        </Link>
    )
}