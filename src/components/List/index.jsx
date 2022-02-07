import './style.css'
import Card from '../Card'


function List({ listTransiction }){

    return(
        <section className='sectionCards'>
             {listTransiction.map((transaction, index) => <Card transaction={transaction} key={index}/>)}
        </section>
        )
    
}

export default List