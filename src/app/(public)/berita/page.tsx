import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function BeritaPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-gray-800">
            <Header />
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="max-w-7xl mx-auto px-6 py-10">
                    <h1 className="text-3xl font-bold mb-6">Berita Page</h1>
                </div>
            </section>
            <Footer />
        </main>
    );
}