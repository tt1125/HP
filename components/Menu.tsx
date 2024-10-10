import { useState } from "react";

export default function Menu() {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`z-50 mx-12 w-16 h-16 rounded-full border text-center flex justify-center items-center ${active ? " border-white text-white" : "border-black "}  hover:cursor-pointer`}
    >
      <button
        className="text-4xl text-center z-40"
        onClick={() => {
          setActive(!active);
        }}
      >
        {active ? "X" : "≡"}
      </button>
      {active ? (
        <div className="z-30 absolute botton-full right-full">
          <p className="text-black">hello</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
