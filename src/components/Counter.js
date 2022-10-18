import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => {
        return state.counter;
    });
    //' useSelector determines which piece of data we want to extract from the store
    const toggleCounterHandler = () => {};
    const increment = () => {
        dispatch({ type: 'increment' });
    };
    const decrement = () => {
        dispatch({ type: 'decrement' });
    };
    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <div>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
