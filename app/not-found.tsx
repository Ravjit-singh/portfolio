"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Anton } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-4 font-sans selection:bg-[#fc5a2a] selection:text-white text-white relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjxwYXRoIGQ9Ik0wIDBoNDB2MUgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="absolute top-[20%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#fc5a2a] opacity-[0.05] blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center relative z-10 w-full max-w-2xl"
      >
        <h1 className={`${anton.className} text-[20vw] sm:text-[12rem] md:text-[15rem] leading-[0.8] text-[#111] uppercase drop-shadow-lg select-none`}>
          404
        </h1>
        
        <div className="-mt-6 md:-mt-10 mb-8 z-10 flex flex-col items-center">
          <h2 className={`${anton.className} text-4xl md:text-6xl uppercase tracking-wide text-white mb-4`}>
            Sector Not Found
          </h2>
          <p className="text-[#888] font-medium text-sm md:text-base max-w-sm mx-auto">
            The endpoint you are looking for has been moved, deleted, or does not exist within this architecture.
          </p>
        </div>

        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ffffff] hover:bg-[#fc5a2a] text-black hover:text-white font-black text-sm md:text-base uppercase tracking-[0.2em] py-4 px-8 md:py-5 md:px-10 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center gap-3 group"
          >
            System Reboot 
            <ArrowUpRight size={20} strokeWidth={3} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.div>
        </Link>
      </motion.div>
    </main>
  );
}