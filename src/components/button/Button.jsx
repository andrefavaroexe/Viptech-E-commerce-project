import icon from '../../images/button.png'
import './Button.css'

export function Button () {
    return (
        <button className='Button'><img src={icon} alt=""/>Adicionar Produto</button>
    )
}