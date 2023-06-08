import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>This is term and condition</h3>
            <p>At fast you have to register <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;