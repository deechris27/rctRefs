import React from 'react';
import Loader from './loader.svg';

export default WrappedComponent => {
    return class withLoader extends React.Component{
        render(){
            if(!this.props.something.length){
                return <img src={Loader} alt="loading..."/>
            }else{
                return <WrappedComponent {...this.props}/>
            }
        }
    }
}