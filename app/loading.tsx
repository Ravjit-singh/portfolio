"use client";

import { motion } from "framer-motion";
import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Loading() {
  return (
    <main className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center overflow-hidden selection:bg-[#fc5a2a] selection:text-white text-white">
      {/* Background ambient glow matching the main site */}
      <div className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#fc5a2a] opacity-[0.03] blur-[100px] pointer-events-none" />
      
      <div className="flex flex-col items-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className={`${anton.className} text-6xl md:text-[6rem] uppercase tracking-wide text-white leading-none mb-2`}>
            LOADING
          </h1>
          <p className="text-[#fc5a2a] font-black text-xs md:text-sm tracking-[0.3em] uppercase">
            Initializing Environment
          </p>

          {/* Brutalist Loading Bar */}
          <div className="w-48 md:w-64 h-1 bg-[#1a1a1a] mt-8 overflow-hidden relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#fc5a2a]"
              initial={{ width: "0%", left: "0%" }}
              animate={{ width: ["0%", "50%", "0%"], left: ["0%", "50%", "100%"] }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}