import Navbar from '@/components/Navbar';
import Carousel from '@/components/Carousel';
import About from '@/components/About';
import Features from '@/components/Features';
// import Statistics from '@/components/Statistics';
import Gallery from '@/components/Gallery';
import Events from '@/components/Events';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
// import Footer from '@/components/Footer';
import Campuses from '@/components/Campuses';
import Academics from '@/components/Academics';

// export const metadata = {
//   title: 'Excellence Academy - Top Educational Institution',
//   description:
//     'Excellence Academy provides world-class education with smart classrooms, experienced faculty, and world-class facilities.',
// };

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Carousel />
      <About />
      <Features />
      <Campuses />
      <Academics />
      <Gallery />
      {/* <Events /> */}
      <Testimonials />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
