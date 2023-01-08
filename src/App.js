import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import moment from "moment";
import { DemoLess, CuraHooks } from "./components";
import CountDown, { HandleWriteCountDown } from "./components/CountDown";

function App() {
  const [count, setCount] = useState(1);
  const [timeNum, setTimeNum] = useState(88);

  const getSquare = useCallback((value) => {
    /**do something*/
    return value * value;
  }, []);

  const finishHandle = useCallback(() => {
    console.log("fininsh");
  }, []);

  return (
    <div className="App">
      <CuraHooks />

      <h1>this is count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <br />
      <p>get square: {getSquare(count)}</p>
      {/* <p>{`${moment.duration(timeLeft.current, "s").hours().valueOf()}:${moment
        .duration(timeLeft.current, "s")
        .minutes("mm")}:${moment.duration(timeLeft.current, "s").seconds("s")}`}</p> */}
      <br />
      <br />
      <HandleWriteCountDown deadline={99} Finish={finishHandle} />
      <CountDown deadline={timeNum} Finish={finishHandle} />
    </div>
  );
}

export default App;
