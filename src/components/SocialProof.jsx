import React, { useState } from 'react';
import { Star, Quote, TrendingUp, Maximize2, X, Play, ShieldCheck, Target } from 'lucide-react';

// --- IMPORTACIÓN DE TUS 12 FOTOS (Asegúrate de que existan en assets/results) ---
import img1 from '../assets/results/1.jpeg';
import img2 from '../assets/results/2.jpeg';
import img3 from '../assets/results/3.jpeg';
import img4 from '../assets/results/4.jpeg';
import img5 from '../assets/results/5.jpeg';
import img6 from '../assets/results/6.jpeg';
import img7 from '../assets/results/7.jpeg';
import img8 from '../assets/results/8.jpeg';
import img9 from '../assets/results/9.jpeg';
import img10 from '../assets/results/10.jpeg';
import img11 from '../assets/results/11.jpeg';
import img12 from '../assets/results/12.jpeg';

const testimonials = [
  {
    name: "James Wilson", location: "Miami, FL", before: "540", after: "710",
    text: "Carpium changed my life. After 4 months of their dispute process, my score jumped 170 points and I just closed on my first home!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    name: "Sarah Jenkins", location: "Houston, TX", before: "580", after: "745",
    text: "They removed 8 negative items that I couldn't get off my report for years. Highly recommended for anyone serious about their finances.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    name: "Michael Chen", location: "New York, NY", before: "610", after: "725",
    text: "As a business owner, Carpium helped me optimize my profile and now I have a $50k business line of credit.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  }
];

const resultImages = [
  { id: 1, src: img1 }, { id: 2, src: img2 }, { id: 3, src: img3 }, { id: 4, src: img4 },
  { id: 5, src: img5 }, { id: 6, src: img6 }, { id: 7, src: img7 }, { id: 8, src: img8 },
  { id: 9, src: img9 }, { id: 10, src: img10 }, { id: 11, src: img11 }, { id: 12, src: img12 },
];

const SocialProof = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollImages = [...resultImages, ...resultImages]; // Para el efecto infinito

  return (
    <section id="testimonials" className="bg-[#001A33] py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* --- BLOQUE 1: EVIDENCIA EN VIDEO Y TESTIMONIOS (SEPARADOS) --- */}
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          
          {/* VIDEO DE YOUTUBE (A la izquierda, destacado) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-3 bg-[#E5C100]/10 border border-[#E5C100]/20 px-5 py-2 rounded-full shadow-[0_0_20px_rgba(229,193,0,0.15)]">
              <Play size={22} className="text-[#E5C100] fill-[#E5C100]" />
              <span className="text-[#E5C100] text-sm font-extrabold uppercase tracking-widest">Video Evidence</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Watch Our <span className="text-gray-500 italic">Process</span> in Action.
            </h3>

            {/* Contenedor del Video Short (Vertical 9:16) */}
            <div className="bg-[#0a2540] p-4 rounded-3xl border border-white/5 shadow-2xl relative">
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/5 shadow-inner">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/0wQM0VF3wuU?modestbranding=1&rel=0&autoplay=0" 
                  title="Carpium Elite Solutions - Client Success Short"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute top-6 right-6 p-3 bg-[#E5C100]/10 rounded-xl border border-[#E5C100]/20">
                <ShieldCheck size={20} className="text-[#E5C100]" />
              </div>
            </div>
          </div>

          {/* Testimonios Escritos (A la derecha) */}
          <div className="lg:col-span-3 space-y-8">
            <div className="max-w-xl">
              <h2 className="text-[#E5C100] font-bold tracking-[0.3em] uppercase text-xs mb-4 italic">Social Proof</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  Trusted by People.<span className="text-gray-500 italic"> Powered by Results.</span>
              </h3>
            </div>
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>

        {/* --- BLOQUE 2: CARRUSEL INFINITO DE FOTOS (SEPARADO) --- */}
        <div className="relative pt-24 border-t border-gray-800/60">
          <div className="text-center mb-16 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2.5 bg-[#E5C100]/10 border border-[#E5C100]/20 px-4 py-2 rounded-full mb-4 shadow-[0_0_15px_rgba(229,193,0,0.1)]">
                  <Target size={16} className="text-[#E5C100]" />
                  <span className="text-[#E5C100] text-xs font-bold uppercase tracking-widest">Verified Deletions</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  Proof is in <br/><span className="text-gray-500italic">The Numbers.</span>
              </h3>
              <p className="text-gray-400 mt-6 text-sm leading-relaxed italic">
                  Actual client deletions, score increases, and approval letters achieved through our proprietary strategic dispute process. Hover to pause.
              </p>
          </div>

          {/* Contenedor del Carrusel Infinito (CSS animate-scroll) */}
          <div className="flex overflow-hidden relative group">
            {/* Gradientes laterales para suavizar el corte */}
            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#001A33] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#001A33] to-transparent z-10"></div>

            <div className="flex animate-scroll gap-6 py-4">
              {scrollImages.map((img, index) => (
                <div 
                  key={index} 
                  className="relative flex-none w-[280px] h-[380px] cursor-pointer overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all hover:border-[#E5C100]/50 hover:scale-[1.02]"
                  onClick={() => setSelectedImage(img)}
                >
                  {/* Foto de resultado real */}
                  <img 
                    src={img.src} 
                    alt="Credit Result Capture" 
                    className="w-full h-full object-cover object-top grayscale-[30%] hover:grayscale-0 transition-all duration-500" 
                  />
                  
                  {/* Overlay de Zoom al Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="text-[#E5C100]" size={32} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* --- MODAL (Lightbox) PARA VER LA IMAGEN GRANDE --- */}
      {selectedImage && (
        <div 
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-6 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
        >
            <button className="absolute top-6 right-6 text-white hover:text-[#E5C100] transition-colors p-2.5 bg-white/5 rounded-full">
                <X size={28} />
            </button>
            <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border-2 border-[#E5C100]/20 shadow-2xl bg-[#001A33]" onClick={(e) => e.stopPropagation()}>
                <img 
                    src={selectedImage.src} 
                    alt="Full Credit Result" 
                    className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-[22px]"
                />
            </div>
        </div>
      )}

    </section>
  );
};

const TestimonialCard = ({ testimonial: t }) => (
    <div className="bg-[#0a2540] p-10 rounded-3xl border border-white/5 relative h-full flex flex-col justify-between shadow-2xl transition-all hover:border-[#E5C100]/20 duration-500 group">
      <Quote className="absolute top-6 right-8 text-[#E5C100]/10 group-hover:text-[#E5C100]/20 transition-colors" size={70} />
      <div>
        <div className="flex items-center gap-5 mb-8">
          <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-[#E5C100]/20" />
          <div>
            <h4 className="text-white font-black text-lg tracking-tight">{t.name}</h4>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">{t.location}</p>
          </div>
        </div>
        <div className="flex gap-1.5 mb-8">
          {[...Array(5)].map((_, index) => <Star key={index} size={16} className="text-[#E5C100] fill-[#E5C100]" />)}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-10 italic">"{t.text}"</p>
      </div>
      <div className="bg-[#001A33] p-5 rounded-2xl flex items-center justify-between border border-white/5 mt-auto shadow-inner group-hover:border-[#E5C100]/10 transition-colors">
        <div className="text-center">
          <p className="text-[11px] text-gray-500 uppercase font-black mb-1.5">Before</p>
          <span className="text-red-400 font-black text-2xl tracking-tighter">{t.before}</span>
        </div>
        <TrendingUp size={24} className="text-[#E5C100] opacity-60" />
        <div className="text-center">
          <p className="text-[11px] text-gray-500 uppercase font-black mb-1.5">After</p>
          <span className="text-green-400 font-black text-2xl tracking-tighter">{t.after}</span>
        </div>
      </div>
    </div>
);

export default SocialProof;