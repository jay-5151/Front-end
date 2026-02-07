import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Features/counter/counterSlice";
import UserForm from "./UserForm";
import Counter from "./Counter";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Redux Counter (Vite)</h2>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>

      <button
        onClick={() => dispatch(decrement())}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>

      <UserForm />
      <Counter />
    </div>
  );
}

export default App;