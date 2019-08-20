import React from 'react';

const PasswordInput = props => {

    const formControl = "form-control";

    return (
        <div className="form-group">
            <input type="password" className={formControl} {...props} />
        </div>
    );
}

export default PasswordInput;
