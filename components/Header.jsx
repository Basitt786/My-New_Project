"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import myimage from "@/public/imagge.png";
import { ChevronsRight, Signal, Smartphone } from "lucide-react";
import Sheetbar from "./Sheetbar";
import { ModeToggle } from "@/components/ModeToogle";
import Searching from "./Searching";
import Launcher from "./Launcher";

const Header = () => {
  const [open, setopen] = useState(false);
  const [hover, sethover] = useState(false);
  const [onn, setonn] = useState(false); // ✅ Launcher ke liye state

  return (
    <>
      {/* 🔹 Top Bar */}
      <div className="bg-gradient-to-b from-indigo-700 via-indigo-800 to-indigo-900 p-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          {/* Left Side */}
          <div className="flex items-center space-x-3 mb-2 md:mb-0">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 100 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Signal className="w-10 h-10 text-amber-300" />
            </motion.div>
            <h2 className="text-xl font-semibold text-white">Revenue Driven</h2>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 100 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Smartphone className="w-8 h-8 text-amber-300" />
            </motion.div>
            <h2 className="text-xl font-semibold text-white">+923101156217</h2>
          </div>
        </div>

        {/* Mode Toggle (Theme Switcher) */}
        <section className="flex justify-end mt-2">
          <ModeToggle />
        </section>
      </div>

      <hr className="border-t-2 border-black" />

      {/* 🔹 Main Header */}
      <header className="relative flex items-center justify-between bg-gradient-to-b from-indigo-700 via-indigo-800 to-indigo-900 px-4 md:px-8 h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 360 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={myimage}
              alt="Portfolio"
              placeholder="blur"
              className="rounded-lg object-cover 
                         w-10 h-10 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-15 lg:h-15"
            />
          </motion.div>

          <Link href="/">
            <motion.h1
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="text-3xl sm:text-xl md:text-3xl lg:text-4xl 
                         font-sans font-extrabold 
                         bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 
                         text-transparent bg-clip-text 
                         drop-shadow-[0_0_10px_rgba(251,191,36,0.6)] 
                         tracking-wide cursor-pointer select-none"
            >
              Portfolio
            </motion.h1>
          </Link>
        </div>

        {/* Mobile Menu (hamburger) */}
        <div className="flex lg:hidden ">
          <Sheetbar />
          <motion.div
            className="flex ml-2"
            whileHover={{ scale: 1.05, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Searching />
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex mx-auto w-fit items-center space-x-2 text-amber-50 font-sans font-bold">
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="list-none hover:bg-gray-700 px-4 py-2 rounded-2xl transition-all duration-200"
          >
            <Link href="/">Home</Link>
          </motion.li>

          {/* Projects Dropdown */}
          <li
            className="relative list-none"
            onMouseEnter={() => setopen(true)}
            onMouseLeave={() => setopen(false)}
          >
            <button
              onMouseEnter={() => sethover(true)}
              onMouseLeave={() => sethover(false)}
              className="flex items-center gap-1 text-amber-50 font-semibold hover:text-amber-300 transition-colors"
            >
              Projects
              <motion.span
                animate={{ rotate: hover ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block text-lg"
              >
                ▾
              </motion.span>
            </button>

            {open && (
              <motion.ul
                className="absolute left-0 mt-0 bg-gradient-to-b from-indigo-700 via-indigo-800 to-indigo-900 rounded-2xl shadow-xl w-44 text-sm overflow-hidden z-50 border border-white/10"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {[
                  { name: "🏪 My Store", href: "https://my-store1-dy0u6m568-syed-basit-alis-projects.vercel.app" },
                  { name: "🎮 Pokemon", href: "https://basitt786.github.io/Pokemon-Card/" },
                  { name: "✅ Todo App", href: "https://basitt786.github.io/Todo-App/" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 hover:bg-gradient-to-r hover:from-amber-400 hover:to-pink-500 hover:text-black transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </li>

          {/* Other Links */}
          {["Blog", "About"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="list-none hover:bg-gray-700 px-4 py-2 rounded-2xl transition-all duration-200"
            >
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </motion.li>
          ))}

          {/* ✅ Contact Button - Opens Launcher */}
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="list-none hover:bg-gray-700 px-4 py-2 rounded-2xl transition-all duration-200 cursor-pointer"
            onClick={() => setonn(true)}
          >
            Contact
          </motion.li>

          <motion.div
            className="flex justify-start items-center ml-[2rem]"
            whileHover={{ scale: 1.05, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Searching />
          </motion.div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.08, rotate: -3 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
            className="flex items-center gap-2 px-6 py-2.5 
                       bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 
                       text-black font-extrabold font-sans rounded-full 
                       shadow-md hover:shadow-amber-400/50 
                       transition-all duration-300 
                       hover:text-white hover:from-yellow-400 hover:to-orange-600 
                       focus:outline-none active:scale-95 relative left-[2rem]"
          >
            Let's Talk
            <ChevronsRight className="w-5 h-5 animate-pulse" />
          </motion.button>
        </nav>
      </header>

      {/* ✅ Launcher Modal - Conditionally rendered */}
      {onn && <Launcher open={onn} onClose={() => setonn(false)} />}
    </>
  );
};

export default Header;