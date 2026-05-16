export default function GameDevPortfolio() {
  const projects = [
    {
      title: "Slime Sling",
      genre: "Physics Platformer",
      description:
        "A vertical slime-jump platformer inspired by slingshot mechanics, focused on juicy movement, level progression, and satisfying gameplay feedback.",
      tech: ["Unity", "C#", "Custom Level Editor", "ScriptableObjects"],
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Arcade Racing Game",
      genre: "Arcade Racing",
      description:
        "A retro-inspired mobile racing game with manual and auto drift systems, optimized architecture, and scalable gameplay systems.",
      tech: ["Unity", "SOLID", "Mobile Optimization", "Object Pooling"],
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Pocket Tank Inspired Multiplayer",
      genre: "Strategy / Multiplayer",
      description:
        "A competitive artillery game prototype with server-driven gameplay logic and scalable multiplayer architecture.",
      tech: ["Unity", "Backend Architecture", "Networking", "Game Physics"],
      image:
        "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const skills = [
    "Unity",
    "C#",
    "Game Architecture",
    "Gameplay Programming",
    "Mobile Optimization",
    "Level Editor Tools",
    "UI Systems",
    "Physics Systems",
    "Backend Integration",
    "Git",
    "Cocos2d-x",
    "C++",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-black to-black opacity-90" />

        <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-indigo-400 mb-4">
              Senior Game Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Building Gameplay
              <span className="block text-indigo-400">That Players Remember</span>
            </h1>

            <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              I design and develop gameplay systems, game architecture,
              multiplayer foundations, and scalable tooling for modern games.
              Passionate about creating memorable player experiences through
              polished mechanics and clean engineering.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 transition rounded-2xl font-semibold"
              >
                View Projects
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                className="px-6 py-3 border border-zinc-700 hover:border-indigo-400 hover:bg-zinc-900 transition rounded-2xl font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-indigo-500/20 rounded-full" />

            <div className="relative bg-zinc-950 border border-zinc-800 rounded-[2rem] p-6 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
                alt="Gaming"
                className="rounded-2xl h-[500px] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-28 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Gameplay Programmer & Systems Engineer
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              I specialize in gameplay programming, scalable game architecture,
              and custom tooling. My focus is on creating maintainable systems
              while preserving the fun and responsiveness players expect.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed">
              My experience includes mobile games, racing mechanics, physics
              systems, multiplayer concepts, level editors, optimization, and
              production-grade Unity workflows.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 hover:border-indigo-500 transition"
              >
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-28 px-6 border-t border-zinc-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm mb-4">
              Featured Projects
            </p>

            <h2 className="text-5xl font-bold">Selected Work</h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-zinc-950 border border-zinc-800 rounded-[2rem] overflow-hidden hover:border-indigo-500 transition duration-300"
              >
                <div className="overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full">
                      {project.genre}
                    </span>
                  </div>

                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="text-sm bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-indigo-500 transition font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-28 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm mb-4">
              Experience
            </p>

            <h2 className="text-5xl font-bold">Career Journey</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-zinc-950 border border-zinc-800 rounded-[2rem] p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Senior Software Engineer</h3>
                  <p className="text-indigo-400">Paytm First Games</p>
                </div>

                <p className="text-zinc-500">Current</p>
              </div>

              <p className="text-zinc-400 leading-relaxed">
                Working on scalable game systems, gameplay features, architecture,
                optimization, and production workflows for mobile gaming
                platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-28 px-6 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Let’s Build Something Incredible
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Open to game development opportunities, collaborations, indie game
            projects, and technical consulting.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:umitpradhan@gmail.com"
              className="px-8 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-400 transition font-semibold"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/umit-pradhan-93b324ab/"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-zinc-700 hover:border-indigo-400 hover:bg-zinc-900 transition font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-8 px-6 text-center text-zinc-500">
        <p>© 2026 Umit Pradhan — Sparrow's Studio</p>
      </footer>
    </div>
  );
}
