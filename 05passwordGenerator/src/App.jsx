import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [lenght, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()"
    for (let i = 0; i < lenght; i++) {
      pass += str[Math.floor(Math.random() * str.length)]
    }
    setPassword(pass)

  }, [lenght, numberAllowed, 
    charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 4)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [lenght, numberAllowed, 
    charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-screen max-w-md mx-auto
      rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
      <h1 className='text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg
      overflow-hidden mb-4'>

        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3' 
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 px-3
        py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={6}
          max={30}
          value={lenght}
          className='cursor-pointer'
          onChange={(e)=>{setLenght(e.target.value)}}
          />
          <label htmlFor="">{lenght}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={(e)=>{
            setNumberAllowed((prev) => !prev)}}
          />
          <label htmlFor="">Numnber</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charAllowed}
          id='numberInput'
          onChange={(e)=>{
            setCharAllowed((prev) => !prev)}}
          />
          <label htmlFor="">Char</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
