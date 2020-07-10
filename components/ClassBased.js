import React from 'react';
import withLoader from '../hoc/withLoader';
import PropTypes from 'prop-types';

class ClassBased extends React.Component{

    render(){
        return(
            <div>
                <h1>Loader HOC sample</h1>
            </div>
        )
    }
}

ClassBased.PropTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            email: PropTypes.string
        }).isRequired
    )
}

export default withLoader(ClassBased);