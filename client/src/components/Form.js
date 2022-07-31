import React from 'react';

const form = (props) => {
    const {
        cancel,
        errors,
        submit,
        submitButtonText,
        elements
    } = props;

    function handleSubmit(event) {
        event.preventDefault();
        submit();
    }

    function handleCancel(event) {
        event.preventDefault();
        cancel();
    }

    function ErrorsDisplay({ errors }) {
        let ErrorsDisplay = null;

        if (errors.length) {
            ErrorsDisplay = (
                <div>
                    <h2 className="validation--errors--label">Validation Errors</h2>
                    <div className="validation-errors">
                        <ul>
                            {errors.map((error, i) => <li key={i}>{error}</li>)}
                        </ul>        
                    </div>
                </div>
            );
        }
        return ErrorsDisplay;
    }

    return (
        <div>
            <ErrorsDisplay errors={errors} />
            <form onSubmit={handleSubmit}>
                {elements()}
                <div className="pad-bottom">
                    <button className="button" type="submit"></button>
                </div>
            </form>
        </div>
    )
} 