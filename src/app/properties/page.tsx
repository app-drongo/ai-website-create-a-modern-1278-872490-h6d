import Pageheader from '@/components/Pageheader';
import Gallery from '@/components/Gallery';
import Pricing from '@/components/Pricing';
import Map from '@/components/Map';
import Reviews from '@/components/Reviews';
import Contactproperties from '@/components/Contactproperties';

export default function PropertiesPage() {
  return (
    <main className="min-h-screen">
      <section id="section-0" className="scroll-mt-16">
        <Pageheader />
      </section>
      <section id="section-1" className="scroll-mt-16">
        <Gallery />
      </section>
      <section id="section-2" className="scroll-mt-16">
        <Pricing />
      </section>
      <section id="section-3" className="scroll-mt-16">
        <Map />
      </section>
      <section id="section-4" className="scroll-mt-16">
        <Reviews />
      </section>
      <section id="section-5" className="scroll-mt-16">
        <Contactproperties />
      </section>
    </main>
  );
}