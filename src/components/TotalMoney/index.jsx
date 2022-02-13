import './style.css'

function TotalMoney({listTransiction}){
    return(
        <div className='divTotalMoney'>
            <p className='totalValorParagraph'>Valor total: </p>
            <span className='valueSpan'>R$ {listTransiction.reduce((acc, cur) => {
                return acc + cur.value
            }, 0)}</span>
        </div>
)}

export default TotalMoney