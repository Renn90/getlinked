import React from "react";
import illustration from "../assets/success.png";

const SuccessModal = () => {
  return (
    <div className="hidden z-[999] absolute top-0 left-0 bg-[#150e2867] z-[999] text-white h-[100%] w-[100%] flex items-center justify-center backdrop-blur-md">
      <div className="flex flex-col items-center border m-2 border-1 border-secondary-2 rounded p-8">
        <img src={illustration} alt="success" className="w-[300px]" />
        <h1 className="font-extrabold text-center">Congratulations you have successfully Registered!</h1>
        <p className="text-xs w-[70%] my-4 text-center">
          Yes, it was easy and you did it! check your mail box for next step
        </p>
        <button className="gradient px-4 py-2 w-[100%] rounded">Back</button>
      </div>
    </div>
  );
};

export default SuccessModal;
