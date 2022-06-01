import './style.css'

function Header({setIsLoggedIn}){
    return(
        <div className='HomeHeader'>
            <div className='HomeTitle'>
                <h3 className='HomeTitle2 Nu'>Nu</h3><h3 className='HomeTitle2 Black'>Kenzie</h3>
            </div>
            <button className='HomeHeadline' onClick={()=>setIsLoggedIn(false)}>Início</button>
        </div>
    )

}

export default Header