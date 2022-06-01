import './style.css'
import {useState} from 'react'

function Form({listTrasactions, setListTransactions}){
const [description,setDescription]= useState('')
const [value, setValue] =useState('')
const [type, setType] = useState('Receita')

    return(
        <div className='FormWrapper'>
            <p className='FormBody'>Descrição</p>
            <input onChange={(e)=>setDescription(e.target.value)}></input>
            <p className='FormBody Descript'>Ex: Compra de roupas</p>
            <div className='ValorETipo'>
                <div className='Valor'>
                    <p className='FormBody'>Valor</p>
                    <input onChange={(e)=>{(type === 'Despesa')?(setValue(-Math.abs(e.target.value))):(setValue(e.target.value))}} ></input>
                </div>
                <div className='Tipo'>
                    <p className='FormBody'>Tipo de transação</p>
                    <select onChange={(e)=>setType(e.target.value)} >
                        <option>Receita</option>
                        <option>Despesa</option>
                    </select>
                </div>
               
            </div>
            <button className='Headline' onClick={()=>{setListTransactions([{description, type, value},...listTrasactions])}}>Realizar Transação</button>
        </div>
    )

}

export default Form