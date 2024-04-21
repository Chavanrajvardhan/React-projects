import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("orange")

  // function changecolor(color){
  //   setcolor(color)
  // }
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <h1 className='flex justify-center items-center text-3xl font-bold py-4 text-white '>Bg_Color_Changer</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-4">
          <div className="flex  justify-center flex-wrap gap-3 shadow-lg bg-white my-1 px-2 py-2 rounded-3xl">
            <button
              // onClick={() => {changecolor("red")}}
              onClick={() => { setcolor("red") }}
              className='outline-none px-4 py-1 rounded-3xl shadow-lg text-white '
              style={{ backgroundColor: "red" }} >
              Red
            </button>
            <button
              onClick={() => { setcolor("yellow") }}
              className='outline-none px-4 py-1 rounded-3xl shadow-lg text-white'
              style={{ backgroundColor: "yellow" }} >
              Yellow
            </button>
            <button
              onClick={() => { setcolor("green") }}
              className='outline-none px-4 py-1 rounded-3xl shadow-lg text-white'
              style={{ backgroundColor: "green" }} >
              Green
            </button>
            <button
              onClick={() => { setcolor("pink") }}
              className='outline-none px-4 py-1 rounded-3xl shadow-lg text-white'
              style={{ backgroundColor: "pink" }} >
              Pink
            </button>
            <button
              onClick={() => { setcolor("blue") }}
              className='outline-none px-4 py-1 rounded-3xl shadow-lg text-white'
              style={{ backgroundColor: "blue" }} >
              Blue
            </button>
            <button
              onClick={() => { setcolor("grey") }}
              className='outline-none px-4 py-1 rounded-3xl shadow-lg text-white'
              style={{ backgroundColor: "grey" }} >
              Grey
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
