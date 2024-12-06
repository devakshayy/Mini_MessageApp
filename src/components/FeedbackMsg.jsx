import { useState } from "react";
// This is the Feed back message logic
const FeedbackMsg = () => {

    const [message, setMessage] = useState('');
    const [isSend, setIsSend ] = useState(false);
    

  return (
    <div className="min-h-screen w-1/2 bg-slate-700 text-white p-4">
      <h1 className="text-3xl mb-2 font-bold">
        This is the Feedback message logic
      </h1>
      <h3>Enter Your Feedback...</h3>
      {isSend?(<h1 className="text-3xl">ThankYou...</h1>):(
            <form
            onSubmit={(e) => {
                e.preventDefault();
                alert(`Sending :"${message}"`);
                setIsSend(true)
            }}
            >
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-gray-600
               p-2 flex mb-2"
                placeholder="Message..."
              ></textarea>
  
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
      )
      }
    </div>
  );
};

export default FeedbackMsg;
