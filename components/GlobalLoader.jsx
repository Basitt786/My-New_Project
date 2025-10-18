"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function GlobalLoader({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  // Jab bhi route change ho ya page mount ho, loader dikhao
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // animation feel
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-[9999] transition-all">
          <div className="w-10 h-10 border-4 border-t-transparent border-indigo-500 rounded-full animate-spin"></div>
        </div>
      )}
      <div
        className={`transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
