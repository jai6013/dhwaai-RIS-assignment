import React from "react";

export default function CardInputSecond({
  handleChange,
  second,
  handleSubmit,
}) {
  return (
    <div className="">
      <input
        type="text"
        onChange={
          ((e) => handleChange({ val: e.target.value, inputBox: "second" }))
        }
        onKeyPress={handleSubmit}
        maxLength={"4"}
        value={second}
      />
    </div>
  );
}
