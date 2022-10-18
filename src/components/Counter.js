import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => {
        return state.counter;
    });
    const show = useSelector((state) => {
        return state.showCounter;
    }); //' every state needs a new selector
    //' useSelector determines which piece of data we want to extract from the store
    const toggleCounterHandler = () => {
        dispatch({ type: 'toggle' });
    }; 

    const increment = () => {
        dispatch({ type: 'increment' });
    };
    const decrement = () => {
        dispatch({ type: 'decrement' });
    };
    const increase = () => {
        dispatch({ type: 'increase', value: 5 }); //.the name of the payload has to be the same as the name of action.xxx
    };
    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={increment}>increment</button>
                <button onClick={increase}> increase by 5</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
