import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  const [hex, setHex] = useState("#000000");
  
  return (
    <>
      <div
        className="w-full h-screen justify-center duration-200 bg-emerald-600"
        style={{ backgroundColor: color }}
      >
        <h2 className="text-white flex justify-center shadow-2xl px-3 py-1 rounded-full font-bold text-2xl">
          Hex Code: {hex}
        </h2>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => {
                setColor("red");
                setHex("#FF0000");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("green");
                setHex("#008000");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => {
                setColor("blue");
                setHex("#0000FF");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("yellow");
                setHex("#FFFF00");
              }}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => {
                setColor("pink");
                setHex("#FFC0CB");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => {
                setColor("orange");
                setHex("#FFA500");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => {
                setColor("lavender");
                setHex("#E6E6FA");
              }}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "lavender" }}
            >
              Lavender
            </button>
            <button
              onClick={() => {
                setColor("black");
                setHex("#000000");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => {
                setColor("white");
                setHex("#FFFFFF");
              }}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => {
                setColor("brown");
                setHex("#A52A2A");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "brown" }}
            >
              Brown
            </button>
            <button
              onClick={() => {
                setColor("maroon");
                setHex("#800000");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "maroon" }}
            >
              Maroon
            </button>
            <button
              onClick={() => {
                setColor("olive");
                setHex("#808000");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => {
                setColor("gold");
                setHex("#FFD700");
              }}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "gold" }}
            >
              Gold
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
