"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Timber = () => {
  const { register, reset, handleSubmit } = useForm();
  const [timer, setTimer] = useState(0);
  const [display, setDisplay] = useState(0);
  const paly = useRef();
  const onSubmit = (data) => {
    const convate = data.number * 60000;
    console.log(convate);
    setTimer(convate);
  };

  useEffect(() => {
    let hanld;
    if (timer > 0) {
      hanld = setTimeout(() => {
        console.log(timer);
        setTimer(timer - 1000);
      }, 1000);

      setDisplay(secValue);
    }
    return () => clearTimeout(hanld);
  }, [timer]);

  const secValue = () => {
    const min = Math.floor(timer / 60000);
    const sce = (timer - min * 60000) / 1000;
    paly.current.play();
    return sce;
  };

  return (
    <div className=" flex  flex-col  space-y-10 items-center justify-center p-10">
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-[430px] items-center gap-3"
        >
          <h1>Enter time(min) :</h1>
          <input
            type="number"
            className=" border-b-2 border-b-gray-500 "
            {...register("number")}
          />
          <button className=" bg-green-400 rounded-xl  p-2">Set Time</button>
        </form>
      </div>

      <div className=" bg-red-300">
        <h1> Min : {Math.floor(timer / 60000)}</h1>
        <h1> Sec : {display}</h1>

        <audio ref={paly} controls>
          <source src="./sound.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default Timber;
