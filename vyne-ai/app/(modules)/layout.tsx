import React from 'react'
import Header from '../_components/Header'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='bg-black'>
      <Header/>
      {children}
      
      </div>
  )
}

export default layout