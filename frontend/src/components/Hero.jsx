import React from "react";

export default function Hero() {
  return (
    <div className="h-96">
      <div className="bg-blue-700 h-72">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl text-white font-extrabold">
            Welcome to BridgePoint!
          </h1>
          <p className="text-2xl text-white font-bold">
            Where Campus Meets Community
          </p>
        </div>
      </div>
      <div className="bg-[#DDA200] h-32 w-full absolute bottom-64 rounded-xl">
        hello
      </div>
    </div>
  );
}
