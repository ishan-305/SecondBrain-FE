"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ButtonDemo() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center items-center h-screen">
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click ME
      </Button>
      <p>{count}</p>
    </div>
  );
}
