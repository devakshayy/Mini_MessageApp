import React, { useState } from 'react'

const MutipleSate = () => {
    const [score,setScore] = useState(0);

    const increment = () => {
         setScore(s => s + 1)
    }
  return (
    <div>
        <h1 className='text-3xl'>This is the Queing a series of State Update</h1>
       <button
            onClick={() => increment()}
            type="submit"
            className="border
                           rounded-lg 
                           w-[200px]
                           font-bold
                           mr-2
                           my-2
                           "
          >+ 1</button>
          <button
            onClick={() => {
                 
                    increment()
                    increment()
                    increment()
                 }}
               
            type="submit"
            className="border
                           rounded-lg 
                           w-[200px]
                           font-bold
                           mb-2
                           "
          >+ 3</button>
          <h1>Scorer : {score}</h1>
    </div>
  )
}

export default MutipleSate
