import React, { useState } from "react";
import Header from "./UI/Header";
import question from '../assets/question.webp'
import Hr from "./UI/Hr";
import TwinkleStar from "./UI/TwinkleStar";

const QandA = () => {
  const [display, setDisplay] = useState(null);

  const changeDisplay = (index) => {
    setDisplay(index === display ? null : index);
  };
  const dropDiv = "flex items-center justify-between";
  const parag = "text-sm slide-down mb-4 text-[lightgrey]";
  const hr = "border border-[1px] rounded border-secondary-2 mb-2"

  return (
    <>
    <section className="container relative mx-auto text-white flex flex-col items-center justify-between py-[30px] w-[100%] md:flex-row">
      <span className="absolute top-[5%] left-[0%] w-[15px] z-[9] md:top-[5%]">
            <TwinkleStar />
          </span>
      <div className="w-[100%] md:w-1/2">
        <span className="text-center md:text-start">
        <Header head={"Frequently Asked"} purpleTxt={"Questions"} />
        <p>
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        </span>
        <div className="my-4">
          <div className={dropDiv}>
            <h1>Can I work on a project I started before the hackathon?</h1>
            <h2 className="text-2xl font-bold cursor-pointer text-secondary-2 select-none" onClick={()=>changeDisplay(1)}>+</h2>
          </div>
          <p className={`${parag} ${display === 1 ? "slide-down" : "slide-up"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            provident excepturi odio doloremque exercitationem a dignissimos.
          </p>
          <hr className={hr}/>
          
          <div className={dropDiv}>
            <h1>What happens if I need help during the hackathon?</h1>
            <h2 className="text-2xl font-bold cursor-pointer text-secondary-2 select-none" onClick={()=>changeDisplay(2)}>+</h2>
          </div>
          <p className={`${parag} ${display === 2 ? "slide-down" : "slide-up"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, cumque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, natus recusandae?
          </p>
          <hr className={hr}/>

          <div className={dropDiv}>
            <h1>What happens if I don't have an idea for a project?</h1>
            <h2 className="text-2xl font-bold cursor-pointer text-secondary-2 select-none" onClick={()=>changeDisplay(3)}>+</h2>
          </div>
          <p className={`${parag} ${display === 3 ? "slide-down" : "slide-up"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            provident excepturi odio quaerat debitis,
            ipsum tempore temporibus consequatur inventore.
          </p>
          <hr className={hr}/>

          <div className={dropDiv}>
            <h1>Can I join a team or do I have to come with one?</h1>
            <h2 className="text-2xl font-bold cursor-pointer text-secondary-2 select-none" onClick={()=>changeDisplay(4)}>+</h2>
          </div>
          <p className={`${parag} ${display === 4 ? "slide-down" : "slide-up"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            provident labore, quaerat debitis,
            ipsum tempore temporibus consequatur inventore.
          </p>
          <hr className={hr}/>

          <div className={dropDiv}>
            <h1>What happens after the hackathon ends</h1>
            <h2 className="text-2xl font-bold cursor-pointer text-secondary-2 select-none" onClick={()=>changeDisplay(5)}>+</h2>
          </div>
          <p className={`${parag} ${display === 5 ? "slide-down" : "slide-up"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            provident excepturi odio quaerat debitis,
            ipsum tempore temporibus consequatur inventore.
          </p>
          <hr className={hr}/>

          <div className={dropDiv}>
            <h1>Can I work on a project I started before the hackathon?</h1>
            <h2 className="text-2xl font-bold cursor-pointer text-secondary-2 select-none" onClick={()=>changeDisplay(6)}>+</h2>
          </div>
          <p className={`${parag} ${display === 6 ? "slide-down" : "slide-up"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            provident excepturi odio doloremque exercitationem a dignissimos
            aperiam illum blanditiis nihil saepe minus labore.
          </p>
          <hr className={hr}/>

        </div>
        
      </div>
      <div className="w-[100%] flex justify-end md:w-1/2 relative">
        <img src={question} alt="question" className="my-6 md:my-0 md:w-[90%] md:block"/>
        <span className="absolute top-[10%] left-[45%] w-[15px] z-[9]">
            <TwinkleStar />
          </span>
        <span className="absolute bottom-[30%] left-[10%] w-[15px] z-[9]">
            <TwinkleStar />
          </span>
        <span className="absolute bottom-[50%] left-[20%] w-[15px] z-[9]">
            <TwinkleStar />
          </span>
        <span className="absolute bottom-[5%] right-[0%] w-[15px] z-[9]">
            <TwinkleStar />
          </span>
      </div>
    </section>
    <Hr />
    </>
  );
};

export default QandA;
