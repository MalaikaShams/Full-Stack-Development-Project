import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">
          &copy; {new Date().getFullYear()} Built with Next.js &amp; Tailwind
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover-color-cycle hover-purple"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover-color-cycle hover-green"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
