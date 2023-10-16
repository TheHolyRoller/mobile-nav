'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { SSRProvider } from '@react-aria/ssr';

import Footer from './footer/Footer';
import NewNav from './Components/NewNav';
import HeroComponent from './Components/HeroComponent';



const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <SSRProvider>
  <>
    <html lang="en">
    
    {/* Add in the navbar here  */}
    {/* This might break everything */}
    <NewNav/> 
    {/* Add in the hero component here  */}
    {/* <HeroComponent  />  */}
    
    
    {/* Add in the Dynamic hero section here  */}
    
    
    
      <body className={inter.className}>{children}</body>
      
      <Footer/> 
      
      {/* Add in the footer here  */}
    </html>
  </>
    
  </SSRProvider>
  )
}
