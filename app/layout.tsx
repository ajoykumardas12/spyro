import Footer from './components/Footer';
import Header from './components/Header'
import './globals.css'
import { Orbitron, Outfit } from 'next/font/google'

const outfit = Outfit({ 
  subsets: ["latin"],
  variable:  "--font-outfit"
});

export const metadata = {
  title: 'Spyro',
  description: 'Fitness app landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} relative text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
