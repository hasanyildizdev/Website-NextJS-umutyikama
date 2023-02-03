import React from 'react';
import NextImage from 'next/image';

function FAQ() {

    return (
            <div id='faq' className='py-16 w-scren flex flex-col items-center justify-center'>
                <p className='font-extrabold text-xl lg:text-3xl mb-6'>SIKÇA SORULAN SORULAR</p>
                <div className='w-5/6 lg:w-1/2 flex flex-col justify-between'>

                    <div className='flex items-center justify-center border-b-2 shadow-sm shadow-bgblack bg-bgwhite'>
                        <div className='w-full flex flex-row items-center justify-between '>
                            <input
                                type="checkbox"
                                className="peer absolute left-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                            />
                            <div className='h-16 pl-6 flex items-center peer-checked:hidden'>
                                <p className='text-md lg:text-xl font-bold'>Hangi Bölgelere Hizmet Veriliyor?</p>
                            </div>
                            <div className='py-4 lg:py-0 lg:h-24 pl-6 flex items-center justify-between overflow-hidden w-0 max-h-0 peer-checked:max-h-40 peer-checked:w-full'>
                                <p className='text-lg'>Hizmet bölgelerimiz Afşin Merkez Kahramanmaraş'tır</p>
                            </div>
                            <div className='px-2 h-11 flex items-center justify-center transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                <NextImage
                                    alt=''
                                    src={require('../assets/icon_arrow.png')}
                                    width="100"
                                    className='w-10'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='my-6  flex items-center justify-center border-b-2 shadow-sm shadow-bgblack bg-bgwhite'>
                        <div className='w-full flex flex-row items-center justify-between '>
                            <input
                                type="checkbox"
                                className="peer absolute left-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                            />
                            <div className='h-16 pl-6 flex items-center peer-checked:hidden'>
                                <p className='text-md lg:text-xl font-bold'>Koltuklar Nasıl Temizleniyor?</p>
                            </div>
                            <div className='py-4 lg:py-0 lg:h-24 pl-6 flex items-center justify-between overflow-hidden w-0 max-h-0 peer-checked:max-h-40 peer-checked:w-full'>
                                <p className='text-lg'>Özel temizlik makineleri ile gelerek koltuklarınızı evinizde yada aracın bulunduğu yerde temizleriz.</p>
                            </div>
                            <div className='px-2 h-11 flex items-center justify-center transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                <NextImage
                                    alt=''
                                    src={require('../assets/icon_arrow.png')}
                                    width="100"
                                    className='w-10'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center border-b-2 shadow-sm shadow-bgblack bg-bgwhite'>
                        <div className='w-full flex flex-row items-center justify-between '>
                            <input
                                type="checkbox"
                                className="peer absolute left-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                            />
                            <div className='h-16 pl-6 flex items-center peer-checked:hidden'>
                                <p className='text-md lg:text-xl font-bold'>Ücretlendirme Nasıl Yapılıyor?</p>
                            </div>
                            <div className='py-4 lg:py-0 lg:h-24 pl-6 flex items-center justify-between overflow-hidden w-0 max-h-0 peer-checked:max-h-40 peer-checked:w-full'>
                                <p className='text-lg'>Ücretlendirme koltuk tipine ve adetine göre değişmektedir. Bizimle iletişime geçerek fiyat alabilirsiniz.</p>
                            </div>
                            <div className='px-2 h-11 flex items-center justify-center transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                <NextImage
                                    alt=''
                                    src={require('../assets/icon_arrow.png')}
                                    width="100"
                                    className='w-10'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='my-6 flex items-center justify-center border-b-2 shadow-sm shadow-bgblack bg-bgwhite'>
                        <div className='w-full flex flex-row items-center justify-between '>
                            <input
                                type="checkbox"
                                className="peer absolute left-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                            />
                            <div className='h-16 pl-6 flex items-center peer-checked:hidden'>
                                <p className='text-md lg:text-xl font-bold'>Ne Tür Eşyaları Temizliyorsunuz?</p>
                            </div>
                            <div className='py-2 lg:py-0 lg:h-24 pl-6 flex items-center justify-between overflow-hidden w-0 max-h-0 peer-checked:max-h-40 peer-checked:w-full'>
                                <p className=''>Mobilya ve Araba Gruplarını temizlemekteyiz. Oturma Grupları - Koltuk Takımları - Çekyat - Kanepe - Sandalye - Mekan Yatak - Araba Koltukları temizlik hizmetimiz dahilindedir.  </p>
                            </div>
                            <div className='px-2 h-11 flex items-center justify-center transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                <NextImage
                                    alt=''
                                    src={require('../assets/icon_arrow.png')}
                                    width="100"
                                    className='w-10'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center border-b-2 shadow-sm shadow-bgblack bg-bgwhite'>
                        <div className='w-full flex flex-row items-center justify-between '>
                            <input
                                type="checkbox"
                                className="peer absolute left-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                            />
                            <div className='h-16 pl-6 flex items-center peer-checked:hidden'>
                                <p className='text-md lg:text-xl font-bold'>Temizlik İşlemi Ne Kadar Zamanda Tamamlanıyor?</p>
                            </div>
                            <div className='py-4 lg:py-0 lg:h-24 pl-6 flex items-center justify-between overflow-hidden w-0 max-h-0 peer-checked:max-h-40 peer-checked:w-full'>
                                <p className='text-lg'>Temizlik işlemi koltuk başına ortalama 20 dakika sürmektedir. Koltuk türü ve koltuk sayısına bağlı olarak bu süre değişmektedir.</p>
                            </div>
                            <div className='px-2 h-11 flex items-center justify-center transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                <NextImage
                                    alt=''
                                    src={require('../assets/icon_arrow.png')}
                                    width="100"
                                    className='w-10'
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
    )
}

export default FAQ