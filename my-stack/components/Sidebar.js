"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const sections = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Journey", href: "/#journey" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
  ];

  return (
    <aside
      className={`hidden lg:flex flex-col fixed left-0 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${
        isOpen ? "w-48" : "w-12"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 text-slate-500 hover-color-cycle hover-green"
        aria-label="Toggle sidebar"
      >
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="flex flex-col gap-4 pl-4 pb-8">
          {sections.map((section) => (
            <li key={section.label}>
              <Link
                href={section.href}
                className="text-xs text-slate-500 hover-color-cycle hover-accent-blue uppercase tracking-widest transition-colors"
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
