import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.scss'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google';

export interface RootLayoutProps {
  children?: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Diólevel Dekorműhely',
  description: 'A Diólevél Dekorműhely egyedi kézműves dekorációkkal segít varázslatos hangulatot teremteni.',
}

export default function RootLayout({ children } : RootLayoutProps) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* @ts-expect-error Server Component */}
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
