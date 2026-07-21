"use client";

import React from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import ContactForm from "../components/ContactForm";

const projects = [
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    description: "This site — built with Next.js App Router and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    id: "supabase-crud",
    title: "Supabase CRUD App",
    description: "A full-stack app with database integration using Supabase.",
    tags: ["Supabase", "React", "JavaScript"],
  },
];

const skills = [
  { name: "HTML / CSS", level: 70 },
  { name: "JavaScript", level: 55 },
  { name: "React", level: 50 },
  { name: "Next.js", level: 45 },
  { name: "Tailwind CSS", level: 60 },
  { name: "Supabase", level: 35 },
  { name: "Node.js", level: 40 },
  { name: "Git / GitHub", level: 50 },
];

const journey = [
  {
    date: "July 2026",
    title: "Started Full-Stack Development",
    description:
      "Began learning HTML, CSS, and JavaScript as the foundation of web development.",
  },
  {
    date: "July 2026",
    title: "Built First Projects",
    description:
      "Completed introductory projects to solidify core concepts and development workflow.",
  },
  {
    date: "July 2026",
    title: "Learned React & Next.js",
    description:
      "Dived into component-based architecture with React and server-side rendering with Next.js App Router.",
  },
  {
    date: "July 2026",
    title: "Integrated Supabase",
    description:
      "Built a full-stack CRUD application using Supabase for authentication and database management.",
  },
  {
    date: "July 2026",
    title: "Styling with Tailwind CSS",
    description:
      "Adopted utility-first CSS for rapid, consistent UI development across projects.",
  },
];

export default function Home() {
  return (
    <>
      <Sidebar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-2xl text-center lg:ml-48">
          <p className="text-sm text-accent-green mb-4 tracking-widest uppercase">
            Full-Stack Development Learner
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-accent-blue hover-color-cycle">your</span>{" "}
            <span className="text-accent-purple hover-color-cycle">name</span>{" "}
            <span className="text-accent-green hover-color-cycle">here</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            I&apos;m learning to build for the web — one project at a time.
            Currently exploring full-stack development with React, Next.js, and
            Supabase.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/#projects"
              className="px-6 py-3 rounded-lg bg-accent-purple text-[#0a0a0f] font-semibold text-sm hover-btn-cycle border border-transparent"
            >
              View Projects
            </Link>
            <Link
              href="/#about"
              className="px-6 py-3 rounded-lg border border-slate-700 text-slate-300 text-sm hover-btn-cycle"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-3xl mx-auto lg:ml-48">
          <h2 className="text-2xl font-bold text-white mb-8">
            <span className="text-accent-blue">#</span> About Me
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I&apos;m a full-stack development learner passionate about
              understanding how the web works from front to back. I believe in
              learning by doing — every project is a chance to solve real
              problems and build something meaningful.
            </p>
            <p>
              Currently, I&apos;m focused on mastering the JavaScript ecosystem
              with React and Next.js on the frontend, while exploring Supabase
              and Node.js for backend and database integration.
            </p>
            <p>
              This portfolio is both a project and a documentation of my growth
              as a developer. Every entry in my learning journey is honest — no
              fake titles, no inflated experience, just the real path of someone
              learning to code.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section id="journey" className="py-24 px-6">
        <div className="max-w-3xl mx-auto lg:ml-48">
          <h2 className="text-2xl font-bold text-white mb-12">
            <span className="text-accent-purple">#</span> Learning Journey
          </h2>
          <div className="timeline-line pl-8 space-y-10">
            {journey.map((entry, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-[#0a0a0f] border-2 border-accent-purple" />
                <p className="text-xs text-accent-green tracking-wider uppercase mb-1">
                  {entry.date}
                </p>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {entry.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {entry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-3xl mx-auto lg:ml-48">
          <h2 className="text-2xl font-bold text-white mb-12">
            <span className="text-accent-green">#</span> Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block p-6 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-accent-purple/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-slate-800 text-accent-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-3xl mx-auto lg:ml-48">
          <h2 className="text-2xl font-bold text-white mb-12">
            <span className="text-accent-blue">#</span> Skills
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-300">{skill.name}</span>
                  <span className="text-xs text-slate-600">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto lg:ml-48">
          <h2 className="text-2xl font-bold text-white mb-12">
            <span className="text-accent-purple">#</span> Contact
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
