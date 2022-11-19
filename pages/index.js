import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className='font-poppins'>
      <Head>
        <title>Tony | Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <link rel="icon" href="/newlogo.svg" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    
    </div>
  )
}
