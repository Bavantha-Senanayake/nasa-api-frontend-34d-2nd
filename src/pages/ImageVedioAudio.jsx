import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Component1 from '../pages/Image-Page';
import Component2 from '../pages/VideoPage';
import Component3 from '../pages/AudioPage';

const PageWithButtons = () => {
  const [activeComponent, setActiveComponent] = useState('Component1');

  const handleTabClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundImage: 'url(/assets/pexels-sheenawood-574115.jpg)' }}>
      <Navbar />
     <div className="container mx-auto my-8 "   >
        <div>
        <div className="mt-20 flex flex-col items-center text-3xl font-semibold rounded-lg text-white">EXPLORE NASA MEDIA</div>
          adadasasdawa
        </div>
        <div className="flex justify-center mb-8" >
          <div className="container mx-auto h-10 flex justify-between items-center text-lg  bg-slate-500 w-4/5 " >
            <button
              onClick={() => handleTabClick('Component1')}
              className={`btn-tab h-full w-1/3 ${activeComponent === 'Component1' ? 'text-white' : 'text-black'}`}
              style={{
                backgroundColor: activeComponent === 'Component1' ? '#083344' : '#FFFFFF',
                ':hover': {
                  backgroundColor: 'background-color: rgb(8 51 68);',
                }
              }}
            >
              Images
            </button>
            <button
              onClick={() => handleTabClick('Component2')}
              className={`btn-tab h-full w-1/3 ${activeComponent === 'Component2' ? 'text-white' : 'text-black'}`}
              style={{
                backgroundColor: activeComponent === 'Component2' ? '#083344' : '#FFFFFF',
                ':hover': {
                  backgroundColor: '#f56565',
                  
                }
              }}
            >
              Videos
            </button>
            <button
              onClick={() => handleTabClick('Component3')}
              className={`btn-tab h-full w-1/3 ${activeComponent === 'Component3' ? 'text-white' : 'text-black'}`}
              style={{
                backgroundColor: activeComponent === 'Component3' ? '#083344' : '#FFFFFF',
                ':hover': {
                  backgroundColor: '#f56565',
                }
              }}
            >
              Audio
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          {activeComponent === 'Component1' && <Component1 />}
          {activeComponent === 'Component2' && <Component2 />}
          {activeComponent === 'Component3' && <Component3 />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageWithButtons;
