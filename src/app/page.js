"use client";

import { useEffect, useRef } from "react";
import FlowOne from "./componenets/FlowOne";

export default function Home() {

  return (
    <div>
      <audio autoPlay loop>
        <source src="birthday2.mp3" type="audio/mpeg" />
      </audio>
      <FlowOne />
    </div>
  );
}