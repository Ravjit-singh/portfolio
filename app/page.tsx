"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Lenis from "lenis";
import { Anton } from "next/font/google";
import { ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";

// Initialize the brutalist display font
const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Home() {
  // --- FORM STATE LOGIC ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Project Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Fetch the environment variables safely
    const url = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;
    const nameEntry = process.env.NEXT_PUBLIC_GOOGLE_FORM_NAME_ENTRY;
    const emailEntry = process.env.NEXT_PUBLIC_GOOGLE_FORM_EMAIL_ENTRY;
    const subjectEntry = process.env.NEXT_PUBLIC_GOOGLE_FORM_SUBJECT_ENTRY;
    const messageEntry = process.env.NEXT_PUBLIC_GOOGLE_FORM_MESSAGE_ENTRY;

    if (!url || !nameEntry || !emailEntry || !subjectEntry || !messageEntry) {
      console.error("Missing Google Form Environment Variables");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    // Build the form data payload
    const data = new FormData();
    data.append(nameEntry, formData.name);
    data.append(emailEntry, formData.email);
    data.append(subjectEntry, formData.subject);
    data.append(messageEntry, formData.message);

    try {
      // Fire the no-cors request
      await fetch(url, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });
      
      // Success! Reset form and show success state
      setStatus("success");
      setFormData({ name: "", email: "", subject: "Project Inquiry", message: "" });
      
      // Revert button back to normal after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Submission failed", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  // --- SMOOTH SCROLLING ---
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, 
      wheelMultiplier: 1,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const 
      } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] font-sans flex flex-col items-center overflow-x-hidden selection:bg-[#fc5a2a] selection:text-white text-white relative">
      
      {/* --- ELITE BACKGROUND ANIMATION --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjxwYXRoIGQ9Ik0wIDBoNDB2MUgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, -50, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute -top-[10%] -left-[10%] w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full bg-[#fc5a2a] opacity-[0.05] md:opacity-[0.04] blur-[80px] md:blur-[120px]" />
        <motion.div animate={{ scale: [1, 1.5, 1], x: [0, -100, 0], y: [0, 100, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-[40%] -right-[10%] w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] rounded-full bg-[#d1ff45] opacity-[0.04] md:opacity-[0.03] blur-[80px] md:blur-[120px]" />
      </div>

      {/* 1. --- FULL-SCREEN WHITE HERO CARD --- */}
      <div className="w-full z-20 flex justify-center group">
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="bg-[#ffffff] text-black rounded-b-[2rem] md:rounded-b-[4rem] pt-20 pb-16 md:pt-32 md:pb-24 flex flex-col items-center text-center w-full relative shadow-[0_40px_100px_rgba(0,0,0,0.95)] border-x border-b border-white/20 transition-all duration-700 group-hover:shadow-[0_40px_120px_rgba(252,90,42,0.3)]"
        >
          {/* Spinning Dashed Decorations */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute top-10 left-10 md:top-20 md:left-20 w-32 h-32 md:w-64 md:h-64 border-[3px] border-dashed border-[#fc5a2a]/20 rounded-full opacity-50 pointer-events-none transition-colors duration-700 group-hover:border-[#fc5a2a]/50" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-32 h-32 md:w-64 md:h-64 border-[3px] border-dashed border-[#fc5a2a]/20 rounded-full opacity-50 pointer-events-none transition-colors duration-700 group-hover:border-[#fc5a2a]/50" />

          {/* Anton Font Name Header */}
          <motion.h1 
            variants={fadeUp} 
            className={`${anton.className} text-[15vw] md:text-[9vw] lg:text-[10rem] tracking-normal mb-2 md:mb-1 text-[#111] uppercase leading-[0.85] drop-shadow-xl whitespace-nowrap relative z-10`}
          >
            RAVJIT SINGH
          </motion.h1>

          {/* Bio */}
          <motion.p 
            variants={fadeUp} 
            className="text-[#555] max-w-md mx-auto font-black text-[0.65rem] sm:text-xs md:text-sm leading-relaxed uppercase tracking-[0.2em] md:tracking-[0.3em] px-4 mb-8 md:mb-12 relative z-10"
          >
            FULL STACK DEVELOPER
          </motion.p>

          {/* Social Pills */}
          <motion.div 
            variants={fadeUp} 
            className="flex gap-4 md:gap-6 text-white relative z-10"
          >
            {[
              { name: "IG", url: "https://instagram.com/_ravjitsingh_" },
              { name: "in", url: "https://linkedin.com/in/your_profile" },
              { name: "GH", url: "https://github.com/Ravjit-singh" }
            ].map((social, i) => (
              <motion.a 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                whileHover={{ scale: 1.15, y: -5 }} 
                className="w-12 h-12 md:w-14 md:h-14 bg-[#111] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#fc5a2a] hover:shadow-[0_10px_30px_rgba(252,90,42,0.6)] transition-all duration-300 text-sm md:text-base font-black shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              >
                {social.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.section>
      </div>

      {/* --- INNER WRAPPER FOR PADDED CONTENT --- */}
      <div className="w-full px-4 md:px-16 lg:px-24 flex flex-col items-center relative z-10">
        
        {/* 2. Massive Typography Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-20 md:mt-40 w-full max-w-4xl flex flex-col items-center z-10 relative mb-12 md:mb-24"
        >
          <div className="flex flex-col items-center justify-center select-none text-center w-full">
            <motion.h2 variants={fadeUp} className={`${anton.className} text-[14vw] sm:text-[5rem] md:text-[9rem] uppercase tracking-normal text-white leading-[0.9] md:leading-[0.95] relative z-10 drop-shadow-lg whitespace-nowrap`}>
              Software
            </motion.h2>
            <motion.h2 variants={fadeUp} className={`${anton.className} text-[14vw] sm:text-[5rem] md:text-[9rem] uppercase tracking-normal text-[#292929] leading-[0.9] md:leading-[0.95] -mt-1 md:-mt-4 whitespace-nowrap`}>
              Engineer
            </motion.h2>
          </div>
          
          <motion.p variants={fadeUp} className="mt-8 md:mt-16 text-[#999999] max-w-[500px] mx-auto text-xs md:text-[0.95rem] text-center leading-[1.8] font-medium px-4">
            Passionate about creating engaging user experiences and software applications that solve real problems. Currently focused on building high-performance projects like R Render.
          </motion.p>
        </motion.section>

        {/* 3. The Stats Row */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-6 md:mt-12 grid grid-cols-3 gap-2 md:gap-4 w-full max-w-2xl mx-auto text-center divide-x divide-[#292929]"
        >
          {[
            { num: "+12", label: "Projects\nCompleted" },
            { num: "+5", label: "Tech\nCertifications" },
            { num: "100%", label: "Client\nSatisfaction" }
          ].map((stat, i) => (
            <motion.div variants={fadeUp} key={i} className="flex flex-col items-center px-1">
              <span className="text-3xl sm:text-4xl md:text-[3.5rem] font-black text-white">{stat.num}</span>
              <span className="text-[0.55rem] md:text-[0.65rem] text-[#777] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] mt-2 md:mt-4 leading-tight whitespace-pre-line">{stat.label}</span>
            </motion.div>
          ))}
        </motion.section>

        {/* 4. The Vibrant Bento Boxes */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full max-w-[56rem] mx-auto"
        >
          {/* Orange Card */}
          <motion.div variants={fadeUp} whileHover={{ y: -5, scale: 1.01 }} className="bg-[#fc5a2a] rounded-3xl p-6 md:p-8 relative overflow-hidden group cursor-pointer h-40 sm:h-44 md:h-56 flex flex-col justify-between shadow-[0_15px_40px_rgba(252,90,42,0.15)] transition-all">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="flex justify-between items-end w-full">
              <h3 className="text-white text-sm md:text-base font-black uppercase tracking-widest leading-[1.3] w-2/3">
                Full-Stack Software Developer
              </h3>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#fc5a2a] transition-all duration-300">
                <ArrowUpRight size={20} strokeWidth={3} className="md:w-6 md:h-6 transition-transform group-hover:scale-110" />
              </div>
            </div>
          </motion.div>

          {/* Green Card */}
          <motion.div variants={fadeUp} whileHover={{ y: -5, scale: 1.01 }} className="bg-[#d1ff45] rounded-3xl p-6 md:p-8 relative overflow-hidden group cursor-pointer h-40 sm:h-44 md:h-56 flex flex-col justify-between shadow-[0_15px_40px_rgba(209,255,69,0.1)] transition-all">
            <div className="absolute top-0 right-0 w-[150%] h-[150%] opacity-20 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:16px_16px] transform rotate-12 -translate-y-10"></div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center relative z-10">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <div className="flex justify-between items-end w-full relative z-10">
              <h3 className="text-[#111] text-sm md:text-base font-black uppercase tracking-widest leading-[1.3] w-2/3">
                TypeScript, Python, Node.js, PostgreSQL , React, Next.js, tailwind
              </h3>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black/20 flex items-center justify-center text-[#111] group-hover:bg-[#111] group-hover:text-[#d1ff45] transition-all duration-300">
                <ArrowUpRight size={20} strokeWidth={3} className="md:w-6 md:h-6 transition-transform group-hover:scale-110" />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 5. Recent Projects Header */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-28 md:mt-48 w-full max-w-[72rem] mx-auto mb-10 md:mb-24 flex flex-col items-center"
        >
          <div className="text-center flex flex-col items-center select-none w-full">
            <motion.h2 variants={fadeUp} className={`${anton.className} text-[15vw] sm:text-[5rem] md:text-[9rem] uppercase tracking-normal text-white leading-[0.9] md:leading-[0.95] relative z-10 drop-shadow-lg whitespace-nowrap`}>
              Recent
            </motion.h2>
            <motion.h2 variants={fadeUp} className={`${anton.className} text-[15vw] sm:text-[5rem] md:text-[9rem] uppercase tracking-normal text-[#292929] leading-[0.9] md:leading-[0.95] -mt-1 md:-mt-4 whitespace-nowrap`}>
              Projects
            </motion.h2>
          </div>
        </motion.section>

        {/* 6. --- ULTRA-BRUTALIST PROJECTS GRID --- */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-[#333]"
        >
          {[
            { 
              title: "R Cloud", 
              sub: "Personal self hosted cloud storage",
              desc: "A high-performance, self-hosted personal cloud storage platform featuring a robust Node.js backend, a zero-configuration SQLite database, and a custom Kotlin Android client complete with native file picker integration and system-level download management",
              color: "bg-indigo-500",
              live: "https://ravjit-singh.github.io/rcloud",
              github: "https://github.com/Ravjit-singh/rcloud",
              image: "/rcloud.svg"
            },
            { 
              title: "Rashboard", 
              sub: "Agentic AI with Tool calling",
              desc: "A high-performance, tool-calling Agentic AI environment monitor featuring a dynamic Node.js backend, a persistent JSON memory cache, and a universal routing engine complete with seamless cloud API integration and system-level offline model execution",
              color: "bg-teal-500",
              live: "https://ravjit-singh.github.io/rashboard",
              github: "https://github.com/Ravjit-singh/rashboard",
              image: "/rashboard.svg"
            },
            { 
              title: "Yourhost", 
              sub: "Self hosted game server", 
              desc: "A self-hosted Minecraft Bedrock server orchestration tool featuring a custom Node.js backend, an isolated Debian Box64 translation environment, and a mobile-optimized web dashboard complete with automated deployment and dynamic network IP discovery.",
              color: "bg-zinc-600",
              live: "https://ravjit-singh.github.io/yourhost",
              github: "https://github.com/Ravjit-singh/YourHost",
              image: "/yourhost.svg"
            },
            { 
              title: "R Render", 
              sub: "Self hosting service for developers", 
              desc: "Self-hosted PaaS engineered with Node.js and SQLite, automating isolated process deployments, zero-overhead static delivery, and dynamic port allocation. Features real-time telemetry, multi-tenant RBAC, and integrated WAN tunneling for custom domain edge routing.",
              color: "bg-red-900",
              live: "https://ravjit-singh.github.io/r-render",
              github: "https://github.com/Ravjit-singh/r-render",
              image: "/r-render.svg"
            },
          ].map((project, i) => (
            <motion.div 
              variants={fadeUp} 
              key={i} 
              className={`group flex flex-col p-6 sm:p-8 md:p-12 border-b border-[#333] ${i % 2 === 0 ? 'md:border-r' : ''} ${i >= 2 ? 'md:border-b-0' : ''} hover:bg-[#111] transition-colors duration-500`}
            >
              <div className="mb-6 md:mb-8 flex justify-between items-start">
                <h4 className={`${anton.className} text-white text-[9vw] sm:text-5xl md:text-[4rem] uppercase tracking-wide leading-[0.95] group-hover:text-[#fc5a2c] transition-colors max-w-[80%]`}>
                  {project.title}
                </h4>
                <span className={`${anton.className} text-[#333] text-3xl md:text-5xl leading-none`}>
                  0{i + 1}
                </span>
              </div>

              {/* Object Tag used to allow external network requests inside the SVG */}
              <div className="w-full aspect-video bg-[#0a0a0a] border border-[#222] relative overflow-hidden mb-6 md:mb-8">
                <div className={`absolute inset-0 ${project.color}/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-200 ease-out z-10 pointer-events-none`}></div>
                
                <object 
                  data={project.image} 
                  type="image/svg+xml"
                  className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-200 ease-out group-hover:scale-105 pointer-events-none"
                >
                  {/* Fallback to text if the network fetch fails */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <span className={`${anton.className} text-[#1a1a1a] text-5xl sm:text-6xl md:text-8xl uppercase tracking-widest`}>
                      PREVIEW
                    </span>
                  </div>
                </object>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-end flex-grow gap-6 md:gap-0">
                <div className="max-w-full md:max-w-[70%]">
                  <p className="text-[#fc5a2a] text-[0.65rem] md:text-xs font-black uppercase tracking-[0.2em] mb-2 md:mb-3">
                    {project.sub}
                  </p>
                  <p className="text-[#888] text-xs sm:text-sm font-medium leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row md:flex-col gap-4 sm:gap-6 md:gap-2 text-left sm:text-right w-full md:w-auto border-t border-[#333] md:border-none pt-5 md:pt-0">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-start md:justify-end gap-1.5 text-[#666] hover:text-[#fc5a2c] text-[0.65rem] sm:text-xs font-black uppercase tracking-widest transition-colors group-hover:text-white py-1 md:py-0">
                    Live Site <ArrowUpRight size={16} strokeWidth={3} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-start md:justify-end gap-1.5 text-[#666] hover:text-[#fc5a2c] text-[0.65rem] sm:text-xs font-black uppercase tracking-widest transition-colors group-hover:text-white py-1 md:py-0">
                    GitHub <ArrowUpRight size={16} strokeWidth={3} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* 7. Developer Timeline Header */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-28 md:mt-48 w-full max-w-4xl mx-auto mb-12 md:mb-24 flex flex-col items-center"
        >
          <div className="text-center flex flex-col items-center select-none w-full">
            <motion.h2 variants={fadeUp} className={`${anton.className} text-[13vw] sm:text-[5rem] md:text-[9rem] uppercase tracking-normal text-white leading-[0.9] md:leading-[0.95] relative z-10 drop-shadow-lg whitespace-nowrap`}>
              Developer
            </motion.h2>
            <motion.h2 variants={fadeUp} className={`${anton.className} text-[13vw] sm:text-[5rem] md:text-[9rem] uppercase tracking-normal text-[#292929] leading-[0.9] md:leading-[0.95] -mt-1 md:-mt-4 whitespace-nowrap`}>
              Timeline
            </motion.h2>
          </div>
        </motion.section>

        {/* 8. The Timeline List */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="w-full max-w-3xl mx-auto flex flex-col gap-10 md:gap-14"
        >
          <motion.div variants={fadeUp} className="group flex items-start justify-between cursor-pointer border-b border-[#222] pb-8">
            <div className="flex flex-col max-w-[85%]">
              <h4 className="text-white text-lg md:text-2xl font-bold tracking-tight group-hover:text-[#fc5a2c] transition-colors">Graduation</h4>
              <p className="text-[#999] text-xs sm:text-sm md:text-[0.95rem] font-medium mt-2 leading-[1.7]">Chandigarh College of Engineering and Technology. Secured admission to the CSE program, advancing foundational knowledge in software developement</p>
              <span className="text-[#666] text-[0.6rem] md:text-xs font-black uppercase tracking-widest mt-4">2026 - Present</span>
            </div>
            <div className="text-[#fc5a2c] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 mt-1">
              <ArrowUpRight size={24} strokeWidth={3} className="md:w-7 md:h-7" />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="group flex items-start justify-between cursor-pointer border-b border-[#222] pb-8">
            <div className="flex flex-col max-w-[85%]">
              <h4 className="text-white text-lg md:text-2xl font-bold tracking-tight group-hover:text-[#fc5a2c] transition-colors">High Schooling</h4>
              <p className="text-[#999] text-xs sm:text-sm md:text-[0.95rem] font-medium mt-2 leading-[1.7]">GMSSS Sector 35, Chandigarh. Balanced CBSE academic curriculum and board preparation alongside dedicated full-stack web development.</p>
              <span className="text-[#666] text-[0.6rem] md:text-xs font-black uppercase tracking-widest mt-4">2025 - 2026</span>
            </div>
            <div className="text-[#fc5a2c] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 mt-1">
              <ArrowUpRight size={24} strokeWidth={3} className="md:w-7 md:h-7" />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="group flex items-start justify-between cursor-pointer pb-8">
            <div className="flex flex-col max-w-[85%]">
              <h4 className="text-white text-lg md:text-2xl font-bold tracking-tight group-hover:text-[#fc5a2c] transition-colors">IOT and Hardware</h4>
              <p className="text-[#999] text-xs sm:text-sm md:text-[0.95rem] font-medium mt-2 leading-[1.7]">Obtained deep knowledge in field or IOT and robotics including the fundamentals of programming.</p>
              <span className="text-[#666] text-[0.6rem] md:text-xs font-black uppercase tracking-widest mt-4">2018 - 2025</span>
            </div>
            <div className="text-[#fc5a2c] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 mt-1">
              <ArrowUpRight size={24} strokeWidth={3} className="md:w-7 md:h-7" />
            </div>
          </motion.div>
        </motion.section>

        {/* 9. Contact Header */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-28 md:mt-48 w-full max-w-4xl mx-auto mb-12 md:mb-24 flex flex-col items-center"
        >
          <div className="text-center flex flex-col items-center select-none w-full">
            <motion.h2 variants={fadeUp} className={`${anton.className} text-[13vw] sm:text-[5rem] md:text-[9rem] uppercase tracking-normal text-white leading-[0.9] md:leading-[0.95] relative z-10 drop-shadow-lg whitespace-nowrap`}>
              Let's Work
            </motion.h2>
            <motion.h2 variants={fadeUp} className={`${anton.className} text-[13vw] sm:text-[5rem] md:text-[9rem] uppercase tracking-normal text-[#292929] leading-[0.9] md:leading-[0.95] -mt-1 md:-mt-4 whitespace-nowrap`}>
              Together
            </motion.h2>
          </div>
        </motion.section>

        {/* 10. --- WIRED CONTACT FORM --- */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="w-full max-w-2xl mx-auto mb-20 md:mb-32"
        >
          <form className="flex flex-col gap-4 md:gap-6" onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#888] text-[0.65rem] md:text-xs font-black uppercase tracking-widest ml-1">Name</label>
                <input required name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Your Name" className="bg-[#1a1a1a] border border-[#222] rounded-2xl p-4 md:p-6 text-white placeholder-[#555] text-base font-medium focus:outline-none focus:border-[#fc5a2c]/50 transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#888] text-[0.65rem] md:text-xs font-black uppercase tracking-widest ml-1">Email</label>
                <input required name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="your@email.com" className="bg-[#1a1a1a] border border-[#222] rounded-2xl p-4 md:p-6 text-white placeholder-[#555] text-base font-medium focus:outline-none focus:border-[#fc5a2c]/50 transition-colors" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2 mt-1 md:mt-2">
              <label className="text-[#888] text-[0.65rem] md:text-xs font-black uppercase tracking-widest ml-1">Subject</label>
              <select name="subject" value={formData.subject} onChange={handleInputChange} className="bg-[#1a1a1a] border border-[#222] rounded-2xl p-4 md:p-6 text-white text-base font-medium focus:outline-none focus:border-[#fc5a2c]/50 transition-colors appearance-none cursor-pointer">
                <option value="Project Inquiry">Project Inquiry</option>
                <option value="Job Opportunity">Job Opportunity</option>
                <option value="Just saying hi">Just saying hi</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 mt-1 md:mt-2">
              <label className="text-[#888] text-[0.65rem] md:text-xs font-black uppercase tracking-widest ml-1">Message</label>
              <textarea required name="message" value={formData.message} onChange={handleInputChange} rows={5} placeholder="Tell me about your project..." className="bg-[#1a1a1a] border border-[#222] rounded-2xl p-4 md:p-6 text-white placeholder-[#555] text-base font-medium focus:outline-none focus:border-[#fc5a2c]/50 transition-colors resize-none"></textarea>
            </div>

            <motion.button 
              disabled={status === "loading" || status === "success"}
              whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
              whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
              className={`mt-4 md:mt-6 text-white font-black text-sm md:text-base uppercase tracking-[0.2em] py-5 md:py-7 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 ${
                status === "success" ? "bg-[#d1ff45] text-black shadow-[0_10px_30px_rgba(209,255,69,0.3)]" :
                status === "error" ? "bg-red-500" :
                status === "loading" ? "bg-[#e04a1f] opacity-80 cursor-not-allowed" : 
                "bg-[#fc5a2a] hover:bg-[#e04a1f] shadow-[0_10px_30px_rgba(252,90,42,0.2)]"
              }`}
            >
              {status === "idle" && <>Submit <ArrowUpRight size={20} strokeWidth={3} /></>}
              {status === "loading" && <>Sending <Loader2 size={20} className="animate-spin" /></>}
              {status === "success" && <>Message Sent <CheckCircle2 size={20} strokeWidth={3} /></>}
              {status === "error" && <>Error - Try Again</>}
            </motion.button>
          </form>
        </motion.section>

      </div>
    </main>
  );
}