import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, Terminal, Sparkles, Palette, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-mesh">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#00ffd2] rounded-full mix-blend-screen filter blur-xl animate-rotate"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-[#00ccaa] rounded-full mix-blend-screen filter blur-xl animate-rotate"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#00ffd2] rounded-full mix-blend-screen filter blur-xl animate-rotate"></div>
        </div>
        
        <div className="relative min-h-screen flex items-center justify-center px-4">
          <div className="text-center z-10">
            <div className="mb-8 inline-block animate-float-slow">
              <Sparkles className="w-16 h-16 text-[#00ffd2] drop-shadow-glow" />
            </div>
            <h1 className="text-8xl font-black mb-6 relative drop-shadow-glow">
              <span className="text-stroke">Sarfaraz</span>
              <span className="text-[#00ffd2] ml-4">Master</span>
              <span className="absolute -top-8 right-0 text-[#00ffd2] opacity-80 text-2xl animate-pulse drop-shadow-glow">Developer</span>
            </h1>
            <p className="text-xl text-white mb-12 max-w-2xl mx-auto animate-slide-in drop-shadow-text">
              hello my name is sarfraz master and i am a devops enginner at 1Rivet.
            </p>
            <div className="flex justify-center gap-6">
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:your@email.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="group relative"
                  aria-label={label}
                >
                  <div className="absolute inset-0 bg-[#00ffd2] rounded-lg blur opacity-20 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative px-6 py-3 bg-black rounded-lg border border-gray-800 hover:border-[#00ffd2] transition-colors">
                    <Icon className="w-6 h-6 text-[#00ffd2] drop-shadow-glow" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 clip-diagonal bg-zinc-900 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-16">
            <Palette className="w-12 h-12 text-[#00ffd2] drop-shadow-glow" />
            <h2 className="text-5xl font-bold text-white drop-shadow-text">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-white leading-relaxed drop-shadow-text">
                I'm a creative developer who blends technical expertise with artistic vision. 
                My approach combines innovative coding solutions with stunning visual design 
                to create memorable digital experiences.
              </p>
              <div className="flex gap-4 flex-wrap">
                <span className="px-4 py-2 bg-[#00ffd2]/10 text-[#00ffd2] rounded-full drop-shadow-glow">Backend Devloper</span>
                <span className="px-4 py-2 bg-[#00ccaa]/10 text-[#00ccaa] rounded-full drop-shadow-glow">DevOps</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80" 
                alt="Workspace"
                className="rounded-lg shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ffd2]/20 to-[#00ccaa]/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 clip-diagonal-reverse bg-black relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-16">
            <Zap className="w-12 h-12 text-[#00ffd2] drop-shadow-glow" />
            <h2 className="text-5xl font-bold text-white drop-shadow-text">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'JavaScript', color: 'yellow' },
              { name: 'React', color: 'blue' },
              { name: 'Node.js', color: 'green' },
              { name: 'TypeScript', color: 'blue' },
              { name: 'Python', color: 'yellow' },
              { name: 'AWS', color: 'orange' }
            ].map((skill, index) => (
              <div
                key={skill.name}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ffd2] to-[#00ccaa] rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative h-full p-6 bg-zinc-900 rounded-xl border border-gray-800 group-hover:border-[#00ffd2] transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-text">{skill.name}</h3>
                  <div className="w-full h-2 bg-black rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#00ffd2] to-[#00ccaa] w-4/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-16">
            <Code2 className="w-12 h-12 text-[#00ffd2] drop-shadow-glow" />
            <h2 className="text-5xl font-bold text-white drop-shadow-text">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ffd2] to-[#00ccaa] rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-black rounded-xl overflow-hidden">
                  <div className="aspect-video">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                      alt="Project Preview"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-text">Project {project}</h3>
                    <p className="text-white mb-4 drop-shadow-text">
                      An innovative solution pushing the boundaries of web development.
                    </p>
                    <div className="flex justify-between items-center">
                      <a href="#" className="inline-flex items-center text-[#00ffd2] hover:text-[#00ccaa] drop-shadow-glow">
                        View Project <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-[#00ffd2]">
                        <Github className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
      
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 relative">
          <div className="flex items-center gap-4 mb-16">
            <Mail className="w-12 h-12 text-[#00ffd2] drop-shadow-glow" />
            <h2 className="text-5xl font-bold text-white drop-shadow-text">Get in Touch</h2>
          </div>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2 drop-shadow-text">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#00ffd2] focus:border-transparent text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2 drop-shadow-text">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#00ffd2] focus:border-transparent text-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2 drop-shadow-text">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-zinc-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#00ffd2] focus:border-transparent text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#00ffd2] to-[#00ccaa] text-black font-medium hover:from-[#00ccaa] hover:to-[#00ffd2] transform hover:-translate-y-1 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 mb-8">
              {[
                { icon: Github, href: 'https://github.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Mail, href: 'mailto:your@email.com' }
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-gray-400 hover:text-[#00ffd2] transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Sarfaraz master. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;