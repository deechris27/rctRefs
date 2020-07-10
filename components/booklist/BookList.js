import React from 'react';
import {ThemeContext} from '../../context/ThemeContext';

class BookList extends React.Component{

   state = {
       test: ""
   }

    render(){
        const {isLightTheme, light, dark} = this.context
        const theme = isLightTheme ? light : dark;
        return(
            <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
               <ul>
                   <li style={{background: theme.ui}}>Harry Potter</li>
                   <li style={{background: theme.ui}}>Perry Mason</li>
                   <li style={{background: theme.ui}}>Monk who sold his ferrari</li>
               </ul>
            </div>
        )
    }
}

BookList.contextType = ThemeContext;

export default BookList