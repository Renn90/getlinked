import React, { useState } from "react";
import Header from "./UI/Header";

const RegisterForm = ({setSuccess}) => {
  const [teamsName, setTeamsName] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [cartegory, setCartegory] = useState("");
  const [size, setSize] = useState("");
  const [check, setCheck] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const validForm =
    teamsName !== "" &&
    phone !== "" &&
    email !== "" &&
    topic !== "" &&
    cartegory !== "" &&
    check === true &&
    size !== "";

  const fetch_url = "https://backend.getlinked.ai/hackathon/registration";
  const data = {
    "email":email,
    "phone_number":phone,
    "team_name": teamsName,
    "group_size": size,
    "project_topic":topic,
    "category": cartegory,
    "privacy_poclicy_accepted": check
  };

  //send registeration details
  const sendDetails = async (e) => {
    e.preventDefault();
    setTeamsName("");
    setphone("");
    setTopic("");
    setCartegory("");
    setSize("");
    setCheck(false);
    try {
      setLoading(true);
      const res = await fetch(fetch_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const statusCode = res.ok;
      console.log(res);
      if (statusCode) {
        setSuccess(true);
      } else {
        setError(true);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setSuccess(false);
      setLoading(false);
    }
  };

  //Get & Handle the values from each input
  const HandleTeamName = (e) => {
    setTeamsName(e.target.value);
    console.log(teamsName);
  };
  const HandlePhone = (e) => {
    setphone(e.target.value);
    console.log(phone);
  };
  const HandleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const HandleTopic = (e) => {
    setTopic(e.target.value);
    console.log(topic);
  };
  const HandleCartegory = (e) => {
    setCartegory(e.target.value);
    console.log(cartegory);
  };
  const HandleSize = (e) => {
    setSize(e.target.value);
    console.log(size);
  };

  const HandleCheck = (e) => {
    setCheck(e.target.checked);
    console.log(check);
  };

  const labelForm = "flex flex-col w-[100%]";
  const flex = "flex flex-col justify-between md:flex-row w-[100%]";
  const input =
    "bg-white/5 p-2 my-2 w-[97%] text-xs bg-transparent outline-0 border border-1 rounded";

  return (
    <form className="z-[998] text-white flex flex-col justify-between items-center md:bg-white/5 md:backdrop-blur-md md:p-10 md:items-start">
      <span className="absolute top-0 left-4 md:left-0 md:relative">
        <Header purpleTxt={"Register"} />
      </span>
      <p className="text-xs my-2">Be part of this movement!</p>
      <h1 className="text-l my-2 md:text-xl">CREATE YOUR ACCOUNT</h1>
      <div className={flex}>
        <span className={labelForm}>
          <label>Teams Name</label>
          <input
            type="text"
            placeholder="Enter the name of your group"
            className={input}
            onChange={HandleTeamName}
            value={teamsName}
          />
        </span>
        <span className={labelForm}>
          <label>Phone</label>
          <input
            type="number"
            placeholder="Enter your phone number"
            className={input}
            onChange={HandlePhone}
            value={phone}
          />
        </span>
      </div>
      <div className={flex}>
        <span className={labelForm}>
          <label>Email</label>
          <input
            type="mail"
            placeholder="Enter your email address"
            className={input}
            onChange={HandleEmail}
            value={email}
          />
        </span>
        <span className={labelForm}>
          <label>Project topic</label>
          <input
            type="text"
            placeholder="What is your group project topic"
            className={input}
            onChange={HandleTopic}
            value={topic}
          />
        </span>
      </div>
      <div className="flex justify-between w-[100%]">
        <span className={labelForm}>
          <label>Cartegory</label>
          <select className={input} onChange={HandleCartegory} value={cartegory}>
            <option value="" className="bg-primary">
              Select a Category
            </option>
            <option value="Innovation" className="bg-primary">
              Innovation
            </option>
            <option value="AI and Machine Learning" className="bg-primary">
              AI and Machine Learning
            </option>
            <option
              value="Blockchain and Cryptocurrency"
              className="bg-primary"
            >
              Web3 and Blockchain
            </option>
          </select>
        </span>
        <span className={labelForm}>
          <label>Group size</label>
          <select className={input} onChange={HandleSize} value={size}>
            <option value="" className="bg-primary">
              Select a Category
            </option>
            <option value="2" className="bg-primary">
              2
            </option>
            <option value="3" className="bg-primary">
              3
            </option>
            <option value="4" className="bg-primary">
              4
            </option>
          </select>
        </span>
      </div>
      <i className="text-xs text-secondary-2">
        Please review your registration details before submitting
      </i>
      <span className="flex my-2">
        <input
          type="checkbox"
          className="rounded mr-2 outline-0"
          onChange={HandleCheck}
        />
        <p className="text-xs">
          I agreed with the event terms and conditions and privacy policy
        </p>
      </span>
      <p className="text-[red] py-2">{error && 'Ran into an error, check input & try again'}</p>
      <button disabled={loading || !validForm ? true : false} className="gradient px-4 py-2 rounded w-[100%] disabled:opacity-10 disabled:cursor-none" onClick={sendDetails}>
      {loading && <span className="spinner"></span>}
        Register Now
      </button>
    </form>
  );
};

export default RegisterForm;
