import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  description: 'Aplicacion ejemplo para los compañeros de programacion 3.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
