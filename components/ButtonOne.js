import React from 'react';
import withStyles from '../hoc/withStyles';

const Button = (props)=>{
   return <button style={props.styles}>Hello Deeps</button>
}

export default withStyles(Button);