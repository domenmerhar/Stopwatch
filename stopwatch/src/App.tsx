import { useState } from "react";

function App() {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);

  return (
    <>
      <h1>Stopwatch</h1>
      <div>
        <span>{"0" + Math.floor((time / 60000) % 60)}</span>
        <span>{"0" + Math.floor((time / 1000) % 60)}</span>
        <span>{"0" + ((time / 10) % 100)}</span>
      </div>

      <div>
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button
          onClick={() => {
            setTime(0);
            setRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
