import React from 'react'
import NextImage from 'next/image';

function MainPage() {
  return (
    <div
      className='
      relative
      h-1/2
      lg:h-screen
      w-full
      overflow-hidden
    '>
      <NextImage
        src={require('../assets/main.png')}
        alt=""
        priority='true'
        className="lg:absolute w-scren object-contain bg-bgblack bg-opacity-10 lg:bg-bgwhite" />
      <div className='pt-10 lg:pt-0 lg:absolute flex-col h-1/2 lg:h-screen w-full pb-10 lg:pb-16 flex items-center justify-center z-10 bg-opacity-10 lg:bg-opacity-30 bg-bgblack'>
        <h2 className='animate-[showUp_4s_infinite] text-3xl lg:text-8xl font-bold text-bgblue1 border-2 border-bgblue1 p-2 rounded-md shadow shadow-bgblack'>UMUT YIKAMA</h2>
        <h1 className='animate-[showUp_4s_infinite] text-xl lg:text-5xl font-bold mt-4 text-bgblack lg:text-bgwhite'>KOLTUK YIKAMA SERVİSİ</h1>
      </div>

    </div>
  )
}

export default MainPage