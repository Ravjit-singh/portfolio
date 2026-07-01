"use client";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-12 md:px-16 lg:px-24 font-sans flex flex-col items-center overflow-x-hidden selection:bg-[#fc5a2a] selection:text-white text-white">
      
      {/* 1. The White Hero Card */}
      <section className="bg-[#ffffff] text-black rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 flex flex-col items-center text-center w-full max-w-4xl relative overflow-hidden shadow-2xl z-20">
        <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 border-t-2 border-l-2 border-dashed border-[#fc5a2a]/30 rounded-tl-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 md:w-20 md:h-20 border-b-2 border-r-2 border-dashed border-[#fc5a2a]/30 rounded-br-full"></div>

        <div className="w-32 h-36 md:w-36 md:h-40 bg-[#fc5a2a] rounded-2xl mb-8 overflow-hidden shadow-[0_10px_30px_rgba(252,90,42,0.3)] border-[3px] border-white relative z-10">
           {/* Avatar Placeholder */}
        </div>

        <h1 className="text-3xl md:text-[2.75rem] font-black tracking-tight mb-3 text-[#111]">Aabad Ahmed (Ravjit)</h1>
        <p className="text-[#666666] max-w-md mx-auto font-medium text-sm md:text-[1.05rem] leading-relaxed">
          A Full-Stack Developer building scalable web applications and seamless HTML/JS-based APK wrappers.
        </p>

        <div className="flex gap-4 md:gap-5 mt-8 text-[#fc5a2a]">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-[#fc5a2a]/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#fc5a2a] hover:text-white transition-all duration-300 text-xs md:text-sm font-bold">X</div>
          <div className="w-9 h-9 md:w-10 md:h-10 bg-[#fc5a2a]/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#fc5a2a] hover:text-white transition-all duration-300 text-xs md:text-sm font-bold">in</div>
          <div className="w-9 h-9 md:w-10 md:h-10 bg-[#fc5a2a]/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#fc5a2a] hover:text-white transition-all duration-300 text-xs md:text-sm font-bold">GH</div>
        </div>
      </section>

      {/* 2. Massive Typography Section */}
      <section className="mt-24 w-full max-w-4xl flex flex-col items-center z-10 relative">
        <div className="flex flex-col items-center justify-center select-none text-center w-full">
          <h2 className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-white leading-[0.85] relative z-10 drop-shadow-lg">
            Software
          </h2>
          <h2 className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-[#292929] leading-[0.85] -mt-4 md:-mt-8">
            Engineer
          </h2>
        </div>
        
        <p className="mt-10 md:mt-12 text-[#999999] max-w-[500px] mx-auto text-xs md:text-[0.95rem] text-center leading-[1.8] font-medium px-4">
          Passionate about creating engaging user experiences and robust architectures. Currently focused on building high-performance projects like Service Linkup and skillmax_mk2.
        </p>
      </section>

      {/* 3. The Stats Row */}
      <section className="mt-20 grid grid-cols-3 gap-2 md:gap-4 w-full max-w-2xl mx-auto text-center divide-x divide-[#292929]">
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-[3.5rem] font-black text-white">+12</span>
          <span className="text-[0.55rem] md:text-[0.65rem] text-[#777] font-black uppercase tracking-[0.2em] mt-3 md:mt-4 leading-tight">Projects<br/>Completed</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-[3.5rem] font-black text-white">+5</span>
          <span className="text-[0.55rem] md:text-[0.65rem] text-[#777] font-black uppercase tracking-[0.2em] mt-3 md:mt-4 leading-tight">Tech<br/>Certifications</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-[3.5rem] font-black text-white">100%</span>
          <span className="text-[0.55rem] md:text-[0.65rem] text-[#777] font-black uppercase tracking-[0.2em] mt-3 md:mt-4 leading-tight">Client<br/>Satisfaction</span>
        </div>
      </section>

      {/* 4. The Vibrant Bento Boxes */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full max-w-[56rem] mx-auto">
        {/* Orange Card */}
        <div className="bg-[#fc5a2a] rounded-3xl p-6 md:p-8 relative overflow-hidden group cursor-pointer h-44 md:h-56 flex flex-col justify-between shadow-[0_15px_40px_rgba(252,90,42,0.15)]">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div className="flex justify-between items-end w-full">
            <h3 className="text-white text-sm md:text-base font-black uppercase tracking-widest leading-[1.3] w-2/3">
              Full-Stack Architecture
            </h3>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white text-sm font-bold group-hover:bg-white group-hover:text-[#fc5a2a] transition-all duration-300">
               ↗
            </div>
          </div>
        </div>

        {/* Green Card */}
        <div className="bg-[#d1ff45] rounded-3xl p-6 md:p-8 relative overflow-hidden group cursor-pointer h-44 md:h-56 flex flex-col justify-between shadow-[0_15px_40px_rgba(209,255,69,0.1)]">
          <div className="absolute top-0 right-0 w-[150%] h-[150%] opacity-20 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:16px_16px] transform rotate-12 -translate-y-10"></div>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center relative z-10">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          </div>
          <div className="flex justify-between items-end w-full relative z-10">
            <h3 className="text-[#111] text-sm md:text-base font-black uppercase tracking-widest leading-[1.3] w-2/3">
              TypeScript, Tailwind, Render, Supabase
            </h3>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-black/20 flex items-center justify-center text-[#111] text-sm font-bold group-hover:bg-[#111] group-hover:text-[#d1ff45] transition-all duration-300">
               ↗
            </div>
          </div>
        </div>
      </section>

      {/* 5. Recent Projects Header */}
      <section className="mt-32 w-full max-w-4xl mx-auto mb-10 md:mb-16 flex flex-col items-center">
        <div className="text-center flex flex-col items-center select-none w-full">
          <h2 className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-white leading-[0.85] relative z-10 drop-shadow-lg">
            Recent
          </h2>
          <h2 className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-[#292929] leading-[0.85] -mt-4 md:-mt-8">
            Projects
          </h2>
        </div>
      </section>

      {/* 6. Projects List */}
      <section className="w-full max-w-2xl mx-auto flex flex-col gap-1">
        
        <div className="group flex items-center justify-between p-3 md:p-4 -mx-4 rounded-2xl hover:bg-[#161616] transition-colors duration-300 cursor-pointer">
          <div className="flex items-center gap-5 md:gap-6">
            <div className="w-14 h-14 md:w-[4.5rem] md:h-[4.5rem] bg-[#1a1a1a] rounded-xl flex-shrink-0 relative overflow-hidden">
               <div className="absolute inset-0 bg-indigo-500/30 mix-blend-overlay"></div>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-white text-lg md:text-xl font-bold tracking-tight mb-1 group-hover:text-[#fc5a2a] transition-colors">Service Linkup</h4>
              <p className="text-[#888] text-[0.7rem] md:text-xs font-bold uppercase tracking-widest">Web platform & APK wrapper</p>
            </div>
          </div>
          <div className="text-[#fc5a2a] text-lg md:text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 font-bold">↗</div>
        </div>

        <div className="group flex items-center justify-between p-3 md:p-4 -mx-4 rounded-2xl hover:bg-[#161616] transition-colors duration-300 cursor-pointer">
          <div className="flex items-center gap-5 md:gap-6">
            <div className="w-14 h-14 md:w-[4.5rem] md:h-[4.5rem] bg-[#1a1a1a] rounded-xl flex-shrink-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-teal-500/30 mix-blend-overlay"></div>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-white text-lg md:text-xl font-bold tracking-tight mb-1 group-hover:text-[#fc5a2a] transition-colors">skillmax_mk2</h4>
              <p className="text-[#888] text-[0.7rem] md:text-xs font-bold uppercase tracking-widest">React & Supabase platform</p>
            </div>
          </div>
          <div className="text-[#fc5a2a] text-lg md:text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 font-bold">↗</div>
        </div>

        <div className="group flex items-center justify-between p-3 md:p-4 -mx-4 rounded-2xl hover:bg-[#161616] transition-colors duration-300 cursor-pointer">
          <div className="flex items-center gap-5 md:gap-6">
            <div className="w-14 h-14 md:w-[4.5rem] md:h-[4.5rem] bg-[#1a1a1a] rounded-xl flex-shrink-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-zinc-600/30 mix-blend-overlay"></div>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-white text-lg md:text-xl font-bold tracking-tight mb-1 group-hover:text-[#fc5a2a] transition-colors">R Journal</h4>
              <p className="text-[#888] text-[0.7rem] md:text-xs font-bold uppercase tracking-widest">Productivity application</p>
            </div>
          </div>
          <div className="text-[#fc5a2a] text-lg md:text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 font-bold">↗</div>
        </div>
        
        <div className="group flex items-center justify-between p-3 md:p-4 -mx-4 rounded-2xl hover:bg-[#161616] transition-colors duration-300 cursor-pointer">
          <div className="flex items-center gap-5 md:gap-6">
            <div className="w-14 h-14 md:w-[4.5rem] md:h-[4.5rem] bg-[#1a1a1a] rounded-xl flex-shrink-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-red-900/40 mix-blend-overlay"></div>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-white text-lg md:text-xl font-bold tracking-tight mb-1 group-hover:text-[#fc5a2a] transition-colors">Kaalo</h4>
              <p className="text-[#888] text-[0.7rem] md:text-xs font-bold uppercase tracking-widest">3D Godot 4 Horror Game</p>
            </div>
          </div>
          <div className="text-[#fc5a2a] text-lg md:text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 font-bold">↗</div>
        </div>

      </section>

      {/* 7. Experience / Milestones Header */}
      <section className="mt-32 w-full max-w-4xl mx-auto mb-10 md:mb-16 flex flex-col items-center">
        <div className="text-center flex flex-col items-center select-none w-full">
          <h2 className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-white leading-[0.85] relative z-10 drop-shadow-lg">
            12 Years of
          </h2>
          <h2 className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-[#292929] leading-[0.85] -mt-4 md:-mt-8">
            Experience
          </h2>
        </div>
      </section>

      {/* 8. The Timeline List */}
      <section className="w-full max-w-2xl mx-auto flex flex-col gap-10 md:gap-14">
        
        <div className="group flex items-start justify-between cursor-pointer">
          <div className="flex flex-col max-w-[85%]">
            <h4 className="text-white text-lg md:text-xl font-bold tracking-tight group-hover:text-[#fc5a2a] transition-colors">
              IIT Madras BS Degree
            </h4>
            <p className="text-[#999] text-sm md:text-[0.95rem] font-medium mt-2 leading-[1.7]">
              Qualified for direct admission into the undergraduate program, advancing foundational knowledge in data and engineering.
            </p>
            <span className="text-[#666] text-[0.65rem] md:text-xs font-black uppercase tracking-widest mt-4">
              May 2026 - Present
            </span>
          </div>
          <div className="text-[#fc5a2a] text-lg md:text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 font-bold mt-1">↗</div>
        </div>

        <div className="group flex items-start justify-between cursor-pointer">
          <div className="flex flex-col max-w-[85%]">
            <h4 className="text-white text-lg md:text-xl font-bold tracking-tight group-hover:text-[#fc5a2a] transition-colors">
              GitHub Education
            </h4>
            <p className="text-[#999] text-sm md:text-[0.95rem] font-medium mt-2 leading-[1.7]">
              Obtained official student developer membership, integrating professional version control and deployment pipelines.
            </p>
            <span className="text-[#666] text-[0.65rem] md:text-xs font-black uppercase tracking-widest mt-4">
              May 2026 - Present
            </span>
          </div>
          <div className="text-[#fc5a2a] text-lg md:text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 font-bold mt-1">↗</div>
        </div>

      </section>

      {/* 9. Premium Tools Header */}
      <section className="mt-32 w-full max-w-4xl mx-auto mb-10 md:mb-16 flex flex-col items-center">
        <div className="text-center flex flex-col items-center select-none w-full">
          <h2 className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-white leading-[0.85] relative z-10 drop-shadow-lg">
            Premium
          </h2>
          <h2 className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-[#292929] leading-[0.85] -mt-4 md:-mt-8">
            Tools
          </h2>
        </div>
      </section>

      {/* 10. Tools Grid */}
      <section className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {[
          { name: "Termux", sub: "Linux Environment", icon: "T" },
          { name: "Acode", sub: "Code Editor", icon: "A" },
          { name: "Next.js", sub: "React Framework", icon: "N" },
          { name: "Godot 4", sub: "3D Game Engine", icon: "G" },
          { name: "Supabase", sub: "Backend as a Service", icon: "S" },
          { name: "Tailwind", sub: "CSS Framework", icon: "TW" },
        ].map((tool, index) => (
          <div key={index} className="bg-transparent border border-[#222] rounded-2xl p-4 md:p-5 flex items-center gap-4 hover:bg-[#161616] hover:border-[#333] transition-colors duration-300 cursor-pointer">
            <div className="w-10 h-10 md:w-[3.25rem] md:h-[3.25rem] bg-white rounded-xl flex items-center justify-center text-black font-black text-lg flex-shrink-0 shadow-sm">
              {tool.icon}
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-white font-bold text-sm md:text-base tracking-tight">{tool.name}</span>
              <span className="text-[#888] text-[0.6rem] md:text-[0.65rem] font-black uppercase tracking-widest mt-0.5">{tool.sub}</span>
            </div>
          </div>
        ))}
      </section>

      {/* 11. Design Thoughts / Blog Header */}
      <section className="mt-32 w-full max-w-4xl mx-auto mb-10 md:mb-16 flex flex-col items-center">
        <div className="text-center flex flex-col items-center select-none w-full">
          <h2 className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-white leading-[0.85] relative z-10 drop-shadow-lg">
            Design
          </h2>
          <h2 className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-[#292929] leading-[0.85] -mt-4 md:-mt-8">
            Thoughts
          </h2>
        </div>
      </section>

      {/* 12. Articles List */}
      <section className="w-full max-w-2xl mx-auto flex flex-col gap-10 md:gap-12">
        
        <div className="group flex flex-col cursor-pointer border-b border-[#222] pb-8 md:pb-10">
          <div className="flex justify-between items-start">
            <h4 className="text-white text-xl md:text-2xl font-bold tracking-tight group-hover:text-[#fc5a2a] transition-colors pr-4">
              Building Full-Stack Apps Entirely on Android
            </h4>
            <div className="text-[#fc5a2a] text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 flex-shrink-0 font-bold mt-1">↗</div>
          </div>
          <p className="text-[#999] text-sm md:text-[0.95rem] font-medium mt-3 md:mt-4 leading-[1.7]">
            Exploring the workflow of using Termux and Acode to compile Next.js, manage GitHub pipelines, and deploy HTML/JS-based APK wrappers without a traditional PC.
          </p>
          <div className="flex justify-between items-center mt-6">
            <span className="text-[#666] text-[0.65rem] md:text-xs font-black uppercase tracking-widest">July 1, 2026</span>
            <span className="text-[#666] text-[0.65rem] md:text-xs font-black uppercase tracking-widest group-hover:text-white transition-colors">Read Post</span>
          </div>
        </div>

        <div className="group flex flex-col cursor-pointer border-b border-[#222] pb-8 md:pb-10">
          <div className="flex justify-between items-start">
            <h4 className="text-white text-xl md:text-2xl font-bold tracking-tight group-hover:text-[#fc5a2a] transition-colors pr-4">
              Prototyping a 16V Variable DC Power Supply
            </h4>
            <div className="text-[#fc5a2a] text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 flex-shrink-0 font-bold mt-1">↗</div>
          </div>
          <p className="text-[#999] text-sm md:text-[0.95rem] font-medium mt-3 md:mt-4 leading-[1.7]">
            A hardware log detailing the construction process using a transformer, bridge rectifier, and LM317T regulator for safe, adjustable bench power.
          </p>
          <div className="flex justify-between items-center mt-6">
            <span className="text-[#666] text-[0.65rem] md:text-xs font-black uppercase tracking-widest">April 14, 2026</span>
            <span className="text-[#666] text-[0.65rem] md:text-xs font-black uppercase tracking-widest group-hover:text-white transition-colors">Read Post</span>
          </div>
        </div>

      </section>

      {/* 13. Contact Header */}
      <section className="mt-32 w-full max-w-4xl mx-auto mb-10 md:mb-16 flex flex-col items-center">
        <div className="text-center flex flex-col items-center select-none w-full">
          <h2 className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-white leading-[0.85] relative z-10 drop-shadow-lg">
            Let's Work
          </h2>
          <h2 className="text-[3.5rem] sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter text-[#292929] leading-[0.85] -mt-4 md:-mt-8">
            Together
          </h2>
        </div>
      </section>

      {/* 14. Contact Form */}
      <section className="w-full max-w-2xl mx-auto mb-32">
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
            <textarea rows={4} placeholder="Tell me about your project..." className="bg-[#1a1a1a] border border-transparent rounded-2xl p-4 md:p-5 text-white placeholder-[#555] font-medium focus:outline-none focus:border-[#fc5a2c]/50 transition-colors resize-none"></textarea>
          </div>

          <button className="mt-6 bg-[#fc5a2a] hover:bg-[#e04a1f] text-white font-black text-sm uppercase tracking-[0.2em] py-5 md:py-6 rounded-2xl transition-all duration-300 active:scale-[0.98] shadow-[0_10px_30px_rgba(252,90,42,0.2)]">
            Submit
          </button>
        </form>
      </section>

    </main>
  );
}
