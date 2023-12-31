import React, { useState } from "react";
import register from "../assets/register.webp";
import RegisterForm from "../components/RegisterForm";
import PageFlaire from "../components/UI/PageFlaire";
import SuccessModal from "../components/SuccessModal";


const Register = () => {
  const [success, setSuccess] = useState(false)
  return (
    <div className="absolute top-0 left-0 bg-primary flex flex-col justify-center p-4 w-[100%]  items-center md:static md:flex-row z-[999]">
      {success && <SuccessModal />}
      <div className="w-[70%] mt-4 md:w-[40%]">
        <img src={register} alt="reg" className="mx-auto w-[300px] md:w-[100%]"/>
      </div>
      <RegisterForm setSuccess={setSuccess}/>
        {/*flair and stars*/}
      <PageFlaire />
    </div>
  );
};

export default Register;
