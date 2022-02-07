import './style.css'
import { FaTrash } from 'react-icons/fa'

function Card( {transaction} ){

    return(
        <section className='sectionCards'>
            <div className='cardTransation'>
            <div className='descTransation'>
                <p className='descTransationParagraph'>{transaction.description}</p>
                <span className='valueTransaction'>R$: {transaction.value},00</span>
                <button className='buttonTrash'><FaTrash/></button>
            </div>
            <span className='typeTransation'>{transaction.type}</span>
        </div>
        </section>
        
    )
}

export default Card