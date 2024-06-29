import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src="/underdog.jpg"></img>
      </div>
      <h1 className="text-7xl">Frontend Blog</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          If your bored click this the count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
