import React from "react";

export default function CardInputFourth({
  handleChange,
  fourth,
  handleSubmit,
}) {
  return (
    <div className="">
      <input
        type="text"
        onChange={
            ((e) => handleChange({ val: e.target.value, inputBox: "fourth" }))
          }
          onKeyPress={handleSubmit}
          maxLength={"4"}
        value={fourth}
      />
    </div>
  );
}
