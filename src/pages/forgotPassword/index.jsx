import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../utils/Button';
import Text from '../../utils/TextInput';
import Image from '../../utils/Image';
import '../LoginPage/style.css';
import googleIcon from '../../icons/google.png';  

const Forgotpassword = () => {
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //Sumit Logic 
  };
  const msFilter = 'rotate(-0.9deg)'; 

  return (
    <div className="flex w-full h-screen items-center md:flex overflow-hidden">
    <div className="w-[100%] h-full mt-[180px] ml-4 md:w-1/2 p-4 overflow-hidden">
      <form className="p-4 w-full ml-3 md:w-[80%] md:p-12 md:ml-[55px] md:h-[56%] pt-[20px] shadow-md h-[80%] overflow-hidden" onSubmit={handleSubmit}>
        <Text className="text-center text-[28px] pb-4">Forgotten password</Text>
        <Text className="block md:hidden text-center text-3xl pb-4">You forgot your password? Mobile Viewer!</Text>
        <Text className="hidden md:block text-center text-3xl pb-4">You forgot your password? Pc Viewer!</Text>
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

      <Button className="w-[50%] text-center ml-[75px] md:ml-[97px] mb-4 rounded-[20px]">
        <Link to='/dashboard' className='text-white hover:text-black'>Reset Password
        </Link>
        </Button>


      {/* <p className="text-gray-600 mb-4 text-center">Or With</p> */}

      {/* <div className="flex justify-between"> */}
      {/* <Button className="flex items-center bg-gray-100 border border-gray-300 hover:bg-gray-200 text-gray-700"> */}
              {/* <img src={googleIcon} alt="Google icon" className="w-5 h-5 mr-2" />  */}
            {/* </Button> */}
      {/* </div> */}
      </form>
    </div>
    <div className="hidden w-full md:w-1/2 md:block h-full">
    <Image src='/logo.png' alt='logo-image' className='absolute top-[310px] right-[456px] w-[170px]' />
      <Image src="/side-image.jpg" alt="side-image" className="w-[360rem] h-full bg-cover" />
    </div>
  </div>
  );
};

export default Forgotpassword;
