import { Square } from "./Square";
import "./squares.css";

export function Squares() {
  return (
    <div className='page'>
      <div className='square-container'>
        {Array.from(Array(4).keys()).map((square) => (
          <Square />
        ))}
      </div>
    </div>
  );
}
