import Layout from '@/layout/Layout'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JOAQUÍN ESCOBAR FIGUEREDO',
  description: 'PORTAFOLIO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${inter.className} bg-white dark:bg-gray-900 dark:text-white transition ease-in-out delay-200 duration-300`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
