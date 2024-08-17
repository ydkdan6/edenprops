import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../utils/Button';
import Text from '../../utils/TextInput';
import Image from '../../utils/Image';
import './style.css';
import googleIcon from '../../icons/google.png';  

const LoginForm = () => {
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //Sumit Logic 
  };
  const msFilter = 'rotate(-0.9deg)'; 

  return (
    <div className="flex w-full h-screen items-center md:flex overflow-hidden">
    <div className="w-[100%] h-full mt-[150px] ml-4 md:w-1/2 p-4">
      <form className="p-4 w-[100%] ml-1 md:w-[80%] md:p-12 md:ml-[55px] md:h-[86%] pt-[20px] shadow-md h-[80%]" onSubmit={handleSubmit}>
        <Text className="text-center text-[28px] pb-4">Login</Text>
        <Text className="block md:hidden text-center text-3xl pb-4">Welcome to Eden, Mobile Viewer!</Text>
        <Text className="hidden md:block text-center text-3xl pb-4">Welcome to Eden, Pc Viewer!</Text>
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="mb-2 text-gray-700">Phone Number:</label>
        <div className="flex items-center border border-gray-300 rounded-lg">
        <svg
        className='pl-1'
  xmlns="http://www.w3.org/2000/svg" 
  width="24" 
  height="24" 
  viewBox="0 0 24 24" 
  style={{ 
    fill: 'rgba(0, 0, 0, 0.1)', 
    transform: msFilter 
  }}
>
  <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z">
  </path>
</svg>
          <input
            type="tel"
            id="number"
            className="input flex-1 px-4 py-2 rounded-lg border-none outline-none"
            placeholder="Enter Tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex flex-col mb-4">
        <label htmlFor="password" className="mb-2 text-gray-700">Enter Password:</label>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <svg className="ml-2 pl-1" height="20" viewBox="-64 0 512 512" width="20" fill='rgba(0,0,0,0.1)' xmlns="http://www.w3.org/2000/svg">
            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
          </svg>
          <input
            type="password"
            id="password"
            className="input flex-1 px-4 py-2 rounded-lg border-none outline-none"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <svg className="ml-2 pr-2" viewBox="0 0 576 512" height="16" fill='rgba(0,0,0, 0.8)' xmlns="http://www.w3.org/2000/svg">
            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>
          </svg>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-gray-700">Remember me</label>
        </div>
        <span className="text-blue-500 cursor-pointer">
          <Link to='/forgotpassword'>
          forgotten password
        </Link>
        </span>
      </div>

      <Button className="w-[50%] text-center ml-[75px] md:ml-[97px] mb-4 rounded-[20px]">
        <Link to='/dashboard' className='text-white hover:text-black'>Sign In
        </Link>
        </Button>

      <Text className="text-center pt-12 text-gray-600 mb-4">Don't have an account? <Link to='/register' className="text-blue-500 cursor-pointer">Sign Up</Link></Text>

      {/* <p className="text-gray-600 mb-4 text-center">Or With</p> */}

      {/* <div className="flex justify-between"> */}
      {/* <Button className="flex items-center bg-gray-100 border border-gray-300 hover:bg-gray-200 text-gray-700"> */}
              {/* <img src={googleIcon} alt="Google icon" className="w-5 h-5 mr-2" />  */}
            {/* </Button> */}
      {/* </div> */}
      </form>
    </div>
    <div className="hidden w-full md:w-1/2 md:block h-full">
      <Image src="/side-image.jpg" alt="side-image" className="w-[360rem] h-full bg-cover" />
    </div>
  </div>
  );
};

export default LoginForm;
