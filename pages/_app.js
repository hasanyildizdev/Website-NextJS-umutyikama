import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../components/i18n';
import React, { Suspense } from 'react';
import BottomNav from '../components/BottomNav';

export default function App({ Component, pageProps }) {
  return( 
    <>
    <Suspense fallback="loading">
      <Navbar/>
        <Component {...pageProps} />
      <Footer/>
      <BottomNav/>
    </Suspense>
    </>
  )
}
