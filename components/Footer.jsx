import React from 'react'
import NextImage from 'next/image';

function Footer() {
  return (
    <div
      className='
         relative
         align-bottom
         flex
         items-center
         justify-center
         lg:h-1/2
         h-auto
         w-full
         bg-bgblue1
         '>
      <div className='mb-4 lg:h-24 flex items-center justify-center flex-col w-full'>
        <div className='lg:mt-0 mt-8 w-5/6 lg:w-4/6 flex flex-col lg:flex-row justify-between mb-6'>
          <div className='lg:w-2/5 text-bgwhite text-opacity-80 list-none'>
            <li className='text-bgwhite font-extrabold text-2xl text-center lg:text-left'>UMUT YIKAMA</li>
            <div className='w-full'>
                <hr className='h-0.5 border-none bg-bgyellow'></hr>
            </div>
            <li className='text-lg text-justify mt-2'>
              Umut Yıkama, araç koltukları ve ev koltukları için temizlik hizmeti vermektedir.
              Ayrıca kaliteli ve hijyenik temizliğin garantisini vermektedir.
            </li>
          </div>
          <div className='lg:mt-0 mt-8 lg:w-1/5 text-xl lg:text-sm'>
            <u className='list-none no-underline text-bgwhite text-opacity-80 text-center lg:text-left'>
              <li className='text-xl font-bold text-bgwhite'><a>İÇERİKLER</a></li>
              <div className='w-full'>
                <hr className='h-0.5 border-none bg-bgyellow'></hr>
              </div>
              <li className='mt-2'><a href='/'>Anasayfa</a></li>
              <li className='mt-2 lg:mt-0'><a href='#services'>Hizmetlerimiz</a></li>
              <li className='mt-2 lg:mt-0'><a>Videolar</a></li>
              <li className='mt-2 lg:mt-0'><a>Resimler</a></li>
              <li className='mt-2 lg:mt-0'><a href='#faq'>Sık Sorulan Sorular</a></li>
              <li className='mt-2 lg:mt-0'><a href='#contact'>İletişim</a></li>
            </u>
          </div>
          <div className='lg:mt-0 mt-8  lg:w-1/5'>
            <u className='list-none no-underline text-bgwhite'>
              <li className='lg:text-lg text-xl font-bold text-bgwhite text-center'><a>BİZİ TAKİP EDİN</a></li>
              <div className='w-full'>
                <hr className='h-0.5 border-none bg-bgyellow'></hr>
              </div>
              <li className='flex flex-row items-center justify-center'>
                <a>        
                  <NextImage
                  src={require('../assets/face.png')}
                  alt=""
                  priority='true'
                  width='100'
                  className="mt-4 odd:w-10 object-contain" /></a>
                <a>       
                  <NextImage
                  src={require('../assets/insta.png')}
                  alt=""
                  priority='true'
                  width='100'
                  className="mt-4 mx-2 w-10 object-contain" /></a>
                <a>       
                  <NextImage
                  src={require('../assets/you.png')}
                  alt=""
                  priority='true'
                  width='100'
                  className="mt-4 w-12 object-contain" /></a>
              </li>
            </u>
          </div>
        </div>
        <div>

        </div>
        <div className='w-4/6 lg:mt-0 mt-8 '>
          <hr className='h-0.5 border-none bg-bgyellow'></hr>
        </div>
        <div className='mt-6 text-bgyellow'>
          <p className='text-xs lg:text-lg text-center'>Copyright ©2022 All rights reserved | Created by
            <a href='https://www.iyiapp.com'> iyiapp.com</a>
          </p>
        </div>
      </div>
      <div className='hidden lg:block mt-8 mr-12'>
        <NextImage
          src={require('../assets/cleaner.png')}
          alt=""
          priority='true'
          width='500'
          className="w-80 object-contain" />
      </div>
    </div>
  )
}

export default Footer