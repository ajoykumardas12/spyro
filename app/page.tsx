import Image from 'next/image'
import Hero from './components/Hero'
import FindYourFit from './components/FindYourFit'
import Classes from './components/Classes'
import Instructors from './components/Instructors'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-primaryBg">
      <Hero />
      <FindYourFit />
      <Classes />
      <Instructors />
    </main>
  )
}
