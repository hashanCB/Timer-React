"use client";
import React, { useState } from "react";

export const Movelist = [
  {
    id: 1,
    name: "filme 1",
    age: 12,
    rate: 2.3,
    Directer: "hashan",
    info: "this is good blalb albl aaaa",
  },
  {
    id: 2,
    name: "filme 2",
    age: 13,
    rate: 6.3,
    Directer: "chanaka",
    info: "this is good blalb albl aaaa",
  },
  {
    id: 3,
    name: "filme 3",
    age: 20,
    rate: 5.3,
    Directer: "bandara",
    info: "this is good blalb albl aaaa",
  },
  {
    id: 4,
    name: "filme 4",
    age: 12,
    rate: 4.3,
    Directer: "Dehelgahamuwa",
    info: "this is good blalb albl aaaa",
  },
];
const page = () => {
  const [moves, setMoves] = useState(Movelist);
  const [filter, setFlitet] = useState([]);

  const filterhander = (data) => {
    console.log("Hi im filtet", data);
    if (data === "Age") {
      const ArrayFilter = [];
      moves.forEach((element) => {
        ArrayFilter.includes(element.age)
          ? null
          : ArrayFilter.push(element.age);
      });
      setFlitet(ArrayFilter);
    } else {
      setFlitet([]);
    }
  };

  const filtermainarray = (data) => {
    if (data) {
      const NewAlist = Movelist.filter((ele) => ele.age >= data);
      setMoves(NewAlist);
    } else {
      setMoves(Movelist);
    }
  };
  return (
    <div>
      <div className=" flex border-2 border-black">
        <h1>Flter</h1>
        <select onChange={(e) => filterhander(e.target.value)}>
          <option>Select Type</option>
          <option value="Age">Age</option>
          <option value="Rate">Rate</option>
        </select>
        {filter.length > 0 ? (
          <select onChange={(e) => filtermainarray(e.target.value)}>
            <option></option>
            {filter &&
              filter.map((ele, index) => <option key={index}>{ele}</option>)}
          </select>
        ) : null}
      </div>
      {moves.map((ele, index) => (
        <div key={index} className=" text-black">
          <h1>{ele.name}</h1>
          <h1>{ele.age}</h1>
        </div>
      ))}
    </div>
  );
};

export default page;
