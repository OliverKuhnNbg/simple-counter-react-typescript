import React, {useState} from 'react';
import './App.scss';
import './components/counterresult/CounterResult'
import CounterResult from "./components/counterresult/CounterResult";
import CounterButton from "./components/counterbutton/CounterButton";
import CounterValueField from "./components/countervaluefield/CounterValueField";

function App() {
    const [count, setCount] = useState(0);
    const [textInputValue, setTextInputValue] = useState(1);


    const increment = () => {setCount(count + textInputValue);
        /** if you need a log or additional logic write the funcion like that */
    };
    const decrement = () => setCount(count - textInputValue);

    const handleValueChange = (newValue: number) => {
        setTextInputValue(newValue);
    };

    return (
        <div className="container-fluid mt-5">
            <CounterResult count={count}/>

            <div className="container mt-3">
                <div className="row justify-content-center">
                    <CounterButton onClick={increment} label="+"/>
                    <CounterButton onClick={decrement} label="-"/>
                </div>
            </div>

            <CounterValueField onValueChange={handleValueChange} />
        </div>
    );
}

export default App;
