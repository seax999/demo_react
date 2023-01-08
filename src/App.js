import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import moment from "moment";

function App() {
  const [count, setCount] = useState(1);
  // const [timeLeft, setTimeLeft] = useState(0);
  const timeLeft = useRef(0);
  const [refresh, setRefresh] = useState(1);
  // const

  useEffect(() => {
    // 请求剩下时间
    const TIME = 22;
    timeLeft.current = TIME;
    let times = setInterval(() => {
      timeLeft.current = timeLeft.current - 1;
      setRefresh((refresh) => refresh + 1);
      if (timeLeft.current === 0) {
        clearInterval(times);
      }
    }, 1000);
    return () => {
      clearInterval(times);
    };
  }, []);

  const getSquare = useCallback((value) => {
    /**do something*/
    return value * value;
  }, []);

  const getTime = useMemo(() => {
    const currentTime = moment.duration(timeLeft.current, "s");
    const h = currentTime.hours();
    const m = currentTime.minutes();
    const s = currentTime.seconds();
    return moment().set({ h, m, s }).format("HH:mm:ss");
  }, [timeLeft.current]);

  return (
    <div className="App">
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
      <p>{getTime}</p>
    </div>
  );
}

export default App;
