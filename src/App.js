import "./Editor.css";
import { useState, useEffect, useRef } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Button from "./components/Button";
import buttons from "./json/button.json";
import Groupinputs from "./json/groupInput.json";
import Navbar from "./components/Navbar";

function App() {
  const Buttons = JSON.parse(JSON.stringify(buttons));
  const groupinputs = JSON.parse(JSON.stringify(Groupinputs));

  const [textData, setTextData] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [z, setZ] = useState("");

  let equation = textData.toString();

  
  return (
    <div className="container">
      <div>
         <Navbar/>
      </div>
      <h1>Editor</h1>
      <textarea
        className="mathjax-editor"
        value={textData}
        onChange={(e) => {
          setTextData(e.target.value);
        }}
      ></textarea>
      <button
        className="btn-block"
        onClick={(e) => {
          setTextData("");
        }}
      >
        RESET
      </button>
      <MathJaxContext>
        <h3>
          <MathJax dynamic={true}>{equation}</MathJax>
        </h3>
       

        <br />
        <div className="input-group">
          <input
            type="text"
            name="a"
            value={a}
            onChange={(e) => {
              setA(e.target.value);
            }}
            placeholder="a"
          />
          <input
            type="text"
            name="a"
            value={b}
            onChange={(e) => {
              setB(e.target.value);
            }}
            placeholder="b"
          />
          <input
            type="text"
            name="b"
            value={c}
            onChange={(e) => {
              setC(e.target.value);
            }}
            placeholder="c"
          />
          <input
            type="text"
            name="x"
            value={x}
            onChange={(e) => {
              setX(e.target.value);
            }}
            placeholder="x"
          />
          <input
            type="text"
            name="y"
            value={y}
            onChange={(e) => {
              setY(e.target.value);
            }}
            placeholder="y"
          />
          <input
            type="text"
            name="b"
            value={z}
            onChange={(e) => {
              setZ(e.target.value);
            }}
            placeholder="z"
          />
        </div>
        <div>
          <button
            onClick={() => {
              setA("");
              setB("");
              setC("");
              setX("");
              setY("");
              setZ("");
            }}
            className="btn-block"
          >
            Clear
          </button>
        </div>

        <div className="btn-group">
          <button
            className="btn"
            onClick={(e) => {
              setTextData(textData + "\\({" + a + "}^{" + b + "}\\)");
            }}
          >
            {"\\(x^y\\)"}
          </button>

          <button
            className="btn"
            onClick={(e) => {
              setTextData(textData + "\\(\\frac{" + a + "}{" + b + "}\\)");
            }}
          >
            {"\\( \\frac{a}{b}\\)"}
          </button>

          <button
            className="btn"
            onClick={(e) => {
              setTextData(textData + "\\({" + a + "}_{" + b + "}\\)");
            }}
          >
            {"\\( a_b\\)"}
          </button>

          <button
            className="btn"
            onClick={(e) => {
              setTextData(textData + "\\( \\int_{" + a + "}^{" + b + "}\\)");
            }}
          >
            {"\\( \\int_a^b\\)"}
          </button>

          <button
            className="btn"
            onClick={(e) => {
              setTextData(textData + "\\( {" + a + "}\\times{" + b + "}\\)");
            }}
          >
            {"\\( a \\times b\\)"}
          </button>

          <button
            className="btn"
            onClick={(e) => {
              setTextData(
                textData +
                  "\\(  \\begin{bmatrix}" +
                  a +
                  "&" +
                  b +
                  " \\end{bmatrix} \\)"
              );
            }}
          >
            {"\\(  \\begin{bmatrix} a & b  \\end{bmatrix} \\)"}
          </button>

          <button
            className="btn"
            onClick={(e) => {
              setTextData(
                textData +
                  "\\(  \\begin{bmatrix}" +
                  a +
                  "&" +
                  b +
                  "\\\\" +
                  c +
                  "&" +
                  x +
                  " \\end{bmatrix} \\)"
              );
            }}
          >
            {"\\(  \\begin{bmatrix} a & b \\\\c & x \\end{bmatrix}  \\)"}
          </button>

          <button
            className="btn"
            onClick={(e) => {
              setTextData(
                textData +
                  "\\(  \\begin{bmatrix}" +
                  a +
                  "&" +
                  b +
                  "\\\\" +
                  c +
                  "&" +
                  x +
                  " \\\\" +
                  y +
                  "&" +
                  z +
                  " \\end{bmatrix} \\)"
              );
            }}
          >
            {
              "\\(  \\begin{bmatrix} a & b \\\\c & x \\\\ y &z \\end{bmatrix}  \\)"
            }
          </button>
        </div>
       
      
        {/*Greek*/}
       <h2>greek</h2>
        <div className="btn-group" id="greek">
          {buttons.map((button) => {
            if(button.type ==="greek"){
            return (
              <Button
              key={button.id}
                textData={textData}
                setTextData={setTextData}
                string={button.string}
                render={button.render}
              />
            );}
          })}
        </div>
         {/*Logical*/}
       <h2>Logical</h2>
        <div className="btn-group" id="logical">
          {buttons.map((button) => {
            if(button.type ==="logical"){
            return (
              <Button
              key={button.id}
                textData={textData}
                setTextData={setTextData}
                string={button.string}
                render={button.render}
              />
            );}
          })}
        </div>
        {/*mathematical*/}
       <h2>Mathematical</h2>
        <div className="btn-group" id="mathematical">
          {buttons.map((button) => {
            if(button.type ==="mathematical"){
            return (
              <Button
              key={button.id}
                textData={textData}
                setTextData={setTextData}
                string={button.string}
                render={button.render}
              />
            );}
          })}
        </div>
        {/*set*/}
       <h2>Set</h2>
        <div className="btn-group" id="set">
          {buttons.map((button) => {
            if(button.type ==="set"){
            return (
              <Button
              key={button.id}
                textData={textData}
                setTextData={setTextData}
                string={button.string}
                render={button.render}
              />
            );}
          })}
        </div>
        {/*Relational*/}
       <h2>Relational</h2>
        <div className="btn-group" id="relational">
          {buttons.map((button) => {
            if(button.type ==="relational"){
            return (
              <Button
              key={button.id}
                textData={textData}
                setTextData={setTextData}
                string={button.string}
                render={button.render}
              />
            );}
          })}
        </div>
        {/*shape*/}
       <h2>Shape</h2>
        <div className="btn-group" id="shape">
          {buttons.map((button) => {
            if(button.type ==="shape"){
            return (
              <Button
              key={button.id}
                textData={textData}
                setTextData={setTextData}
                string={button.string}
                render={button.render}
              />
            );}
          })}
        </div>
         {/*arrow*/}
       <h2>Arrow</h2>
        <div className="btn-group" id="arrow">
          {buttons.map((button) => {
            if(button.type ==="arrow"){
            return (
              <Button
              key={button.id}
                textData={textData}
                setTextData={setTextData}
                string={button.string}
                render={button.render}
              />
            );}
          })}
        </div>
        {/*symbol*/}
       <h2>Symbol</h2>
        <div className="btn-group" id="symbol">
          {buttons.map((button) => {
            if(button.type ==="symbol"){
            return (
              <Button
              key={button.id}
                textData={textData}
                setTextData={setTextData}
                string={button.string}
                render={button.render}
              />
            );}
          })}
        </div>
         {/*geometry*/}
       <h2>Geometry</h2>
        <div className="btn-group" id="geometry">
          {buttons.map((button) => {
            if(button.type ==="geometry"){
            return (
              <Button
              key={button.id}
                textData={textData}
                setTextData={setTextData}
                string={button.string}
                render={button.render}
              />
            );}
          })}
        </div>
         {/*Function Group*/}
       <h2>Functions</h2>
        <div className="btn-group" id="function">
          {buttons.map((button) => {
            if(button.type ==="function"){
            return (
              <Button
              key={button.id}
                textData={textData}
                setTextData={setTextData}
                string={button.string}
                render={button.render}
              />
            );}
          })}
        </div>
      </MathJaxContext>
    </div>
  );
}

export default App;
