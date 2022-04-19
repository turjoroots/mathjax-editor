import React from "react";

const GroupInput = ({
  textData,
  setTextData,
  setA,
  setB,
  a,
  b,
  part1,
  part2,
  part3,
  string,
}) => {
  return (
    <>
      <div>
        <input
          type="text"
          name="a"
          value={a}
          onChange={(e) => {
            setA(e.target.value);
          }}
        />
        <input
          type="text"
          name="b"
          value={b}
          onChange={(e) => {
            setB(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            setTextData(textData + part1 + a + part2 + b + part3);
          }}
        >
          {string}
        </button>
      </div>
    </>
  );
};

export default GroupInput;
