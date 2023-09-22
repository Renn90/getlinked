import React, { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const validInfo = firstName !== '' && email !== '' && message !== '';

  const fetch_url = "https://backend.getlinked.ai/hackathon/contact-form";
  const data = {
    "email": email,
    "first_name": firstName,
    "message": message,
  };

  const sendDetails = async (e) => {
    e.preventDefault();
    setFirstName('')
    setEmail('')
    setmessage('')
    try {
        setLoading(true)
        const res = await fetch(fetch_url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          const statusCode = res.ok;  
          console.log(res.ok) 
          if(statusCode){
            setSuccess(true)
          }else{
            setError(true)
          }
          setLoading(false) 
    } catch(error) {
        console.log(error)
        setError(true)
        setSuccess(false)
        setLoading(false)
    }
  };

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleMessage(e) {
    setmessage(e.target.value);
  }

  return (
    <form className="flex flex-col px-12 py-10  rounded-md mt-4 w-[100%] md:bg-white/5 md:backdrop-blur-md md:[mt-0] md:w-[40%]">
      <h2 className="font-bold text-base text-secondary-2 text-clash md:text-sm">
        Questions or need assistance?
      </h2>
      <h2 className="font-bold text-base text-secondary-2 text-clash md:text-sm">
        Let us know about it!
      </h2>
      <p className="text-xs my-2 md:hidden">
        Email us below to any question related to our event
      </p>
      <input
        type="text"
        placeholder="First Name"
        required
        className="bg-white/5 p-2 my-2 text-xs bg-transparent border border-1 outline-0 rounded"
        onChange={handleFirstName}
        value={firstName}
      />
      <input
        type="email"
        placeholder="Mail"
        required
        className="bg-white/5 p-2 my-2 text-xs bg-transparent border border-1 outline-0 rounded"
        onChange={handleEmail}
        value={email}
      />
      <input
        type="text"
        placeholder="Message"
        required ={true}
        className="bg-white/5 p-2 my-2 pb-[80px] text-xs bg-transparent border border-1 outline-0 rounded"
        onChange={handleMessage}
        value={message}
      />
      <p className="text-sm text-[red] py-1">{error && 'Error, please check fields and try again'}</p>
      <p className="text-sm text-[#2DE100] py-1">{success && 'Message sent Successfully!!'}</p>
      <span className="self-center my-2 relative" onClick={sendDetails}>
      <button disabled={loading || !validInfo ? true : false} className="spin-cont relative gradient py-2 px-8 rounded text-sm disabled:opacity-10 disabled:cursor-none">
      {loading && <span className="spinner"></span>}
         Submit
      </button>
      </span>
    </form>
  );
};

export default ContactForm;
