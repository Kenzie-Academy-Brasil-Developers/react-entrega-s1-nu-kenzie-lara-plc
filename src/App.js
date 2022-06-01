import './App.css';
import LandPage from './components/LandPage';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import {useState} from 'react';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const [listTransactions, setListTransactions] = useState([{description: 'teste', value:200, type:'Receita'},{description: 'teste', value:-200, type:'Despesa'},{description: 'teste', value:200, type:'Receita'},{description: 'teste', value:-200, type:'Despesa'},{description: 'teste', value:200, type:'Receita'},{description: 'teste', value:-200, type:'Despesa'},{description: 'teste', value:200, type:'Receita'}])

  


  return (
    <div className="App">
      <header className="App-header">
      {isLoggedIn? (<Header setIsLoggedIn={setIsLoggedIn} />):null}
      </header>
        {isLoggedIn? (
        <div className='App-content'>
            <Form listTrasactions={listTransactions} setListTransactions={setListTransactions} />
            <TotalMoney listTransactions={listTransactions}/>
            <List listTransactions={listTransactions} setListTransactions={setListTransactions}/>
         </div>)
        :(<div className='App-content'>
            <LandPage setIsLoggedIn={setIsLoggedIn}/>
          </div>)}
      </div>
  );
}

export default App;
