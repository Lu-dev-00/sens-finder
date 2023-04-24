import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [sensUpper, setSensUpper] = useState(0);
  const [sensMiddle, setSensMiddle] = useState(0);
  const [sensLower, setSensLower] = useState(0);
  const [startingSens, setStartingSens] = useState(0)
  const [showPopup, setShowPopup] = useState(true);

  function handleSubmit(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowPopup(false);
    setSensMiddle(startingSens);
    setSensUpper(round(startingSens * 1.5));
    setSensLower(round(startingSens / 2));
  }

  function handleUpper () {
    setSensMiddle(round((sensUpper + sensMiddle) / 2));
    setSensLower(round(sensMiddle));
  }

  function handleLower () {
    setSensMiddle(round((sensLower + sensMiddle) / 2));
    setSensUpper(round(sensMiddle));
  }

  function round (num: number) {
    return parseFloat(num.toFixed(5))
  }

  return (
    

    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
    <div>
          {showPopup && (
            <div className="fixed inset-0 bg-opacity-75 flex items-center justify-center justify-center items-center">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg justify-center items-center">
                <label htmlFor="input" className="block font-medium mb-2 text-black">
                  Enter your 360 sensitivity:
                </label>
                <input
                  id="input"
                  type="number"
                  step='0.1'
                  value={startingSens}
                  onChange={(event) => setStartingSens(parseFloat(event.target.value))}
                  className="border border-gray-300 px-3 py-2 rounded-lg w-full mb-4 text-black text-center"
                />
                <div className='flex items-center justify-center'>
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Submit
                  </button>
                </div>
                
              </form>
            </div>
          )}
    </div>
      <h1 className='text-white font-bold '>Sens Finder 1.0</h1>
      <div className="flex flex-col justify-center items-center h-screen">
      <button onClick={handleUpper} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {sensUpper}
      </button>
      <p className="text-gray-700 my-4">Choose what sens feels better</p>
      <button  onClick={handleLower} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {sensLower}
      </button>
    </div>
  </main>
  )
}
