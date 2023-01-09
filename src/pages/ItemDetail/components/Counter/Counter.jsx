import './Counter.scss';

function Counter({ onDecrease, onIncrease, quantity, stock }) {
  return (
    <div className="counter">
      <h1 className="countStart">{quantity}</h1>
      <div className="count">
        <button
          className="countOn"
          onClick={onDecrease}
          disabled={quantity <= 1}
        >
          -
        </button>
        <button
          className="countOn"
          onClick={onIncrease}
          disabled={quantity >= 10}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
