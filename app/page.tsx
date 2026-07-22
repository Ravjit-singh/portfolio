"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";

export default function Home() {
  // Initialize Lenis for buttery smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // Adjusts the smoothness (lower is smoother)
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Reusable animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <main className="min-h-screen px-4 py-12 md:px-16 lg:px-24 font-sans flex flex-col items-center overflow-x-hidden selection:bg-[#fc5a2a] selection:text-white text-white relative">
      
      {/* --- ELITE BACKGROUND ANIMATION --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjxwYXRoIGQ9Ik0wIDBoNDB2MUgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        {/* Moving Orange Orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#fc5a2a] opacity-[0.04] blur-[120px]"
        />
        
        {/* Moving Green Orb */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-[#d1ff45] opacity-[0.03] blur-[120px]"
        />
      </div>

      {/* --- CONTENT (Wrapped in relative z-10 to sit above background) --- */}
      <div className="w-full flex flex-col items-center relative z-10">
        
        {/* 1. The White Hero Card */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="bg-[#ffffff] text-black rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 flex flex-col items-center text-center w-full max-w-4xl relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-20"
        >
          <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 border-t-2 border-l-2 border-dashed border-[#fc5a2a]/30 rounded-tl-full"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 md:w-20 md:h-20 border-b-2 border-r-2 border-dashed border-[#fc5a2a]/30 rounded-br-full"></div>

          <motion.div variants={fadeUp} className="w-32 h-36 md:w-36 md:h-40 bg-[#fc5a2a] rounded-2xl mb-8 overflow-hidden shadow-[0_10px_30px_rgba(252,90,42,0.3)] border-[3px] border-white relative z-10">
             {/* Avatar Placeholder */}
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-3xl md:text-[2.75rem] font-black tracking-tight mb-3 text-[#111]">
            Ravjit Singh
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#666666] max-w-md mx-auto font-medium text-sm md:text-[1.05rem] leading-relaxed">
            A Full-Stack Developer building scalable web applications and seamless HTML/JS-based APK wrappers.
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4 md:gap-5 mt-8 text-[#fc5a2a]">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-9 h-9 md:w-10 md:h-10 bg-[#fc5a2a]/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#fc5a2a] hover:text-white transition-colors duration-300 text-xs md:text-sm font-bold">X</motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="w-9 h-9 md:w-10 md:h-10 bg-[#fc5a2a]/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#fc5a2a] hover:text-white transition-colors duration-300 text-xs md:text-sm font-bold">in</motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-9 h-9 md:w-10 md:h-10 bg-[#fc5a2a]/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#fc5a2a] hover:text-white transition-colors duration-300 text-xs md:text-sm font-bold">GH</motion.div>
          </motion.div>
        </motion.section>

        {/* 2. Massive Typography Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-24 w-full max-w-4xl flex flex-col items-center z-10 relative"
        >
          <div className="flex flex-col items-center justify-center select-none text-center w-full">
            <motion.h2 variants={fadeUp} className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-white leading-[0.85] relative z-10 drop-shadow-lg">
              Software
            </motion.h2>
            <motion.h2 variants={fadeUp} className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-[#292929] leading-[0.85] -mt-4 md:-mt-8">
              Engineer
            </motion.h2>
          </div>
          
          <motion.p variants={fadeUp} className="mt-10 md:mt-12 text-[#999999] max-w-[500px] mx-auto text-xs md:text-[0.95rem] text-center leading-[1.8] font-medium px-4">
            Passionate about creating engaging user experiences and robust architectures. Currently focused on building high-performance projects like Service Linkup and skillmax_mk2.
          </motion.p>
        </motion.section>

        {/* 3. The Stats Row */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-20 grid grid-cols-3 gap-2 md:gap-4 w-full max-w-2xl mx-auto text-center divide-x divide-[#292929]"
        >
          {[
            { num: "+12", label: "Projects\nCompleted" },
            { num: "+5", label: "Tech\nCertifications" },
            { num: "100%", label: "Client\nSatisfaction" }
          ].map((stat, i) => (
            <motion.div variants={fadeUp} key={i} className="flex flex-col items-center">
              <span className="text-4xl md:text-[3.5rem] font-black text-white">{stat.num}</span>
              <span className="text-[0.55rem] md:text-[0.65rem] text-[#777] font-black uppercase tracking-[0.2em] mt-3 md:mt-4 leading-tight whitespace-pre-line">{stat.label}</span>
            </motion.div>
          ))}
        </motion.section>

        {/* 4. The Vibrant Bento Boxes */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full max-w-[56rem] mx-auto"
        >
          {/* Orange Card */}
          <motion.div variants={fadeUp} whileHover={{ y: -5, scale: 1.01 }} className="bg-[#fc5a2a] rounded-3xl p-6 md:p-8 relative overflow-hidden group cursor-pointer h-44 md:h-56 flex flex-col justify-between shadow-[0_15px_40px_rgba(252,90,42,0.15)] transition-all">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="flex justify-between items-end w-full">
              <h3 className="text-white text-sm md:text-base font-black uppercase tracking-widest leading-[1.3] w-2/3">
                Full-Stack Architecture
              </h3>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white text-sm font-bold group-hover:bg-white group-hover:text-[#fc5a2a] transition-all duration-300">↗</div>
            </div>
          </motion.div>

          {/* Green Card */}
          <motion.div variants={fadeUp} whileHover={{ y: -5, scale: 1.01 }} className="bg-[#d1ff45] rounded-3xl p-6 md:p-8 relative overflow-hidden group cursor-pointer h-44 md:h-56 flex flex-col justify-between shadow-[0_15px_40px_rgba(209,255,69,0.1)] transition-all">
            <div className="absolute top-0 right-0 w-[150%] h-[150%] opacity-20 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:16px_16px] transform rotate-12 -translate-y-10"></div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center relative z-10">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <div className="flex justify-between items-end w-full relative z-10">
              <h3 className="text-[#111] text-sm md:text-base font-black uppercase tracking-widest leading-[1.3] w-2/3">
                TypeScript, Tailwind, Render, Supabase
              </h3>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-black/20 flex items-center justify-center text-[#111] text-sm font-bold group-hover:bg-[#111] group-hover:text-[#d1ff45] transition-all duration-300">↗</div>
            </div>
          </motion.div>
        </motion.section>

        {/* 5. Recent Projects Header */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-32 w-full max-w-4xl mx-auto mb-10 md:mb-16 flex flex-col items-center"
        >
          <div className="text-center flex flex-col items-center select-none w-full">
            <motion.h2 variants={fadeUp} className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-white leading-[0.85] relative z-10 drop-shadow-lg">
              Recent
            </motion.h2>
            <motion.h2 variants={fadeUp} className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-[#292929] leading-[0.85] -mt-4 md:-mt-8">
              Projects
            </motion.h2>
          </div>
        </motion.section>

        {/* 6. Projects List */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="w-full max-w-3xl mx-auto flex flex-col gap-8 md:gap-12"
        >
          {[
            { title: "Service Linkup", sub: "Web platform & APK wrapper", color: "bg-indigo-500/20" },
            { title: "skillmax_mk2", sub: "React & Supabase platform", color: "bg-teal-500/20" },
            { title: "R Journal", sub: "Productivity application", color: "bg-zinc-600/20" },
            { title: "Kaalo", sub: "3D Godot 4 Horror Game", color: "bg-red-900/40" },
          ].map((project, i) => (
            <motion.div variants={fadeUp} whileHover={{ x: 10 }} key={i} className="group flex items-center justify-between cursor-pointer transition-transform">
              <div className="flex items-center gap-6 md:gap-8">
                <div className="w-20 h-20 md:w-32 md:h-32 bg-[#121212] rounded-2xl md:rounded-[1.5rem] flex-shrink-0 relative overflow-hidden border border-white/5 shadow-2xl">
                   <div className={`absolute inset-0 ${project.color} mix-blend-overlay`}></div>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-white text-xl md:text-[1.75rem] font-bold tracking-tight mb-1 md:mb-2 group-hover:text-[#fc5a2c] transition-colors">{project.title}</h4>
                  <p className="text-[#666] text-xs md:text-sm font-semibold uppercase tracking-widest">{project.sub}</p>
                </div>
              </div>
              <div className="text-[#fc5a2c] text-sm md:text-base font-bold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">↗</div>
            </motion.div>
          ))}
        </motion.section>

        {/* 7. Contact Header */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-32 w-full max-w-4xl mx-auto mb-10 md:mb-16 flex flex-col items-center"
        >
          <div className="text-center flex flex-col items-center select-none w-full">
            <motion.h2 variants={fadeUp} className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-white leading-[0.85] relative z-10 drop-shadow-lg">
              Let's Work
            </motion.h2>
            <motion.h2 variants={fadeUp} className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-[#292929] leading-[0.85] -mt-4 md:-mt-8">
              Together
            </motion.h2>
          </div>
        </motion.section>

        {/* 8. Contact Form */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="w-full max-w-2xl mx-auto mb-32"
        >
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[#888] text-[0.65rem] md:text-xs font-black uppercase tracking-widest ml-1">Name</label>
                <input type="text" placeholder="Your Name" className="bg-[#1a1a1a] border border-transparent rounded-2xl p-4 md:p-5 text-white placeholder-[#555] font-medium focus:outline-none focus:border-[#fc5a2c]/50 transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#888] text-[0.65rem] md:text-xs font-black uppercase tracking-widest ml-1">Email</label>
                <input type="email" placeholder="your@email.com" className="bg-[#1a1a1a] border border-transparent rounded-2xl p-4 md:p-5 text-white placeholder-[#555] font-medium focus:outline-none focus:border-[#fc5a2c]/50 transition-colors" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2 mt-2">
              <label className="text-[#888] text-[0.65rem] md:text-xs font-black uppercase tracking-widest ml-1">Subject</label>
              <select className="bg-[#1a1a1a] border border-transparent rounded-2xl p-4 md:p-5 text-white font-medium focus:outline-none focus:border-[#fc5a2c]/50 transition-colors appearance-none cursor-pointer">
                <option>Project Inquiry</option>
                <option>Job Opportunity</option>
                <option>Just saying hi</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label className="text-[#888] text-[0.65rem] md:text-xs font-black uppercase tracking-widest ml-1">Message</label>
              <textarea rows={4} placeholder="Tell me about your project " className="bg-[#1a1a1a] border border-transparent rounded-2xl p-4 md:p-5 text-white placeholder-[#555] font-medium focus:outline-none focus:border-[#fc5a2c]/50 transition-colors resize-none"></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 bg-[#fc5a2a] hover:bg-[#e04a1f] text-white font-black text-sm uppercase tracking-[0.2em] py-5 md:py-6 rounded-2xl transition-colors duration-300 shadow-[0_10px_30px_rgba(252,90,42,0.2)]"
            >
              Submit
            </motion.button>
          </form>
        </motion.section>

      </div>
    </main>
  );
}
