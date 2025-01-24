import React from "react";

const HomePage = () => {
  const [input, setInput] = React.useState("");
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter your name..." />
      <button>Join</button>
    </div>
  );
};

export default HomePage;