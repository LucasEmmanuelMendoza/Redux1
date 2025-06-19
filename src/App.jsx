import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './features/counter/counterSlice.js'
import './App.css'

function Counter() { 
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  )
}

export default Counter;
