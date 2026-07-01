export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-24 font-sans flex flex-col items-center">
      
      {/* 1. The White Hero Card */}
      <section className="bg-white text-black rounded-[2.5rem] p-10 md:p-14 flex flex-col items-center text-center w-full max-w-4xl relative overflow-hidden shadow-2xl">
        {/* Decorative elements (Like the dashed line in the inspo) */}
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-dashed border-orange-200 rounded-tl-full opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-dashed border-orange-200 rounded-br-full opacity-50"></div>

        {/* Profile Image/Avatar Placeholder */}
        <div className="w-36 h-40 bg-orange-600 rounded-2xl mb-8 overflow-hidden shadow-lg border-4 border-white">
           {/* We will swap this with an <Image /> tag later */}
        </div>

        {/* Name & Bio */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">Ravjit Singh</h1>
        <p className="text-gray-600 max-w-md mx-auto font-medium text-lg leading-relaxed">
          A Full-Stack Developer building scalable web applications and seamless HTML/JS-based APK wrappers.
        </p>

        {/* Social Icons Placeholder */}
        <div className="flex gap-6 mt-8 text-orange-500">
          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-500 hover:text-white transition-colors duration-300">X</div>
          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-500 hover:text-white transition-colors duration-300">in</div>
          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-500 hover:text-white transition-colors duration-300">GH</div>
        </div>
      </section>

      {/* 2. Massive Typography Section */}
      <section className="mt-20 text-center w-full max-w-4xl">
        <div className="flex flex-col items-center justify-center leading-none">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">
            Software
          </h2>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-[#2a2a2a]">
            Engineer
          </h2>
        </div>
        
        <p className="mt-8 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          Passionate about creating engaging user experiences and robust architectures. Currently focused on building high-performance projects like Service Linkup and skillmax_mk2.
        </p>
      </section>
      {/* 5. Recent Projects Header */}
      <section className="mt-32 w-full max-w-4xl mx-auto mb-16 flex flex-col items-center">
        <div className="text-center flex flex-col items-center select-none">
          <h2 className="text-5xl md:text-[6rem] font-black uppercase tracking-tighter text-white leading-[0.85]">
            Recent
          </h2>
          <h2 className="text-5xl md:text-[6rem] font-black uppercase tracking-tighter text-[#1f1f1f] leading-[0.85]">
            Projects
          </h2>
        </div>
      </section>

      {/* 6. Projects List */}
      <section className="w-full max-w-2xl mx-auto flex flex-col gap-2">
        
        {/* Service Linkup */}
        <div className="group flex items-center justify-between p-4 -mx-4 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300 cursor-pointer">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#121214] rounded-2xl flex-shrink-0 border border-white/5 shadow-lg relative overflow-hidden">
               {/* Thumbnail Placeholder */}
               <div className="absolute inset-0 bg-indigo-500/20"></div>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-1">Service Linkup</h4>
              <p className="text-[#888888] text-sm md:text-base font-medium">Web platform & HTML/JS APK wrapper</p>
            </div>
          </div>
          <div className="text-[#ff5a2c] text-xl md:text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </div>
        </div>

        {/* skillmax_mk2 */}
        <div className="group flex items-center justify-between p-4 -mx-4 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300 cursor-pointer">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#121214] rounded-2xl flex-shrink-0 border border-white/5 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-teal-500/20"></div>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-1">skillmax_mk2</h4>
              <p className="text-[#888888] text-sm md:text-base font-medium">Full-stack React & Supabase platform</p>
            </div>
          </div>
          <div className="text-[#ff5a2c] text-xl md:text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </div>
        </div>

        {/* R Journal */}
        <div className="group flex items-center justify-between p-4 -mx-4 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300 cursor-pointer">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#121214] rounded-2xl flex-shrink-0 border border-white/5 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-zinc-600/20"></div>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-1">R Journal</h4>
              <p className="text-[#888888] text-sm md:text-base font-medium">Dark-themed productivity application</p>
            </div>
          </div>
          <div className="text-[#ff5a2c] text-xl md:text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </div>
        </div>
        
        {/* Kaalo */}
        <div className="group flex items-center justify-between p-4 -mx-4 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300 cursor-pointer">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#121214] rounded-2xl flex-shrink-0 border border-white/5 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-red-900/20"></div>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-1">Kaalo</h4>
              <p className="text-[#888888] text-sm md:text-base font-medium">3D horror game built in Godot 4</p>
            </div>
          </div>
          <div className="text-[#ff5a2c] text-xl md:text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </div>
        </div>

      </section>

      {/* Stats and Bento Boxes will go here next... */}
      {/* 3. The Stats Row */}
      <section className="mt-16 grid grid-cols-3 gap-4 w-full max-w-3xl mx-auto text-center divide-x divide-gray-800">
        <div className="flex flex-col">
          <span className="text-3xl md:text-5xl font-black text-white">+12</span>
          <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest mt-2">Projects<br/>Completed</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl md:text-5xl font-black text-white">+5</span>
          <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest mt-2">Certifications<br/>Earned</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl md:text-5xl font-black text-white">100%</span>
          <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest mt-2">Client<br/>Satisfaction</span>
        </div>
      </section>

      {/* 4. The Vibrant Bento Boxes */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
        
        {/* Orange Card (Core Strengths) */}
        <div className="bg-[#ff5a2c] rounded-3xl p-8 relative overflow-hidden group cursor-pointer h-48 md:h-64 flex flex-col justify-end shadow-[0_0_40px_rgba(255,90,44,0.2)]">
          {/* Subtle Background Pattern (using SVG data URI for ease) */}
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTEwIDEwaDEwdjEwaC0xMHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjIiLz48L3N2Zz4=')]"></div>
          
          <div className="relative z-10">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight leading-tight">
              Full-Stack <br/> Architecture
            </h3>
          </div>
          {/* Arrow Icon bottom right */}
          <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#ff5a2c] transition-all duration-300">
             ↗
          </div>
        </div>

        {/* Green Card (Tech Stack) */}
        <div className="bg-[#b4f44c] rounded-3xl p-8 relative overflow-hidden group cursor-pointer h-48 md:h-64 flex flex-col justify-end text-black shadow-[0_0_40px_rgba(180,244,76,0.1)]">
          {/* Zig-Zag pattern placeholder */}
          <div className="absolute top-0 right-0 w-3/4 h-full opacity-30 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative z-10">
            <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 className="text-black text-lg md:text-xl font-black uppercase tracking-tight leading-snug">
              TypeScript, Tailwind CSS, Render, Supabase
            </h3>
          </div>
          {/* Arrow Icon bottom right */}
          <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-black/30 flex items-center justify-center text-black group-hover:bg-black group-hover:text-[#b4f44c] transition-all duration-300">
             ↗
          </div>
        </div>

      </section>

    </main>
  );
}
