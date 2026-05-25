import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageWithFallback from "@/components/ImageWithFallback";
import { albums } from "@/data/albums";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return albums.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const album = albums.find(a => a.slug === slug);
  if (!album) return { title: "Album Not Found" };
  return {
    title: `${album.couple} Wedding | Muhurtham Photography`,
    description: `${album.couple}'s wedding album — ${album.category}`,
  };
}

export default async function AlbumPage({ params }: Props) {
  const { slug } = await params;
  const album = albums.find(a => a.slug === slug);
  if (!album) notFound();

  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback src={album.img} alt={album.couple} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40" />
          </div>
          <div className="relative z-10 text-center px-4">
            <p className="text-white/50 text-sm tracking-widest uppercase mb-3">{album.category} &middot; {album.date}</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4">{album.couple}</h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">Their wedding story, captured with love.</p>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6 text-center">Their Story</h2>
            <p className="text-gray-600 leading-relaxed text-center max-w-2xl mx-auto mb-12">{album.description}</p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {album.photos.map((photo, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg aspect-[4/5] shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <ImageWithFallback
                    src={photo}
                    alt={`${album.couple} photo ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-pink">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready to Create Your Album?</h2>
            <p className="text-white/80 text-lg mb-8">Let&apos;s capture your love story with the same passion and artistry.</p>
            <Link href="/#contact" className="px-8 py-3.5 bg-white text-pink text-sm font-medium tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg inline-block">Book Us Now</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
