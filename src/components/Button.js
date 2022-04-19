import React from "react";

const Button = ({textData,setTextData,string,render}) => {
  return (
    <>
      <button
      className="btn2"
        onClick={(e) => {
          setTextData(textData +render );
          document.querySelector(".mathjax-editor").scrollIntoView({behavior: 'smooth'})
        }}
      >
        {string}
      </button> 
    </>
  );
};

export default Button;
