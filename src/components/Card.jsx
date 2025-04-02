import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import gmail from '../assets/gmail-logo.png';
import linkedin from '../assets/linkedin-logo.png';
import github from '../assets/github-logo.png';
import profileImg from '../assets/profile-img.png';

const Card = () => {
  return (
    <div
      className="w-[350px] h-[550px] rounded-lg flex flex-col items-center justify-center p-8"
      style={{
        background: 'linear-gradient(135deg, rgb(210, 245, 255) 20%, #ffffff 50%, rgb(255, 220, 245) 80%)',
      }}>
      <img src={profileImg}
        alt="Profile of Sherwin Lopes"
        className="w-60 h-60 object-cover rounded-lg mb-2"
      />
      <div className="text-center">
        <h2 className="text-2xl text-black font-semibold mt-2">Hi, I'm Sherwin Lopes</h2>
        
        <h3 className="text-xl font-bold mt-2 text-gray-900 font-mono tracking-wide">
          <Typewriter
            words={['Software Developer', 'Web Developer', 'Mobile App Developer']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h3>

        <p className="text-md text-gray-500 mt-2">
          Agile in adapting, swift in learning, and rapid in problem-solving.
        </p>
        <p className="text-md font-bold text-black mt-4">Chicago, IL</p>
      </div>
      <div className="mt-6 flex items-center space-x-12">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google Profile">
          <img src={gmail} alt="Gmail Logo" className="w-8 h-8 transition-all duration-300 ease-in-out transform hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <img src={linkedin} alt="LinkedIn Logo" className="w-8 h-8 transition-all duration-300 ease-in-out transform hover:scale-110" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <img src={github} alt="GitHub Logo" className="w-8 h-8 transition-all duration-300 ease-in-out transform hover:scale-110" />
        </a>
      </div>
    </div>
  );
};

export default Card;
