import React from 'react';
import withAge from '../hoc/withAge';

function Hello({name, age}){
    return <div>
        <h1>Hello {name} you are {age} years old</h1>
    </div>
}

export default withAge(Hello);