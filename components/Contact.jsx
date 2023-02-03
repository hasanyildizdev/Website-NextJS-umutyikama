import React from 'react';
import NextImage from 'next/image';

function Contact() {
  return (
    <div id='contact' className='lg:w-full '>
      <p className='py-6 flex items-center justify-center font-extrabold text-xl lg:text-3xl'>İLETİŞİM KANALLARIMIZ</p>
      <div className='relative w-screen lg:w-full lg:h-1/2 lg:px-48 pt-6 flex flex-col lg:flex-row items-center justify-between'>
        <div className='hover:scale-105 w-2/3 lg:w-64  bg-bgwhite shadow-md shadow-bgblack'>
          <div className='w-full flex items-center justify-center mt-8'>
            <NextImage
              alt='Mail Icon'
              src={require('../assets/icon_mail.png')}
              width='100'
              className='w-16'
            />
          </div>
          <div className='relative self-baseline flex flex-col my-8 lg:my-12 items-center justify-center'>
            <p className='text-xl font-bold'>MAIL</p>
            <p className='text-lg'>info@umutyikama.com</p>
          </div>
        </div>
        <div className='my-6 lg:my-0 hover:scale-105 w-2/3 lg:w-64 bg-bgwhite shadow-md shadow-bgblack'>
          <div className='w-full flex items-center justify-center mt-8'>
            <NextImage
              alt='Phone Icon'
              src={require('../assets/icon_phone.png')}
              width='100'
              className='w-10'
            />
          </div>
          <div className='relative self-baseline flex flex-col my-8 lg:my-12 items-center justify-center'>
            <p className='text-xl font-bold'>TELEFON</p>
            <p className='text-lg'>+90 553 221 4138</p>
          </div>
        </div>
        <div className='hover:scale-105 w-2/3 lg:w-64 bg-bgwhite shadow-md shadow-bgblack'>
          <div className='w-full flex items-center justify-center mt-8'>
            <NextImage
              alt='Address Icon'
              src={require('../assets/icon_address.png')}
              width='100'
              className='w-16'
            />
          </div>
          <div className='relative self-baseline flex flex-col my-8 lg:my-12 items-center justify-center'>
            <p className='text-xl font-bold'>ADRES</p>
            <p className='text-lg'>Merkez Afşin/MARAŞ</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col w-screen items-center justify-center py-10 lg:flex-row lg:w-full lg:h-1/2 lg:justify-between lg:px-48'>
        <div className='my-6 lg:my-0 lg:w-full w-5/6 lg:mr-6 h-72 shadow-md shadow-bgblack'>
          <div className='w-full h-full items-center justify-center flex flex-col'>
            <div>
              <p className='font-bold text-bgblack text-lg lg:text-xl px-2 lg:px-0'>BİZ SİZİ ARAYALIM</p>
            </div>
            <div className='w-full'>
              <form className='h-full pt-8 flex flex-col items-center justify-between'>
                <input
                  required
                  id='name'
                  type='text'
                  placeholder={'AD SOYAD'}
                  style={{ color: 'black' }}
                  className='text-sm p-1 w-3/4 border-2 border-bgblue1'
                />
                <input
                  required
                  id='name'
                  type='text'
                  placeholder={'TALEBİNİZİ YAZIN'}
                  style={{ color: 'black' }}
                  className='text-sm p-1 w-3/4 mt-2 border-2 border-bgblue1'
                />
                <input
                  required
                  id='name'
                  type='text'
                  placeholder={'TELEFON NUMARANIZ'}
                  style={{ color: 'black' }}
                  className='text-sm p-1 w-3/4 mt-2 border-2 border-bgblue1'
                />
                <button className='hover:scale-105 p-2 mt-4 font-bold rounded-md border-2 bg-bgblue1 text-bgwhite'>
                  Talep Oluştur
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>
          <iframe className='w-full lg:w-96 h-72 shadow-md shadow-bgblack' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d783.3982612577224!2d36.911689979321416!3d38.242549600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152d12ffdec2e971%3A0xf417959923c5eff4!2zUMSxbmFyYmHFn8SxLCBNZWh0ZXIgU2suIE5vOjksIDQ2NTQwIEFmxZ9pbi9LYWhyYW1hbm1hcmHFnw!5e0!3m2!1str!2str!4v1671394327384!5m2!1str!2str" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact