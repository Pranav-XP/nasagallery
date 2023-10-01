"use client";
import React from "react";
import { Button } from "./ui/button";
import { redirect, useRouter } from "next/navigation";
import { Rocket } from "lucide-react";

const LiftOff = () => {
  const today = () => {
    let now = new Date();
    return now.toISOString().split("T")[0];
  };
  const handleOnClick = () => {
    return redirect(`/${today()}`);
  };
  return (
    <Button
      onClick={() => handleOnClick}
      className="w-32 flex justify-evenly font-bold hover:bg-violet-600 bg-violet-500"
    >
      Lift Off
      <Rocket />
    </Button>
  );
};

export default LiftOff;
