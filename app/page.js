import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-palette-100">
      <Header />
      <Hero />
      <section className="flex flex-col items-center w-full h-screen bg-palette-200 z-10">
        <h1 className="text-4xl font-semibold text-palette-800 pt-[4.75rem] pb-24" id="features">
          Our Features
        </h1>
        <Features />
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
