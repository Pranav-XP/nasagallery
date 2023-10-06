"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Rocket } from "lucide-react";

const LiftOff = () => {
  let today = () => new Date().toISOString().split("T")[0];
  return (
    <Link href={`/${today()}`}>
      <Button className="w-32 flex justify-evenly font-bold border shadow-inner shadow-indigo-400 border-indigo-600 md:hover:bg-indigo-800 bg-indigo-700">
        Lift Off
        <Rocket />
      </Button>
    </Link>
  );
};

export default LiftOff;
