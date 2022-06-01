import './style.css'
import {FaTrash} from 'react-icons/fa';

function Card({transaction, deleteTransaction}){

return(
<div className='ReactWrapper'>
{(transaction.type=== 'Receita')?(
<div className='CardGreen'>                
    <div className='CardContent'>
        <p className='CardDescription'>{transaction.description}</p>
        <p className='CardValue CardBody'>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(transaction.value)}</p>
        <p className='CardDescription CardBody'>{transaction.type}</p>
    </div>
    <FaTrash className='TrashIcon' onClick={()=>deleteTransaction(transaction)}/>
    </div>
):(
<div className='CardRed'>
    <div className='CardContent'>
        <p className='CardDescription'>{transaction.description}</p>
        <p className='CardValue CardBody'>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(Math.abs(transaction.value))}</p>
        <p className='CardDescription CardBody'>{transaction.type}</p>
    </div>
    <FaTrash className='TrashIcon' onClick={()=>deleteTransaction(transaction)} />
</div>)}
</div>
)

}

export default Card