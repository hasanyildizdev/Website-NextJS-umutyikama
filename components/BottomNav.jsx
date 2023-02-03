import React from 'react'
import NextImage from 'next/image';

function BottomNav() {
    return (
        <div className='py-1 lg:hidden fixed bottom-0 w-full h-18 z-50 bg-bgblue1'>
            <div className='px-16 flex flex-row justify-between'>
                <a href='//api.whatsapp.com/send?phone=905532214138&text=Merhaba, koltuk yıkatmak istiyorum.'>
                    <div className=' flex flex-col items-center justify-center'>
                        <NextImage
                            alt=''
                            src={require('../assets/icon_whatsapp.png')}
                            width='200'
                            className='w-10'
                        />
                        <p className='text-bgwhite font-bold'>Bize Yazın</p>
                    </div>
                </a>

                <a href='tel:+905532214138'>
                    <div className=' flex flex-col items-center justify-center'>
                        <NextImage
                            alt=''
                            src={require('../assets/icon_call.png')}
                            width='200'
                            className='w-10'
                        />
                        <p className='text-bgwhite font-bold'>Şimdi Ara</p>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default BottomNav