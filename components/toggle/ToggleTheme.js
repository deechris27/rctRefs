import React from 'react';
import { ThemeContext } from '../../context/ThemeContext';

class ToggleTheme extends React.Component{
    render(){
        const {toggleTheme} = this.context;
        return(
           <button onClick={toggleTheme}>Toggle Theme</button>
        )
    }
}

ToggleTheme.contextType = ThemeContext;

export default ToggleTheme