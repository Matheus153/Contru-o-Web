import React from 'react'; 


/*export default*/ function Header({ children }) {
    return (
        <header> 
            <h1>{children}</h1>
            
        </header>
    );//<h1>{props.children}</h1> (em headers)
}

export default Header;