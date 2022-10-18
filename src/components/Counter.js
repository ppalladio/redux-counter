import classes from './Counter.module.css';
import { useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) =>{ return state.counter})
  //' useSelector determines which piece of data we want to extract from the store
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
