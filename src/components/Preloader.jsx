import React from 'react'
// backgroundColor:'#2e89f1'

function Preloader(){
  return (
    <>
    <div className='flex justify-center items-center min-h-screen bg-white-600'>
      <img src="/book-preloader.gif" alt="" className='img-fluid'  width={'90px'}/>
    </div>
    </>
  )
}

export default Preloader