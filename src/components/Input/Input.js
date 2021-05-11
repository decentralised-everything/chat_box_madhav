import React, { useEffect } from "react";
import emojifier from "./emojify";

import "./Input.css";
const tips = ["Type a message...", "Excited? Type :upside_down: or :smile: ...", "Anonymous chats, made with love by R&M :)"];
var num = 0;

const Input = ({ setMessage, sendMessage, message }) => {
const func = event => {num = (num+1)%3; return sendMessage(event);}
var div = <textarea
      className="input rounded-full m-2 p-4 overflow-hidden h-14"
      type="text"
      placeholder={tips[num]}
      value={message}
      onChange={({target: {value}}) => setMessage(emojifier(value))}
      onKeyPress={(event) =>
        {  return event.key === "Enter" ?  func(event) : null}
      }
    />;
	useEffect(() => {
	div = <textarea
      className="input rounded-full m-2 p-4 overflow-hidden h-14"
      type="text"
      placeholder={tips[num]}
      value={message}
      onChange={({target: {value}}) => setMessage(emojifier(value))}
      onKeyPress={(event) =>
        { num = (num+1)%3; return event.key === "Enter" ? func(event) : null}
      }
    />
  }, [num]);

return(
  <form className="form bg-gray-200 h-20 rounded-xl">
    {div}
    <button
      className="sendButton rounded-full m-2 h-14"
      onClick={(e) => sendMessage(e)}
    >
      <div className="send my-auto">Send</div>
    </button>
  </form>
);
};

export default Input;
// onChange={(event) => setMessage(event.target.value)}
