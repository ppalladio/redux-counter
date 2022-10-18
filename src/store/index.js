import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const init = { counter: 0, showCounter: true };
//@ redux toolkits                                                    :
const counterSlice = createSlice({
    name: 'counter',
    initialState: init,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

//: store all the dispatch functions in one payload object
const store = configureStore({
    reducer: counterSlice.reducer,
});

// const counterReducer = (state = init , action) => {
//     //'more than one state
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter:state.showCounter
//         };
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter:state.showCounter

//         };
//     }

//     if (action.type === 'increase') {
//         return{
//             counter: state.counter + action.value,
//             showCounter:state.showCounter
//         }

//     }
//     if (action.type === 'toggle') {
//        return{ counter:state.counter,
//         showCounter:!state.showCounter
//         }
//     }
//     return state;
// // };

// const store = createStore(counterReducer); //. no need to add redux.

export const counterActions = counterSlice.actions;
export default store;
