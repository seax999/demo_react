import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";

const CuraHooks = () => {
  const countRef = useRef(1);
  const [refresh, setRefresh] = useState(1);
  const [refresh1, setRefresh1] = useState(1);
  const [refresh2, setRefresh2] = useState(1);
  // console.log(refresh, refresh1, refresh2, "???");
  // const getCount = useMemo(() => {
  //   // console.log(12);
  //   return countRef.current;
  // }, [countRef.current]);

  useEffect(() => {
    // let listenClick = () => {
    //   // setRefresh((refresh) => {
    //   //   console.log(refresh, "????");
    //   //   return refresh + 1;
    //   // });
    //   console.log(refresh, "??");
    //   setRefresh(refresh + 1);
    // };
    // window.addEventListener("click", listenClick);

    return () => {
      // window.removeEventListener("click", listenClick);
    };
  });

  return (
    <div>
      {refresh} &nbsp;
      <button
        onClick={() => {
          // countRef.current = countRef.current + 2;
          setRefresh(refresh + 1);
          setRefresh1(refresh1 + 1);
          setRefresh2(refresh2 + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default CuraHooks;
