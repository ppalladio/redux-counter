import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => {
        return state.counter.counter;
    });
    const show = useSelector((state) => {
        return state.counter.showCounter;
    }); //' every state needs a new selector
    //' useSelector determines which piece of data we want to extract from the store
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    const increase = () => {
        // dispatch({ type: 'increase', value: 5 }); //:the name of the payload has to be the same as the name of action.xxx in redux file
        dispatch(counterActions.increase(5)); //. if we are using this , the underlying object will be {type:'xxxx'} , payload: [the value passed in]. hence, in the index.js,it needs to be action.payload}
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
