import './style.css'

function TotalMoney({listTransactions}){
return(
    <div className='MoneyWrapper'>
        <div className='Saldo'>
            <p className='MoneyTitle3'>Saldo:</p>
            <p className='CardValor MoneyTitle4'>
                {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(
                listTransactions.reduce((prev, curr)=> prev+curr.value, 0))}
            </p>
        </div>
        <p className='MoneyBody'>Esse é o valor disponível em sua conta</p>
    </div>
)
}

export default TotalMoney