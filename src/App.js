import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const weight = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>몸무게 : {weight}</p>
      <button
        onClick={() => {
          dispatch({ type: "증가" });
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
