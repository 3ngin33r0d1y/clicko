import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-palette-100">
        <Header />
        <Hero />
        <section className="flex flex-col items-center justify-center w-full h-screen bg-palette-200 z-10">
          <h1 className="text-4xl font-bold text-palette-600">Hello World</h1>
        </section>
    </main>
  );
}
