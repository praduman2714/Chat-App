// Importing style 
import style from './NavBar.module.css';

// Returing the functon
function NavBar(){
    // Return the UI
    return(
        <>
            <nav className={style.navBar}>
                <div className={style.title}>
                    <h2>Chat-app</h2>
                    
                </div>
                {/* Just a dummy log-out Button */}
                <div>
                    <h2>Log-out</h2>
                </div>
            </nav> 
        </>
    )
}

export default NavBar;