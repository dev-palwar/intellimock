import React from "react";
import chaltaKutta from "./../assets/loader.gif";
import Image from "next/image";

const Loader = () => {
  return (
    <div>
      <Image
        src={chaltaKutta}
        height={100}
        width={100}
        alt="kutta"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default Loader;
