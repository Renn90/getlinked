import React from 'react';
import Header from './UI/Header';

const RegisterForm = () => {
    const labelForm = 'flex flex-col w-[100%]'
    const flex = 'flex flex-col justify-between md:flex-row w-[100%]'
    const input = "bg-white/5 p-2 my-2 w-[97%] text-xs bg-transparent outline-0 border border-1 rounded"

  return (
    <form className='z-[999] text-white flex flex-col justify-between items-center md:bg-white/5 md:backdrop-blur-md md:p-10 md:items-start'>
        <span className='absolute top-0 left-4 md:relative'>
        <Header purpleTxt={"Register"} />
        </span>
        <p className='text-xs my-2'>Be part of this movement!</p>
        <h1 className='text-l md:text-xl'>CREATE YOUR ACCOUNT</h1>
        <div className={flex}>
          <span className={labelForm}>
            <label>Teams Name</label>
            <input type="text" placeholder="Enter the name of your group"  className={input}/>
          </span>
          <span className={labelForm}>
            <label>Phone</label>
            <input type="number" placeholder="Enter your phone number"  className={input}/>
          </span>
        </div>
        <div className={flex}>
        <span className={labelForm}>
            <label>Email</label>
            <input type="mail" placeholder="Enter your email address" className={input} />
          </span>
          <span className={labelForm}>
            <label>Project topic</label>
            <input type="text" placeholder="What is your group project topic" className={input} />
          </span>
        </div>
        <div className='flex justify-between w-[100%]'>
        <span className={labelForm}>
            <label>Cartegory</label>
            <select  className={input}>
              <option value="">Select a Category</option>
              <option value="Innovation">
                Innovation
              </option>
              <option value="AI and Machine Learning">
                AI and Machine Learning
              </option>
              <option value="Blockchain and Cryptocurrency">
                Blockchain and Cryptocurrency
              </option>
            </select>
          </span>
          <span className={labelForm}>
            <label>Group size</label>
            <select  className={input}>
              <option value="">Select a Category</option>
              <option value="2">
                2
              </option>
              <option value='3'>
                3
              </option>
              <option value="4">
               4
              </option>
            </select>
          </span>
        </div>
        <i className='text-xs text-secondary-2'>Please review your registration details before submitting</i>
        <span className='flex my-2'>
        <input type="checkbox" className='rounded mr-2 outline-0'/>
        <p className='text-xs'>I agreed with the event terms and conditions  and privacy policy</p>
        </span>
        <button className='gradient px-4 py-2 rounded'>Register Now</button>
      </form>
  )
}

export default RegisterForm
