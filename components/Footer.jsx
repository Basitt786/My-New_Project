"use client";
import myimage from "@/public/imagge.png";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const projects = [
    { name: "My Store", href: "/projects/mystore" },
    { name: "Pokemon Site", href: "/projects/pokemon" },
    { name: "Todo App", href: "/projects/todoapp" },
  ];

  const socials = [
    {
      title: "Email",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          className="w-5 h-5"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
    },
    {
      title: "Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M50 10c-2 1-4 2-6 2 2-1 3-3 4-5-2 1-4 2-6 2-2-2-4-3-6-3 0 0-2 0-4 1-4 1-6 4-7 6-6 0-10 3-12 6-3 3-4 7-4 11 0 1 0 2 0 3s0 2 0 3c0 0 0 0 0 0h0c3 0 6-1 8-3s4-4 5-6c2 0 3 0 4 1 2 1 3 2 4 3 1 2 2 4 3 6" />
        </svg>
      ),
    },
    {
      title: "GitHub",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M10.9 2.1c-4.6.5-8.3 4.2-8.8 8.7-.5 4.7 2.2 8.9 6.3 10.5.4.2.7.1.7-.3v-1.6c-.5 0-.9.1-.9.1-1.4 0-2-1.2-2.1-1.9-.1-.4-.3-.7-.6-1 0 0 0 0 0 0 .1-.1.3 0 .4 0 .6 0 1.1.7 1.3 1 .5.8 1.1 1 1.4 1 .4 0 .7-.1.9-.2.1-.7.4-1.4 1-1.8-2.3-.5-4-1.8-4-4 0-1.1.5-2.2 1.2-3s-0.1-0.5-0.1-1.2c0-.4 0-.9.3-1.5 0 0 1.4 0 2.8 1.3s1.7 1 2.4 1 1.4-.1 2-.3c0-.7 1.5-1.5 1.5-1.5" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="py-12 bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-700 text-gray-50">
      <div className="container px-6 mx-auto space-y-10 divide-y divide-gray-400 divide-opacity-30 md:space-y-16">

        {/* Logo Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-6 flex flex-col md:flex-row md:items-center md:space-x-4">
            <Link href="/" className="flex justify-center md:justify-start items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={myimage}
                  alt="Portfolio"
                  placeholder="blur"
                  className="rounded-full w-14 h-14 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 shadow-lg"
                />
              </motion.div>
              <motion.h1
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="text-3xl sm:text-xl md:text-3xl lg:text-4xl font-extrabold font-sans bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(251,191,36,0.7)] tracking-wide cursor-pointer select-none"
              >
                Portfolio
              </motion.h1>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-3 text-center md:text-left">
            <p className="pb-3 text-lg font-semibold tracking-wide text-indigo-100">Quick Links</p>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-300 hover:text-amber-400 hover:underline hover:underline-offset-4"
                  >
                   {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="col-span-1 md:col-span-3 text-center md:text-left">
            <p className="pb-3 text-lg font-semibold tracking-wide text-indigo-100">Projects</p>
            <ul className="space-y-2">
              {projects.map((proj) => (
                <li key={proj.name}>
                  <Link
                    href={proj.href}
                    className="transition-colors duration-300 hover:text-amber-400 hover:underline hover:underline-offset-4"
                  >
                    {proj.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-8 gap-6 items-center">
          <div className="flex flex-col md:flex-row md:space-x-6 justify-center md:justify-start text-sm text-center md:text-left space-y-2 md:space-y-0 text-indigo-100">
            <span>©2025 All rights reserved</span>
            <Link href="#" className="hover:text-amber-400 transition-colors duration-300">
              Privacy policy
            </Link>
            <Link href="#" className="hover:text-amber-400 transition-colors duration-300">
              Terms of service
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end space-x-4">
            {socials.map((social) => (
              <motion.a
                key={social.title}
                href="#"
                title={social.title}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-400 text-gray-900 shadow-lg transition-transform duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
