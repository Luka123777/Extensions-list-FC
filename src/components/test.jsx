import React from "react";


function Test() {
  const [activeButton, setActiveButton] = useState("button1");

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button
        onClick={() => setActiveButton("button1")}
        style={{
          backgroundColor: activeButton === "button1" ? "orangered" : "lightgray",
          color: activeButton === "button1" ? "white" : "black",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Botón 1
      </button>

      <button
        onClick={() => setActiveButton("button2")}
        style={{
          backgroundColor: activeButton === "button2" ? "orangered" : "lightgray",
          color: activeButton === "button2" ? "white" : "black",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Botón 2
      </button>
    </div>
  );
}

export default Test;
