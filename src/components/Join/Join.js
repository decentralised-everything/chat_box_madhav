import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";
import "../../style.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer bg-purple-600 h-screen grid items-center">
      <div className="joinInnerContainer md:w-1/4 w-1/2 h-min mx-auto">
        <h1 className="heading mb-4 w-min mx-auto text-4xl text-white">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput rounded-full w-full h-12 px-4 text-xl text-purple-600"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-6 rounded-full w-full h-12 px-4 text-xl text-purple-600"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <div className="grid items-center">
            <button
              className="button mt-8 mx-auto w-32 text-2xl rounded-full border-white border-2 py-2 bg-white text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-100"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
