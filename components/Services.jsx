import React from 'react'
import NextImage from 'next/image';

function Services() {
    return (
        <div id='services' className='w-full flex flex-col items-center'>
            
            <h3 className='py-6 lg:py-10 text-xl lg:text-4xl font-extrabold'>HİZMETLERİMİZ</h3>

            <div className='w-4/5 flex flex-col lg:flex-row justify-between items-center'>
                <div className='hover:scale-105 flex flex-col  justify-between w-5/6 h-72 lg:w-80 lg:h-96 rounded-3xl shadow-lg shadow-bgblack bg-bgwhite'>
                    <NextImage
                        alt=''
                        src={require('../assets/img_couch.png')}
                        width='400'
                        className='w-full rounded-t-3xl'
                    />
                    <div className='h-full w-full flex items-center justify-center'>
                        <h3 className='w-full text-center px-4 py-2 text-xl font-bold text-bgwhite bg-bgblue1'>KOLTUK YIKAMA</h3>
                    </div>
                    <div className='flex justify-center items-center'>
                        <NextImage
                            alt=''
                            src={require('../assets/stars.png')}
                            width='200'
                            className='w-1/2 mb-2'
                        />
                    </div>
                </div>

                <div className='hover:scale-105 flex flex-col justify-between w-5/6 h-72 lg:w-80 lg:h-96 my-10 lg:my-0 rounded-3xl shadow-lg shadow-bgblack bg-bgwhite'>
                    <NextImage
                        alt=''
                        src={require('../assets/img_seat.png')}
                        width='400'
                        className='w-full rounded-t-3xl'
                    />
                    <div className='h-full w-full flex items-center justify-center'>
                        <h3 className='w-full text-center px-4 py-2 text-xl font-bold text-bgwhite bg-bgblue1 '>ARAÇ KOLTUKLARI YIKAMA</h3>
                    </div>
                    <div className='flex justify-center items-center'>
                        <NextImage
                            alt=''
                            src={require('../assets/stars.png')}
                            width='200'
                            className='w-1/2 mb-2'
                        />
                    </div>
                </div>

                <div className='hover:scale-105 flex flex-col justify-between w-5/6 h-72 lg:w-80 lg:h-96 rounded-3xl shadow-lg shadow-bgblack bg-bgwhite'>
                    <NextImage
                        alt=''
                        src={require('../assets/img_bed.png')}
                        width='400'
                        className='w-full rounded-t-3xl'
                    />
                    <div className='h-full w-full flex items-center justify-center'>
                        <h3 className='w-full text-center px-4 py-2 text-xl font-bold text-bgwhite bg-bgblue1 '>YATAK YIKAMA</h3>
                    </div>
                    <div className='flex justify-center items-center'>
                        <NextImage
                            alt=''
                            src={require('../assets/stars.png')}
                            width='200'
                            className='w-1/2 mb-2'
                        />
                    </div>
                </div>
            </div>

            <div className='mt-10 w-4/5 flex flex-col lg:flex-row  justify-between items-center'>
                <div className='hover:scale-105 flex flex-col justify-between w-5/6 h-72 lg:w-80 lg:h-96 rounded-3xl shadow-lg shadow-bgblack bg-bgwhite'>
                    <NextImage
                        alt=''
                        src={require('../assets/img_group.png')}
                        width='400'
                        className='w-full rounded-t-3xl'
                    />
                    <div className='h-full w-full flex items-center justify-center'>
                        <h3 className='w-full text-center px-4 py-2 text-xl font-bold text-bgwhite bg-bgblue1 '>KOLTUK TAKIMI YIKAMA</h3>
                    </div>
                    <div className='flex justify-center items-center'>
                        <NextImage
                            alt=''
                            src={require('../assets/stars.png')}
                            width='200'
                            className='w-1/2 mb-2'
                        />
                    </div>
                </div>

                <div className=' hover:scale-105 flex flex-col justify-between w-5/6 h-72 lg:w-80 lg:h-96 my-10 lg:my-0 rounded-3xl shadow-lg shadow-bgblack bg-bgwhite'>
                    <NextImage
                        alt=''
                        src={require('../assets/img_cekyat.png')}
                        width='400'
                        className='w-full rounded-t-3xl'
                    />
                    <div className='h-full w-full flex items-center justify-center'>
                        <h3 className='w-full text-center px-4 py-2 text-xl font-bold text-bgwhite bg-bgblue1 '>ÇEKYAT YIKAMA</h3>
                    </div>
                    <div className='flex justify-center items-center'>
                        <NextImage
                            alt=''
                            src={require('../assets/stars.png')}
                            width='200'
                            className='w-1/2 mb-2'
                        />
                    </div>
                </div>

                <div className='hover:scale-105 flex flex-col justify-between w-5/6 h-72 lg:w-80 lg:h-96 rounded-3xl shadow-lg shadow-bgblack bg-bgwhite'>
                    <NextImage
                        alt=''
                        src={require('../assets/img_chair.png')}
                        width='400'
                        className='w-full rounded-t-3xl'
                    />
                    <div className='h-full w-full flex items-center justify-center'>
                        <h3 className='w-full text-center px-4 py-2 text-xl font-bold text-bgwhite bg-bgblue1 '>SANDALYE YIKAMA</h3>
                    </div>
                    <div className='flex justify-center items-center'>
                        <NextImage
                            alt=''
                            src={require('../assets/stars.png')}
                            width='200'
                            className='w-1/2 mb-2'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services