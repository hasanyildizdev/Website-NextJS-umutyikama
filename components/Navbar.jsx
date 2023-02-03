import React, { useEffect, useState } from 'react'
import NextImage from 'next/image';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [heightNav, setHeightNav] = useState('14vh');
  const [height, setHeight] = useState('10vh');
  
  const [borderStyle,setBorderStyle]=useState('none');

  const [showMenu,setShowMenu]=useState('false');
  function toggle(){
    console.log("menu",showMenu);
    setShowMenu(!showMenu); 
  }

  useEffect(() => {
    const changeColor = () => {
        if (window.scrollY <= 90) {
          setHeightNav('14vh');
          setHeight('10vh');
          setBorderStyle('none');
        }
        else{
          setHeightNav('10vh');
          setBorderStyle('solid');
          setHeight('8vh');
        }
    };
    window.addEventListener('scroll', changeColor);

    window.addEventListener('click', function(e){
      if (!document.getElementById('l2').contains(e.target) && (!document.getElementById('menuButton').contains(e.target))){
        setShowMenu('false');
        document.getElementById('l2').style.display ="none"; 
      } 
    });
  }, []);


  return (
    <nav
      className="
       flex
       items-center
       justify-center
       bg-bgblack
       bg-opacity-10 
       lg:bg-opacity-30
       h-16
       "
       style={{height:heightNav}}
      >
      <div className='fixed lg:border-none bg-bgwhite h-12 lg:h-16 rounded flex items-center justify-center w-3/4 z-50'
        style={{height:height, borderStyle:borderStyle, borderWidth:'1px',borderColor:'#000' ,transition:'all 0.5s'}}
      >
        <a href='/' className='mx-8'>
          <NextImage
            src={require('../assets/umutyikama.png')}
            alt=""
            priority='true'
            width='400'
            className="hover:p-0  object-contain w-72 lg:p-4 " />
        </a>
        <ul className="
            hidden
            w-full
            lg:flex 
            flex-row
            items-center
            mx-8
            justify-between
            font-bold
            text-md
            text-bgblack">
          <li className='hover:underline decoration-bgblue2 '><a href='/'>{t('Home')}</a></li>
          <li className='hover:underline decoration-bgblue2 '><a href='#services'>{t('Services')}</a></li>
          <li className='hover:underline decoration-bgblue2 '><a href='#videos'>VİDEOLAR</a></li>
          <li className='hover:underline decoration-bgblue2 '><a href='#images'>RESİMLER</a></li>
          <li className='hover:scale-105 text-bgwhite bg-bgblue2 px-2 rounded-sm ring-2 ring-bgblue2'><a href='#contact'>{t('Contact')}</a></li>
        </ul>

        <ul 
          id='l2'
          style={{display:showMenu ?"none":"block"}}
          className="
              absolute
            bg-bgblue2
              top-0
              right-0
              left-0
              rounded-md
              py-12
              font-bold
              text-xl
              text-bgblack
              ">
          <div className='flex flex-col items-center justify-center'>
              <li className=' decoration-bgblue2 '><a href='/'>{t('Home')}</a></li>
              <li className=' decoration-bgblue2 my-6'><a href='#services'>{t('Services')}</a></li>
              <li className=' decoration-bgblue2 '><a href='#faq'>MERAK EDİLENLER</a></li>
              <li className=' text-bgwhite mt-6 bg-bgblue2 px-2 rounded-sm ring-2 ring-bgblue2'><a href='#contact'>{t('Contact')}</a></li>
          </div>
        </ul>

        <button
          id='menuButton'
          className='mr-2 z-20 lg:hidden'
          onClick={toggle}
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

    </nav>
  )
}

export default Navbar