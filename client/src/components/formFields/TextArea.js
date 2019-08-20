import React from 'react';

const TextArea = props => {

    const formControl = "form-control";

    return (
        <div className="form-group">
            <textarea {...props} className={formControl} />
        </div>
    );
}

export default TextArea;
