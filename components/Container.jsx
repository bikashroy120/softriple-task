import React from 'react'

const Container = ({children}) => {
  return (
    <div className=' max-w-[1380px] m-auto sm:px-[20px] px-0'>
        {children}
    </div>
  )
}

export default Container