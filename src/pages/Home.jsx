import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {

    const [hexcode, setHexcode] = useState([]);
    const [num, setnum] = useState(0);
    const [isWin, setIsWin] = useState();
    const [endColor, setendColor] = useState();

    //useeffect is a mountingstate for a component
    //it is a function who's function is under our control
    //it is dependant on array = array dependacy; iff array is null, it will run one time else according to array size
    useEffect(() => {
        setIsWin("");
        setHexcode([]);
        for (let i = 0; i < 6; i++) {
            setHexcode(hexcode => [...hexcode, "#7a7877"]); //assign grey to all
        }
    }, [])

    const randomized_ColorCode = () => {
        setIsWin("");
        setHexcode([]);
        for (var i = 0; i < 6; i++) {
            setHexcode(hexcode => [...hexcode, `#${Math.floor(Math.random() * 16777000).toString(16)}`])
            //here hexcode is acting as previous state for new array. everytime new array is generated and replaces the old one.
            //new random value s generated and array is appended.
        }

        setnum(Math.floor(Math.random() * 6));
    }

    const resetColors = () => {
        setIsWin("");
        //emptying hexcode
        setHexcode([]);
        for (var i = 0; i < 6; i++) {
            setHexcode(hexcode => [...hexcode, "#7a7877"]);
        }
    }

    const checkColor = (hex) => {
        if (hex === hexcode[num]) {
            setendColor(hexcode[num]);

            setIsWin(true);

            setHexcode([]);
            for (var i = 0; i < 6; i++) {
                setHexcode(hexcode => [...hexcode, hex]);
            }

        } else {
            setIsWin(false);
        }
    }

    const finalColorDisplay = (endColor) => {
        navigator.clipboard.writeText(endColor);        
    }

    const colorToGuess=(hex)=>{
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        let rgb = result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
        if (!rgb) return 'Given';
        return `${Math.round(rgb.r/255*100)}% red, ${Math.round(rgb.g/255*100)}% green, and ${Math.round(rgb.b/255*100)}% blue`;
    }

    return (
        <div className="home">

            <h1 id="headline"><p className="clickText">{isWin === "" ? "Click the button below & " : (isWin ? "You Win" : "You lose")}</p>Select the <span id="rgbdisplay">{hexcode[num] !== "#7a7877" ? colorToGuess(hexcode[num]) : "Given"}</span> Color</h1>
            <div id="stripe">
                <button id="btn1" onClick={randomized_ColorCode}><img src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-click-call-to-action-bearicons-glyph-bearicons.png" alt="clickme" id="clickimg" />Random Color</button>
                <p id="endbutton" onClick={() => resetColors()}>{isWin === true ? (<button id="endbtn">end game?</button>) : ""}</p>
            </div>
            <div id="container">
                <div className="row">
                    {/* map is an array function which maps each value */}
                    {hexcode.map((hex, i) => (
                        <div className="row-child">
                            <div className="square" key={i} style={{ backgroundColor: `${hex}` }} onClick={() => checkColor(hex)}>
                                {/* <p><span id="color-display">{hex === "#7a7877" ? " " : hex}</span></p> */}
                                <span>{isWin === true ? (<button onClick={() => finalColorDisplay(endColor)} style={{backgroundColor:isWin===true? `${endColor}`:""}}>Copy Color</button>) : " "}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;