import React from 'react';
import Hello from './components/Hello';
import withAge from './hoc/withAge';
import withStyles from './hoc/withStyles';
import ButtonOne from './components/ButtonOne';
import ClassBased from './components/ClassBased';
import Navbar from './components/navbar/Navbar';
import BookList from './components/booklist/BookList';
import ThemeContextProvider from './context/ThemeContext';
import ToggleTheme from './components/toggle/ToggleTheme';

const HocHello = withAge(Hello);
const HocStyles = withStyles(ButtonOne);

function App(){
   return<div className="App">
       <h1>Age is randomly generated!</h1>
       <HocHello name={'fui'} />
       <Hello name={'Sedan'}/>
       <br />
       <ButtonOne />
       <HocStyles disable/>
       <ClassBased something={0} />
       <br />
       <ThemeContextProvider>
            <Navbar />
            <BookList />
            <ToggleTheme />
       </ThemeContextProvider>
   </div>
}

export default App;