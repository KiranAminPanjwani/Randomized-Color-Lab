import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const numberOfColors = 6;
  const defaultHexCodeArray = new Array(numberOfColors).fill("#7a7877");
  const [hexcode, setHexcode] = useState(defaultHexCodeArray);
  const [num, setnum] = useState(0);
  const [isWin, setIsWin] = useState(null);
  const [endColor, setendColor] = useState("");

  const create_new_hex_array = () => {
    const newArray = new Array(numberOfColors);
    for (let idx = 0; idx < hexcode.length; idx++) {
      newArray[idx] = `#${Math.floor(Math.random() * 16777000).toString(16)}`;
    }
    setHexcode(newArray);
  };

  const resetRandomised = () => {
    create_new_hex_array();
    setnum(Math.floor(Math.random() * 6));
    setIsWin(null);
  };

  const resetGame = () => {
    setIsWin(null);
    setHexcode(defaultHexCodeArray);
    setendColor("");
  };

  const checkColor = (hex) => {
    if (hex === hexcode[num]) {
      const filledArray = new Array(hexcode.length).fill(hex);

      setendColor(hex);
      setIsWin(true);
      setHexcode(filledArray);
    } else {
      setIsWin(false);
    }
  };

  const copyColorToClipboard = (endColor) => {
    navigator.clipboard.writeText(endColor);
  };

  return (
    <div className="home">
      <h1 id="headline">
        <p className="clickText">
          {isWin == null
            ? "Click the button below & "
            : isWin
            ? "You Win"
            : "You lose"}
        </p>
        <p>{`Generate NEW ${
          hexcode[num] !== "#7a7877" ? hexcode[num] : "Hex"
        } Colors`}</p>
      </h1>
      <div id="stripe">
        <button id="btn1" onClick={() => resetRandomised()}>
          <img
            src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-click-call-to-action-bearicons-glyph-bearicons.png"
            alt="clickme"
            id="clickimg"
          />
          Random Color
        </button>
        <p id="endbutton" onClick={() => resetGame()}>
          {isWin && <button id="endbtn">end game?</button>}
        </p>
      </div>
      <div id="container">
        <div className="row">
          {/* map is an array function which maps each value */}
          {hexcode.map((hex, i) => (
            <div className="row-child" key={i}>
              <div
                className="square"
                style={{ backgroundColor: `${hex}` }}
                onClick={() => checkColor(hex)}
              >
                <span>
                  {isWin && (
                    <button
                      onClick={() => copyColorToClipboard(endColor)}
                      style={{
                        backgroundColor: isWin === true ? `${endColor}` : "",
                      }}
                    >
                      Copy Color
                    </button>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
