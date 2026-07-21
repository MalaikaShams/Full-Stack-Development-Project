import Link from "next/link";

const projectsData = {
  "portfolio-site": {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js App Router and Tailwind CSS, featuring a dark theme, responsive layout, and a learning journey timeline.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    status: "In Progress",
  },
  "supabase-crud": {
    title: "Supabase CRUD App",
    description:
      "A full-stack application with user authentication and database operations powered by Supabase. Features create, read, update, and delete functionality.",
    tags: ["Supabase", "React", "JavaScript"],
    status: "Completed",
  },
};

export function generateStaticParams() {
  return Object.keys(projectsData).map((projectId) => ({ projectId }));
}

export async function generateMetadata({ params }) {
  const project = projectsData[params.projectId];
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }) {
  const project = projectsData[params.projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-slate-500 mb-6">
            The project you&apos;re looking for doesn&apos;t exist yet.
          </p>
          <Link
            href="/#projects"
            className="text-accent-blue hover-color-cycle text-sm"
          >
            &larr; Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 pt-28 pb-24">
      <div className="max-w-3xl mx-auto lg:ml-48">
        <Link
          href="/#projects"
          className="text-sm text-slate-500 hover-color-cycle hover-purple inline-block mb-8"
        >
          &larr; Back to Projects
        </Link>

        <div className="mb-8">
          <span
            className={`text-xs px-3 py-1 rounded-full border ${
              project.status === "Completed"
                ? "border-accent-green/30 text-accent-green"
                : "border-accent-purple/30 text-accent-purple"
            }`}
          >
            {project.status}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-white mb-6">{project.title}</h1>

        <p className="text-slate-400 leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1.5 rounded-lg bg-slate-800/60 text-accent-blue border border-slate-700/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="p-8 rounded-xl border border-slate-800 bg-slate-900/30">
          <h2 className="text-lg font-semibold text-white mb-3">
            Project Details
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            More details about this project will be added soon, including
            architecture decisions, challenges faced, and lessons learned during
            development.
          </p>
        </div>
      </div>
    </div>
  );
}
