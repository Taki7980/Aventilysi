

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
                  <body className={`${nunito.className} bg-gradient-to-t from-[#67f936] to-[#4f60f2] bg-cover bg-center bg-fixed `}>
                        <Navbar/>
                        {children}
                        <Footer/>
                        
                  </body>
            </html>
      )
}
