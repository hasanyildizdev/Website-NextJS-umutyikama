import Head from 'next/head';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import MainPage from '../components/MainPage';
import Services from '../components/Services';

export default function Home() {
  return (
    <div className='max-w-[2000px] min-w-[240px]'>
      <Head>
        <title>UMUT KOLTUK YIKAMA</title>
        <meta name="description" content="Koltuk Yıkama Servisi 100% Garantili - Afşin/Kahramanmaraş"/>
        <meta name="keywords" content="Yıkama,Maraş Yıkama,Maraş Koltuk Yıkama,Koltuk Yıkama,Afşin Yıkama,Afşin Koltuk Yıkama" />
        <meta property="og: type" content="website" />
        <meta property="og: title" content="UMUT YIKAMA" />
        <meta property="og: description" content="KOLTUK YIKAMA SERVİSİ" />
        <meta property="og: image" content="../assets/umutyikama.png" />
        <meta property="og: url" content="https://www.umutyikama.com/" />
        <meta property="og: site_name" content="UMUT KOLTUK YIKAMA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/uy.ico" />
      </Head>
      <MainPage/>
      <Services/>
      <FAQ/>
      <Contact/>
    </div >
  )
}
