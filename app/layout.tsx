

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
      weight: ['500'], subsets: ['latin']
})

export const metadata = {
      title: 'Aventi-lysi',
      description: 'A ventilation solution',
}

export default function RootLayout({
      children,
}: {
      children: React.ReactNode
}) {
      return (
            <html lang="en">
                  <body className={`${nunito.className} bg-gradient-to-t from-[#ffcc99] to-[#3EB489] bg-cover bg-center bg-fixed `}>
                        <Navbar/>
                        {children}
                        <Footer/>
                        
                  </body>
            </html>
      )
}
