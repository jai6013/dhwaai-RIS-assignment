import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import CardInputFirst from "./CardInputFirst";
import CardInputFourth from "./CardInputFourth";
import CardInputSecond from "./CardInputSecond";
import CardInputThird from "./CardInputThird";
import CardItem from "./CardItem";

export default function Card() {
  const [cardList, setCardList] = useState([]);
  const [cardVal, setCardVal] = useState({});
  const [digit, setDigits] = useState({});

  const handleChange = (value) => {
    if (value.val.length === 4) {
      if (value.inputBox === "first") {
        cardVal.first = value;
      } else if (value.inputBox === "second") {
        cardVal.second = value;
      }
      if (value.inputBox === "third") {
        cardVal.third = value;
      }
      if (value.inputBox === "fourth") {
        cardVal.fourth = value;
      }
    }
    if (cardVal.first && cardVal.second && cardVal.third && cardVal.fourth) {
      let newCard = { ...cardVal, id: uuid() };
      setCardVal(newCard);
    }
  };

  const pasteProblem = (val) => {
    if (val.length === 16) {
      let digits = {};
      let first = "",
        second = "",
        third = "",
        fourth = "";
      for (let i = 0; i < val.length; i++) {
        if (i < 4) {
          first += val[i];
        } else if (i >= 4 && i < 8) {
          second += val[i];
        } else if (i >= 8 && i < 12) {
          third += val[i];
        } else {
          fourth += val[i];
        }
      }
      digits.first = first;
      digits.second = second;
      digits.third = third;
      digits.fourth = fourth;

      setDigits(digits);
      let newCard = {
        id: uuid(),
        first: { val: digits.first, inputBox: "first" },
        second: { val: digits.second, inputBox: "second" },
        third: { val: digits.third, inputBox: "third" },
        fourth: { val: digits.fourth, inputBox: "fourth" },
      };
      setCardVal(newCard);
    }
    return;
  };
  const handlePaste = (e) => {
    if (e.key === "Control") {
      navigator.clipboard.readText().then((res) => {
        pasteProblem(res);
      });
    }
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      if (cardList.some((item) => item.id === cardVal.id)) return;
      for (let i = 0; i < cardList.length; i++) {
        if (
          cardList[i].first.val === cardVal.first.val &&
          cardList[i].second.val === cardVal.second.val &&
          cardList[i].third.val === cardVal.third.val &&
          cardList[i].fourth.val === cardVal.fourth.val
        ) {
          return;
        }
      }
      setCardList([cardVal, ...cardList]);
    }
  };

  const handleDelete = (id) => {
    let newCardList = cardList.filter((item) => item.id !== id);
    setCardList(newCardList);
  };

  // 1234432212234322
  return (
    <>
      <div className="main">
        <div>Card </div>
        <CardInputFirst
          first={digit.first}
          handleSubmit={handleSubmit}
          handlePaste={handlePaste}
          handleChange={handleChange}
        />
        <CardInputSecond
          second={digit.second}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        <CardInputThird
          third={digit.third}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        <CardInputFourth
          fourth={digit.fourth}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        <br />
      </div>
      <div className="list">
        {cardList &&
          cardList.map((item) => (
            <CardItem key={item.id} item={item} handleDelete={handleDelete} />
          ))}
      </div>
    </>
  );
}
