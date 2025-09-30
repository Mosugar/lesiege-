import { 
  Header,
  Hero,
  About,
  Services,
  Team,
  InstagramGallery,
  Testimonials,
  Contact,
  Footer,
  WhatsAppSticky
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <InstagramGallery />
      <Testimonials />
      <Contact />
      <Footer />
      {/* <WhatsAppSticky /> */}
    </main>
  );
}