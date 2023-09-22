import React from "react";
import register from "../assets/register.png";
import RegisterForm from "../components/RegisterForm";
import PageFlaire from "../components/UI/PageFlaire";
import SuccessModal from "../components/SuccessModal";


const Register = () => {
  return (
    <div className="absolute top-0 left-0 bg-primary flex flex-col justify-center p-4 w-[100%]  items-center md:static md:flex-row z-[999]">
      <SuccessModal />
      <div className="w-[70%] mt-4 md:w-[40%]">
        <img src={register} alt="reg" className="mx-auto w-[300px] md:w-[100%]"/>
      </div>
      <RegisterForm />
        {/*flair and stars*/}
      <PageFlaire />
    </div>
  );
};

export default Register;
