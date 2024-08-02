import { useState, useCallback, useEffect, useRef } from 'react'



function App() {

  const [password, setPassword] = useState()
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charchterAllowed, setCharchterAllowed] = useState(false)
  console.log(charchterAllowed)
  console.log(numberAllowed)
  const [length, setLength] = useState(10)

  const passGenerator = useCallback(() => {
    let pass = ""
    let str = 'abcdefghijklmnopqtstuvwxyz'
    if (numberAllowed) str += '1234567890'
    if (charchterAllowed) str += '!@#$%^&*()_'

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
    console.log(pass)
  }, [length, numberAllowed, charchterAllowed, password])
  useEffect(() => {
    passGenerator()
  }, [length, numberAllowed, charchterAllowed]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3 text-4xl'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button
          // onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            onChange={(preve) => setNumberAllowed(!numberAllowed)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            onChange={() => setCharchterAllowed(!charchterAllowed)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App