"use client";

import { useEffect, useRef } from "react";
import FlowOne from "./componenets/FlowOne";

export default function Home() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }
  }, []);

  return (
    <div>
      <audio ref={audioRef} autoPlay loop>
        <source src="/birthday2.mp3" type="audio/mpeg" />
      </audio>
      <FlowOne />
    </div>
  );
}