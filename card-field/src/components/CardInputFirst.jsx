import React from "react";

export default function CardInputFirst({ handleChange,handleSubmit,first, handlePaste }) {
  return (
    <div className="">
      <input
        type="text"
        onKeyUp={handlePaste}
        onChange={
            ((e) => handleChange({ val: e.target.value, inputBox: "first" }))
          }
        onKeyPress={handleSubmit}
        value={first}
        maxLength={"4"}
      />
    </div>
  );
}
