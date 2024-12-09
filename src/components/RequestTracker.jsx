import React, { useState } from "react";

const delay = (ms) => {
   return new Promise(resolve=> {
      setTimeout(resolve,ms);
   });
}

const RequestTracker = () => {
    const [pending, setPending] = useState(0);
    const [completed, setComplete] = useState(0);

async function handleBuy() {
       setPending(p => p + 1)
    await delay(3000) 
       setPending(p => p - 1)
       setComplete(c => c + 1)
    }

  return (
    <div className="p-4">
      <p>
        <span>???????????????</span><br />
        You’re working on an art marketplace app that lets the user submit
        multiple orders for an art item at the same time. Each time the user
        presses the “Buy” button, the “Pending” counter should increase by one.
        After three seconds, the “Pending” counter should decrease, and the
        “Completed” counter should increase. However, the “Pending” counter does
        not behave as intended. When you press “Buy”, it decreases to -1 (which
        should not be possible!). And if you click fast twice, both counters
        seem to behave unpredictably. Why does this happen? Fix both counters.
      </p>
       <h1 className="text-2xl font-bold mt-3">Pending Items : {pending} </h1>
       <h1 className="text-2xl font-bold my-3">Completed Items : {completed} </h1>
       <button
            onClick={handleBuy}
            className="border
                           rounded-lg 
                           w-[200px]
                           font-bold
                           "
          >
            Buy
          </button>
    </div>
  );
};

export default RequestTracker;
