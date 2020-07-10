import React from 'react';

const withAge = WrappedComponent => props => {
    const generatedAge = Math.ceil(Math.random() * 100);
    return <WrappedComponent age={generatedAge} {...props} />
};

export default withAge;