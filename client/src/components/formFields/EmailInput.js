import React from 'react';

const EmailInput = props => {

    const formControl = "form-control";

    return (
        <div className="form-group">
            <input type="email" className={formControl} {...props} />
        </div>
    );
}

export default EmailInput;
