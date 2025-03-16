import React from 'react'
import InputBar from './InputBar'
import TodoTable from './TodoTable'

const MidSection = ({cui}:{cui: string}) => {
  return (
    <div className='flex flex-col gap-5 font-custom'>
      {/* input bar and add button  */}
      <div className="md:px-12 px-3 flex gap-3 mt-12 w-full h-[60px] md:flex-row flex-col">
        <InputBar placeholder='Enter Your Kaam Here...' cui={cui}/>
      </div>

      <div className='md:px-12 px-3 max-h-[400px] overflow-y-scroll '>
        <TodoTable cui={cui}/>
      </div>
    </div>
  )
}

export default MidSection