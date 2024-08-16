"use client";

import * as animationData from "@/public/not-found.json";
import Lottie from "react-lottie";

const NotFoundAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="max-w-md m-auto pt-10">
      <Lottie options={defaultOptions} isClickToPauseDisabled />
    </div>
  );
};

export default NotFoundAnimation;
