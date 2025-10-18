"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import myimage from "@/public/imagge.png";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import Launcher from "./Launcher";

export default function Sheetbar() {
  const [open, setOpen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [onn, setonn] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "Projects",
      submenu: [
        { name: "My Store", href: "https://my-store1-dy0u6m568-syed-basit-alis-projects.vercel.app" },
        { name: "Pokemon Site", href: "https://basitt786.github.io/Pokemon-Card/" },
        { name: "Todo App", href: "https://basitt786.github.io/Todo-App/" },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];


  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleContactClick = () => {
    setOpen(false); 
    setTimeout(() => {
      setonn(true); 
    }, 300);
  };

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              className={`group shadow-lg hover:shadow-xl transition-all duration-300 rounded-full ${
                open
                  ? "bg-red-500 text-white scale-110"
                  : "bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 text-black hover:from-amber-400 hover:to-yellow-500"
              }`}
              variant="outline"
              size="icon"
              onClick={() => setOpen((prev) => !prev)}
            >
              <motion.svg
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.4 }}
                className="pointer-events-none"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12L20 12" />
                <path d="M4 6H20" />
                <path d="M4 18H20" />
              </motion.svg>
            </Button>
          </motion.div>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-[440px] sm:!w-[320px] md:!w-[425px] max-w-full h-auto bg-gradient-to-b from-indigo-700 via-indigo-800 to-indigo-900 text-white border-none shadow-2xl"
        >
          <SheetHeader>
            <SheetTitle>
              <header className="flex flex-col items-center justify-center mb-6 border-b border-indigo-500 pb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={myimage}
                    alt="Portfolio"
                    placeholder="blur"
                    blurDataURL=""
                    className="rounded-full object-cover w-16 h-16 border-2 border-amber-300 shadow-md"
                  />
                </motion.div>

                <Link href="/">
                  <motion.h1
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-3 text-3xl font-sans font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 text-transparent bg-clip-text drop-shadow"
                  >
                    Portfolio
                  </motion.h1>
                </Link>
              </header>
            </SheetTitle>
          </SheetHeader>

          <motion.h1
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 text-transparent bg-clip-text drop-shadow-md tracking-wide"
          >
            Welcome to portfolio!
          </motion.h1>

          {/* Menu Items */}
          <motion.div
            className="mt-8 flex flex-col items-center space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-full text-center"
              >
                {/* Contact Button - Special handling */}
                {item.name === "Contact" ? (
                  <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer px-6 py-2 text-lg rounded-xl bg-indigo-700/40 hover:bg-indigo-600/60 transition-all shadow hover:shadow-indigo-500/30"
                    onClick={handleContactClick}
                  >
                    {item.name}
                  </motion.div>
                ) : item.name !== "Projects" ? (
                  <Link href={item.href || "#"} onClick={() => setOpen(false)}>
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="cursor-pointer px-6 py-2 text-lg rounded-xl bg-indigo-700/40 hover:bg-indigo-600/60 transition-all shadow hover:shadow-indigo-500/30"
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ) : (
                  // Projects Dropdown
                  <>
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowProjects(!showProjects)}
                      className="cursor-pointer px-6 py-2 flex items-center justify-center space-x-2 text-lg rounded-xl bg-indigo-700/50 hover:bg-indigo-600/70 transition-all shadow hover:shadow-indigo-500/40"
                    >
                      <span>Projects</span>
                      {showProjects ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </motion.div>

                    <AnimatePresence>
                      {showProjects && (
                        <motion.div
                          className="mt-3 flex flex-col items-center space-y-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          {item.submenu.map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              href={sub.href}
                              onClick={() => setOpen(false)}
                            >
                              <motion.div
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="cursor-pointer w-3/4 px-4 py-1.5 text-sm rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 transition-all shadow-sm text-indigo-100"
                              >
                                {sub.name}
                              </motion.div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </SheetContent>
      </Sheet>

      {/* Launcher Modal - Sheet ke bahar */}
      {onn && <Launcher open={onn}  onClose={() => setonn(false)} />}
    </>
  );
}