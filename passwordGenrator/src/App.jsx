import { useCallback, useState, useEffect, useRef } from 'react'
function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(false)
  const [copyMessage , setCopyMassage] = useState("")

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let hideString = "";
    if (numberAllowed) str += "123456789";
    if (charAllowed) str += "!@#$%^&*()_+-={}[]|\:;<>,.?/"
    // if (hide) str = str.replace(/./g, '*');
    
    if (hide) {
      str = "*".repeat(str.length);
    }
    
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, hide, setPassword])

  useEffect(() => {
    passwordGenrator()
  }, [length, numberAllowed, charAllowed, hide, passwordGenrator])

  // useRef hook

  const passwordRef = useRef(null)

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    // window.alert('Password copied!');
    setCopyMassage('Password copied to clipboard!');
    setTimeout(() => {
      setCopyMassage('');
    }, 2000);
  }, [password])


  return (
    <>
     <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
      <h1 className="text-white text-center">Password Genrator</h1>

      <div className="flex overflow-hidden rounded-lg mb-4 ">
        <input type="text"
          value={password}
          className="outline-none w-full py-1 px-3 "
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyToClipBoard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 active:bg-red-500 focus:outline-none ">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex item-center gap-x-1">
          <input type='range'
            min={6}
            max={100} 
            value={length}
            className="cursor-pointer"
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length : {length}</label>
        </div>

        <div className="flex item-center gap-x-1">
          <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => { setNumberAllowed((prev) => !prev) }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => { setCharAllowed((prev) => !prev) }}
          />
          <label htmlFor="charInput">Charcter</label>
        </div>

        <div className="flex item-center gap-x-1">
          <input type="checkbox"
            defaultChecked={hide}
            id="hideChar"
            onChange={() => { setHide((prev) => !prev) }}
          />
          <label htmlFor="hideChar">Hide</label>
        </div>

      </div>
      {copyMessage && <p>{copyMessage}</p>}
    </div>
      
      </>
  )
}

export default App
