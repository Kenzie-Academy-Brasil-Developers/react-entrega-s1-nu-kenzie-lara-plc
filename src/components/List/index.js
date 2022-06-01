import './style.css'
import Card from '../Card'
import {useState} from 'react'

function List({listTransactions, setListTransactions}){

const [filtered , setFiltered] = useState(listTransactions)

function deleteTransaction(itemToRemove){
  const newList = listTransactions.filter(elem=>elem!==itemToRemove)
  setListTransactions(newList)
}

function filterCards(event){
    const newList = (event.target.innerText !== 'Todos')?(
    listTransactions.filter(elem=>elem.type===event.target.innerText)
):(listTransactions);

setFiltered(newList)
}

    return(
        <div className='ListWrapper'>
            <div className='ListHeader'>
                <p className='ListTitle3'>Resumo Financeiro</p>
                <div className='FilterWrapper'>
                    <button onClick={(e)=>filterCards(e)}>Todos</button>
                    <button onClick={(e)=>filterCards(e)}>Receita</button>
                    <button onClick={(e)=>filterCards(e)}>Despesa</button>
                </div>
            </div>
            <div className='CardWrapper'>
            {(listTransactions.length === 0)?(
                <div>
                    <p className='ListTitle2'>Você ainda não possui nenhum lançamento</p>
                    <div className='ListMockCard'>
                        <div className='ListMockDesc1'></div>
                        <div className='ListMockDesc2'></div>
                    </div>
                    <div className='ListMockCard'>
                        <div className='ListMockDesc1'></div>
                        <div className='ListMockDesc2'></div>
                    </div>
                    <div className='ListMockCard'>
                        <div className='ListMockDesc1'></div>
                        <div className='ListMockDesc2'></div>
                    </div>
                </div>
            ):(
                filtered.map((transaction,index) => <Card transaction={transaction} key={index} deleteTransaction={deleteTransaction}/>)
            )}
            </div>
        </div>

    )

}

export default List