import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [input, setInput] = React.useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    navigate(`/room/${input}`);
  };
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter your name..." />
      <button onClick={submitHandler}>Join</button>
    </div>
  );
};

export default HomePage;