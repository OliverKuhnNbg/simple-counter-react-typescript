import React, {ChangeEvent, useState} from "react";

interface CounterValueFieldProps {
    onValueChange: (newValue: number) => void
}

function CounterValueField({onValueChange}: CounterValueFieldProps) {
    const [inputValue, setInputValue] = useState('1'); // Default input value

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10) || 0; // Parse to number, default to 0
        setInputValue(event.target.value);

        /** external function from parent see interface definitions*/
        onValueChange(newValue); // Notify parent component of the new value
    };

    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="input-group mb-3">
                        <span className="input-group-text fw-bolder" id="basic-addon1">current calulation value</span>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="value"
                            aria-label="value"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterValueField;