import { useState } from 'react';

type CounterProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter = ({count, setCount}: CounterProps) => {
    return (
        <div>
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}



export default Counter;