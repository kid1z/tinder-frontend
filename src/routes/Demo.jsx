import { forwardRef, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type'

import '../App.css';

gsap.registerPlugin(SplitType);

const Logo = forwardRef(function Logo(props, ref) {
  const { name, logo, handleHoverLogo, handleLeaveLogo } = props;

  const renderLogo = (image) => {
    return <img className='logo w-[50px] h-[50px] z-20' src={image} alt={`${image}-logo`}/>
  }

  return (
    <div ref={ref} onMouseEnter={handleHoverLogo} onMouseLeave={handleLeaveLogo} className="w-[120px] h-[70px] flex items-center justify-between">
      {renderLogo(logo)}
      <p className='platform text-white text-2xl'>{name}</p>
    </div>
  )
})

function Demo() {
  const app = useRef();
  const logoRef = useRef(null);

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

    logoRef.current = gsap.to('.platform', {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power4.out',
      stagger: { amount: 0.1 },
      paused: true
    })

    return () => ctx.revert();

  }, [])

  const handleHoverLogo = () => {
    logoRef.current.play();
  }

  const handleLeaveLogo = () => {
    logoRef.current.reverse();
  }

  const images = [
    { logo: '/images/React-icon.svg', name: 'React' },
    { logo: '/images/Ruby_logo.svg', name: 'Ruby' },
    { logo: '/images/gsap-greensock.svg', name: 'Gsap' },
    { logo: '/images/Tailwind_CSS_Logo.svg', name: 'Tailwind' }
  ]

  return (
    <div ref={app} className="app">
      <div className='h-[calc(100vh-80px)] overlay w-screen overflow-hidden flex flex-wrap justify-center items-center flex-col p-2'>
        <div
          className='text-yellow-100 text sm:text-7xl xl:text-9xl text-6xl text-center'
          
        >
          Tinder...
        </div>
      </div>
      <div className="flex justify-around items-center w-full h-[80px] relative bg-gray-900 bg-opacity-60">
        {images.map(({ logo, name }, idx) => (
          <div key={`${idx}-image`}>
            <Logo
              logo={logo}
              name={name}
              ref={logoRef}
              handleHoverLogo={handleHoverLogo}
              handleLeaveLogo={handleLeaveLogo}
            />
          </div>
        ))}
        </div>
    </div>
  );
}

export default Demo;
