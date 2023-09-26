import './globals.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
