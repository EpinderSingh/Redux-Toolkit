import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className='button'
        aria-label='Increment value'
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span className='value'>Count: {count}</span>
      <button
        className='button'
        aria-label='Decrement value'
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        className='button'
        aria-label='Increment by 10'
        onClick={() => dispatch(incrementByAmount(10))}
      >
        Increment By 10
      </button>
    </div>
  );
};

export default Counter;
