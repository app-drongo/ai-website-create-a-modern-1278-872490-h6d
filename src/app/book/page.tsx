import Pageheader1 from '@/components/Pageheader1';
import Pricing1 from '@/components/Pricing1';
import Contactbooking from '@/components/Contactbooking';

export default function BookingPage() {
  return (
    <main className="min-h-screen">
      <section id="section-0" className="scroll-mt-16">
        <Pageheader1 />
      </section>
      <section id="section-1" className="scroll-mt-16">
        <Pricing1 />
      </section>
      <section id="section-2" className="scroll-mt-16">
        <Contactbooking />
      </section>
    </main>
  );
}