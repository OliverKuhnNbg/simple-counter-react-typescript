import React from "react";

interface CounterResultProps {
    count?: number
}

function CounterResult({count}: CounterResultProps) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-3 text-center">{count}</div>
            </div>
        </div>
    );
}

export default CounterResult;