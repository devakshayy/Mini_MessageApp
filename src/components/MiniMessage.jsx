import React, { useState } from "react";
import MutipleSate from "./MutipleSate";

const MiniMessage = () => {
  
   const [to,setTo] = useState('Alice');
   const [message,setMessage] = useState('Hello');

   const handleSubmit = (e) => {
      e.preventDefault();
      setTimeout(() => {
            alert(`You Send ${message} To ${to}`);
      },2000)
   }

  return (
    <>
      <div className="min-h-screen bg-slate-800 text-white p-4">
        <h1
          className="font-bold 
                   uppercase 
                   mb-4"
        >
          This is the Mini Message app Logic section
        </h1>
        <form  onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="#">
            To:{" "}
            <select
              value={to}
              onChange={e => setTo(e.target.value)}
              className="bg-transparent 
                               border 
                               text-yellow-500 
                               font-bold"
            >
              <option value="Alice">Alice</option>
              <option value="Sarsu">Sarsu</option>
              <option value="Thankan">Thankan</option>
            </select>
          </label>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Hello..."
            className="w-[400px]
                             h-[200px] 
                             bg-gray-700 
                             p-2"
          />
          <button
            type="submit"
            className="border
                           rounded-lg 
                           w-[200px]
                           font-bold
                           "
          >
            Send
          </button>
        </form>
        <br />
        <hr />
        <br />
        <MutipleSate/>
      </div>
    </>
  );
};

export default MiniMessage;
