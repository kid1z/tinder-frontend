import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type'

import './App.css';

gsap.registerPlugin(SplitType);

function App() {
  const app = useRef();

  useLayoutEffect(() => {
    const text = new SplitType('.text', { types: 'words, chars', wordClass: 'line' })
    let ctx = gsap.context(() => {
      gsap.from(text.chars, {
        opacity: 0,
        y: 150,
        duration: 2,
        ease: "power4.out",
        stagger: { amount: 0.2 },
      })
    }, app)
    
    return () => ctx.revert();
  }, [])

  const renderLogo = (image) => {
    return <img src={image} alt={`${image}-logo`}/>
  }

  const images = ['/images/React-icon.svg', '/images/Ruby_logo.svg', '/images/gsap-greensock.svg', '/images/Tailwind_CSS_Logo.svg'];

  return (
    <div ref={app}>
      <div className='h-[calc(100vh-80px)] overlay w-screen overflow-hidden bg-gray-900 flex flex-wrap justify-center items-center flex-col p-2'>
        <div className='text-pink-600 text sm:text-7xl xl:text-9xl text-6xl text-center'>
          Tinder Fake is coming soon...
        </div>
      </div>
      <div className="flex justify-around items-center w-full bg-gray-900 h-[80px]">
        {images.map((image, idx) => (
          <div key={`${idx}-image`} className="w-[50px]">
            {renderLogo(image)}
          </div>
        ))}
        </div>
    </div>
  );
}

export default App;
