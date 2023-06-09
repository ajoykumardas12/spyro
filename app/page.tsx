import Hero from './components/Hero'
import FindYourFit from './components/FindYourFit'
import Classes from './components/Classes'
import Instructors from './components/Instructors'
import DownloadApp from './components/DownloadApp'
import Video from './components/Video'
import Testimonials from './components/Testimonials'
import FreeTrial from './components/FreeTrial'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-primaryBg overflow-x-hidden">
      <Hero />
      <FindYourFit />
      <Classes />
      <Instructors />
      <DownloadApp />
      <Video />
      <Testimonials />
      <FreeTrial />
    </main>
  )
}
