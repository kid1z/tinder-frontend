import { useState } from 'react'

import '../Spin-Wheel.css'

const VALUES = [
  {
    id: 1,
    value: 100,
    color: 'bg-amber-800',
  },
  {
    id: 2,
    value: 200,
    color: 'bg-red-300',
  },
  {
    id: 3,
    value: 300,
    color: 'bg-emerald-500',
  },
  {
    id: 4,
    value: 400,
    color: 'bg-violet-200',
  },
]

const MIN = 1
const MAX = 360
const TIME = 15000
const TIMES = 8

function SpinWheel() {
  const [isStart, setIsStart] = useState(false);
  const [valueWheel, setValueWheel] = useState(null);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * max);
  }

  const start = () => {
    const value = getRandomInt(MIN, MAX);
    setIsStart(true);
    setValueWheel(value);

    setTimeout(() => {
      endSpin(value);
    }, TIME)
  }

  const renderResult = (value) => {
    let id = 0;

    if ((value > 0 && value < 45) || (value > 316 && value < 359)) {
      id = 1;
    }
    else if (value > 226 && value < 315) {
      id = 2;
    }
    else if (value > 136 && value < 225) {
      id = 3;
    }
    else if (value > 46 && value < 135) {
      id = 4;
    }
    else {
      console.log("default")
    }

    return findObject(id);
  }

  const findObject = (id) => {
    return VALUES.find(e => e.id === id);
  }

  const endSpin = (value) => {
    setIsStart(false);
    const result = renderResult(value);
    alert(result.value)
  }

  const startSpinStyle = {
    transition: `all ${TIME}ms cubic-bezier(.16,.98,.75,1)`,
    transform: `rotate(${valueWheel + 360 * TIMES}deg)`,
  }

  const endSpinStyle = {
    transition: 'none 0s ease 0s',
    transform: `rotate(${valueWheel}deg)`,
  }

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex justify-center items-center relative overflow-hidden">
        <div style={isStart ? startSpinStyle : endSpinStyle} className={`w-[700px] h-[700px] bg-[#000] rounded-full overflow-hidden relative`}>
          {VALUES.map((e, index) => (
            <div key={`spin-${index}`}>
              <div style={{transform: `rotate(${90 * index}deg)`}} className={`border border-teal-50 absolute h-3/6 w-3/6 origin-bottom-right ${e.color}`}>
                <span className="relative top-1/2 left-1/2">{e.value}</span>
              </div>
            </div>
          ))}
        </div>
        <button disabled={isStart ? true : false } onClick={start} className="shadow-3xl absolute left-1/2 top-1/2 -translate-y-2/4 -translate-x-2/4 z-50 bg-[#348ef6] rounded-full flex justify-center items-center w-[60px] h-[60px] cursor-pointer">
          <img src="/images/spin.svg" alt="test"/>
        </button>
        <div className="absolute top-0 left-0 left-12 top-12">
          <img src="/images/newspin.svg" alt="test"/>
        </div>
      </div>
    </div>
  )
}
export default SpinWheel;
