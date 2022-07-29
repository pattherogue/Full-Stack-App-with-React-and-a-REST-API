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

            );
        }
    }
} 