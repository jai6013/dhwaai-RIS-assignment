import React from "react";

export default function CardItem({ item, handleDelete }) {
  return (
    <div key={item.id} className="listItem">
      <div>
        {item.first.val}-{item.second.val}-{item.third.val}-{item.fourth.val}
      </div>
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </div>
  );
}
