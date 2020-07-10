import React from 'react';

const styles = {
    default: {
        backgroundColor: 'orange',
        color: 'black',
        padding: '10px',
        cursor: 'wait'
    }, disable: {
        backgroundColor: 'gray',
        color: '#c7c6c6',
        cursor: 'not-allowed'
    }
}

const conditionalProps = props => {
    let _styles = {...styles.default};
    if(props.disable){
       _styles = {..._styles, ...styles.disable}
    }

    return {...props, styles:_styles}
};

export default WrappedComponent =>{
    return function renderWithArgs(props){
        return WrappedComponent(conditionalProps(props))
    }
}