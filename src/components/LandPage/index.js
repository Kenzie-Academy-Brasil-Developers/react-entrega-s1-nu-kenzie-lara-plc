import './style.css';
import {IoMdCard} from 'react-icons/io';

function LandPage({setIsLoggedIn}){
return(
    <div className='LandBody'>
        <div className='LandContent'>
            <div className='LandText'>
                <div className='Title'>
                    <h3 className='Title2 Nu'>Nu</h3><h3 className='Title2'>Kenzie</h3>
                </div>
                <h2 className='Title1'>Centralize o controle das suas finanças</h2>
                <p className='Body'>de forma rápida e segura</p>
                <button className='Headline' onClick={()=>{setIsLoggedIn(true)}}>Iniciar</button>
            </div>
            <div className='LandSide'>
                <div className='Circle A1'>
                    <div className='Circle A2'>
                        <div className='Circle A3'>
                            <div className='MockPage'>
                                <div className='Buttons'>
                                    <div id='Red'></div>
                                    <div id='Green'></div>
                                    <div id='Grey'></div>
                                </div>
                                <div className='MockListItem'></div>
                                <div className='MockListItem'></div>
                                <div className='MockListItem'></div>
                                <div className='MockListItem'></div>
                                <div className='MockListItem'></div>
                                <div className='MockListItem'></div>
                            </div>
                            <div className='MockCardExpense'>
                                <div className='TaskIcon' id='Expense'>
                                        <IoMdCard className='CardIcon'/>
                                    </div>
                                        <div className='Content'>
                                            <div className='MockDescrip3'></div>
                                            <div className='MockDescrip4'></div>
                                </div>
                            </div>
                            <div className='MockCardIncome'>
                                <div className='TaskIcon' id='Income'>
                                    <IoMdCard className='CardIcon'/>
                                </div>
                                    <div className='Content'>
                                        <div className='MockDescrip1'></div>
                                        <div className='MockDescrip2'></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

}

export default LandPage