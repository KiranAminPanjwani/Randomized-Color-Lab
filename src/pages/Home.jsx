import React, { useCallback, useEffect, useState } from "react";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
<<<<<<< HEAD
  const [hexcode, setHexcode] = useState([]);
  const [num, setnum] = useState(0);
  const [isWin, setIsWin] = useState();
  const [endColor, setendColor] = useState();
  const [isToastDisplayed, setIsToastDisplayed] = useState(false);

  //useeffect is a mountingstate for a component
  //it is a function who's function is under our control
  //it is dependant on array = array dependacy; iff array is null, it will run one time else according to array size
  useEffect(() => {
    setIsWin("");
    setHexcode([]);
    for (let i = 0; i < 6; i++) {
      setHexcode((hexcode) => [...hexcode, "#7a7877"]); //assign grey to all
    }
  }, []);

  const randomized_ColorCode = () => {
    setIsWin("");
    setHexcode([]);
    setIsToastDisplayed(true);
    for (var i = 0; i < 6; i++) {
      setHexcode((hexcode) => [
        ...hexcode,
        `#${Math.floor(Math.random() * 16777000).toString(16)}`,
      ]);
      //here hexcode is acting as previous state for new array. everytime new array is generated and replaces the old one.
      //new random value s generated and array is appended.
=======
  const numberOfColors = 6;
  const defaultHexCodeArray = new Array(numberOfColors).fill("#7a7877");
  const [hexcode, setHexcode] = useState(defaultHexCodeArray);
  const [num, setnum] = useState(0);
  const [isWin, setIsWin] = useState(null);
  const [endColor, setendColor] = useState("");

  const resetRandomised = useCallback(() => {
    const newArray = new Array(numberOfColors);
    for (let idx = 0; idx < hexcode.length; idx++) {
      newArray[idx] = `#${Math.floor(Math.random() * 16777000).toString(16)}`;
    }
    setHexcode(newArray);
    setnum(Math.floor(Math.random() * 6));
    setIsWin(null);
  }, [hexcode.length]);

  useEffect(() => {
    const listener = window.addEventListener("keydown", (e) => {
      if(e.key === " ") resetRandomised()
    })
    return () => {
      window.removeEventListener("keydown", listener)
>>>>>>> 0741bccd07cc5d86b280d88c815af84602909826
    }
  }, [ resetRandomised ])

<<<<<<< HEAD
    setnum(Math.floor(Math.random() * 6));
  };

  const resetColors = () => {
    setIsWin("");
    //emptying hexcode
    setHexcode([]);
    for (var i = 0; i < 6; i++) {
      setHexcode((hexcode) => [...hexcode, "#7a7877"]);
    }
=======
  const resetGame = () => {
    setIsWin(null);
    setHexcode(defaultHexCodeArray);
    setendColor("");
>>>>>>> 0741bccd07cc5d86b280d88c815af84602909826
  };

  const checkColor = (hex) => {
    if (hex === hexcode[num]) {
<<<<<<< HEAD
      setendColor(hexcode[num]);

      if (isToastDisplayed) {
        toast("You win");
        setIsWin(true);
        setIsToastDisplayed(false);
      }
      setHexcode([]);
      for (var i = 0; i < 6; i++) {
        setHexcode((hexcode) => [...hexcode, hex]);
      }
    } else {
      setIsWin(false);
      toast("You Loose");
    }
  };

  const finalColorDisplay = (endColor) => {
    navigator.clipboard.writeText(endColor);
  };

  return (
    <div className="home">
      <h1 id="headline">
        <p className="clickText">
          {isWin === ""
            ? "Click the button below & "
            : isWin
            ? "You Win"
            : "You lose"}
        </p>
        Generate New{" "}
        <span id="rgbdisplay">
          {hexcode[num] !== "#7a7877" ? hexcode[num] : "Hex"}
        </span>{" "}
        Colors
      </h1>
      <div id="stripe">
        <button
          id="btn1"
          onClick={() => {
            randomized_ColorCode();
          }}
        >
          <img
            src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-click-call-to-action-bearicons-glyph-bearicons.png"
            alt="clickme"
            id="clickimg"
          />
          Random Color
        </button>
        <p id="endbutton" onClick={() => resetColors()}>
          {isWin === true ? <button id="endbtn">end game?</button> : ""}
        </p>
      </div>
      <div id="container">
        <div className="row">
          {/* map is an array function which maps each value */}
          {hexcode.map((hex, i) => (
            <div className="row-child">
              <div
                className="square"
                key={i}
                style={{ backgroundColor: `${hex}` }}
                onClick={() => checkColor(hex)}
              >
                {/* <p><span id="color-display">{hex === "#7a7877" ? " " : hex}</span></p> */}

                <span>
                  {isWin === true ? (
                    <button
                      onClick={() => finalColorDisplay(endColor)}
=======
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
            ? "Click the button below OR Press <Spacebar> & "
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
            <div className="row-child" key={`${hex}-${i}`}>
              <div
                className="square"
                style={{ backgroundColor: `${hex}` }}
                onClick={() => checkColor(hex)}
              >
                <span>
                  {isWin && (
                    <button
                      className="btn"
                      onClick={() => copyColorToClipboard(endColor)}
>>>>>>> 0741bccd07cc5d86b280d88c815af84602909826
                      style={{
                        backgroundColor: isWin === true ? `${endColor}` : "",
                      }}
                    >
                      Copy Color
                    </button>
<<<<<<< HEAD
                  ) : (
                    " "
=======
>>>>>>> 0741bccd07cc5d86b280d88c815af84602909826
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
<<<<<<< HEAD
      <ToastContainer autoClose={800} hideProgressBar={true} />
=======
>>>>>>> 0741bccd07cc5d86b280d88c815af84602909826
    </div>
  );
};

export default Home;
