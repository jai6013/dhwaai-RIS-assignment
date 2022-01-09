import React from "react";

export default function CardInputThird({ handleChange, third, handleSubmit }) {
  return (
    <div className="">
      <input
        type="text"
        onChange={
            ((e) => handleChange({ val: e.target.value, inputBox: "third" }))
          }
          onKeyPress={handleSubmit}
          maxLength={"4"}
        value={third}
      />
    </div>
  );
}
