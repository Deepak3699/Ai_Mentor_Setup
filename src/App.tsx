import React, { useState } from 'react';
import { 
  Code2, 
  BookOpen, 
  CheckCircle2, 
  GitPullRequest, 
  ArrowRight, 
  ExternalLink, 
  Info,
  Layers, 
  Layout, 
  MessageSquare, 
  Search, 
  Zap, 
  PlayCircle 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom GitHub Icon since it wasn't exporting correctly before
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('welcome');



  const sidebarItems = [
    { id: 'welcome', label: 'Home', icon: <Layout className="w-5 h-5" /> },
    { id: 'setup', label: 'Onboarding Guide', icon: <Zap className="w-5 h-5" /> },
    { id: 'env', label: 'Environment Variables', icon: <Layers className="w-5 h-5" /> },
    { id: 'github', label: 'Git & PR Workflow', icon: <GitHubIcon className="w-5 h-5" /> },
    { id: 'resources', label: 'Learning Links', icon: <BookOpen className="w-5 h-5" /> },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-hidden">
      {/* Sidebar */}
      <div className="w-72 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-8 border-b border-slate-100 flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-200">
            <Zap className="w-6 h-6 fill-current" />
          </div>
          <span className="font-bold text-2xl tracking-tight text-indigo-900">Ai Mentor</span>
        </div>
        <nav className="flex-1 p-6 space-y-2">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200 ${
                activeTab === item.id 
                  ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-100 scale-[1.02]' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className={activeTab === item.id ? 'text-white' : 'text-slate-400'}>
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-6">
          <div className="bg-indigo-50 rounded-2xl p-5 border border-indigo-100">
            <p className="font-bold text-indigo-900 text-sm mb-2">Need Quick Help?</p>
            <p className="text-indigo-700 text-xs leading-relaxed">
              Ask your Ai Mentor anything about the project or GitHub. We are here to help!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-10 lg:p-16">
        <AnimatePresence mode="wait">
          {activeTab === 'welcome' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              key="welcome"
              className="max-w-5xl"
            >
              <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    INTERN GUIDE
                  </div>
                  <h1 className="text-6xl font-black mb-6 text-slate-900 leading-tight">
                    Master your Internship with <span className="text-indigo-600">Ai Mentor</span>
                  </h1>
                  <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl">
                    Starting an internship is hard. Learning GitHub and coding at the same time is harder. 
                    We've built this simple guide to help you get through your first week with zero stress.
                  </p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setActiveTab('github')}
                      className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                    >
                      Start Learning <ArrowRight className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => setActiveTab('resources')}
                      className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all"
                    >
                      View Resources
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-[400px]">
                  <img src="/hero-intern.jpg" alt="Ai Mentor Guide" className="rounded-[40px] shadow-2xl border-8 border-white w-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "No Coding Experience?", desc: "That's fine! We start from the very basics of HTML and CSS.", icon: <Code2 />, color: "bg-blue-50 text-blue-600" },
                  { title: "Zero GitHub Knowledge?", desc: "We explain GitHub using simple analogies like Google Drive.", icon: <GitHubIcon />, color: "bg-purple-50 text-purple-600" },
                  { title: "Need Mentor Support?", desc: "English resources and documentation linked for your help.", icon: <MessageSquare />, color: "bg-green-50 text-green-600" }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'setup' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              key="setup"
              className="max-w-5xl"
            >
              <div className="mb-12">
                <h2 className="text-4xl font-black mb-4">Onboarding & Initial Setup 🚀</h2>
                <p className="text-lg text-slate-500">
                  Follow these steps in order. Do not change any application code yet.
                </p>
              </div>

              {/* Services Overview */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Layers className="text-indigo-600" /> 0. The 5 Services
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider">
                      <tr>
                        <th className="p-4 rounded-tl-xl">Service</th>
                        <th className="p-4">Folder</th>
                        <th className="p-4">Port</th>
                        <th className="p-4 rounded-tr-xl">URL</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { name: "backend", folder: "backend/", port: "5000", url: "http://localhost:5000" },
                        { name: "frontend", folder: "frontend/", port: "5173", url: "http://localhost:5173" },
                        { name: "backendAdmin", folder: "backendAdmin/", port: "5001", url: "http://localhost:5001" },
                        { name: "frontendAdmin", folder: "frontendAdmin/", port: "5174", url: "http://localhost:5174" },
                        { name: "ai_service", folder: "ai_service/", port: "8000", url: "http://localhost:8000/docs" },
                      ].map((s, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-indigo-600">{s.name}</td>
                          <td className="p-4 font-mono text-slate-500">{s.folder}</td>
                          <td className="p-4">{s.port}</td>
                          <td className="p-4 text-blue-500 underline">{s.url}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-indigo-50 rounded-2xl text-indigo-700 text-sm">
                  <strong>Important:</strong> Always start <code>backend</code> before <code>backendAdmin</code>.
                </div>
              </div>

              {/* Prerequisites */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-500" /> 1. Prerequisites
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between border-b pb-2"><span>Node.js 18+</span><code className="bg-slate-100 px-2 rounded">node -v</code></div>
                    <div className="flex justify-between border-b pb-2"><span>Python 3.10+</span><code className="bg-slate-100 px-2 rounded">python --version</code></div>
                    <div className="flex justify-between border-b pb-2"><span>PostgreSQL / Neon</span><code className="bg-slate-100 px-2 rounded">psql --version</code></div>
                    <div className="flex justify-between border-b pb-2"><span>FFmpeg</span><code className="bg-slate-100 px-2 rounded">ffmpeg -version</code></div>
                  </div>
                </div>

                <div className="bg-indigo-900 text-white p-8 rounded-[32px] shadow-xl">
                  <h3 className="text-xl font-bold mb-4">2. Get the Code</h3>
                  <div className="bg-black/30 p-4 rounded-xl font-mono text-xs text-indigo-300 break-all">
                    git clone https://github.com/Deepak3699/Ai_Mentor.git<br/>
                    cd Ai_Mentor
                  </div>
                </div>
              </div>

              {/* Database Setup */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm mb-12">
                <h3 className="text-2xl font-bold mb-6">3. Database (Neon Setup)</h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 font-bold">1</div>
                    <p className="text-slate-600 pt-1">Sign up at <strong>neon.tech</strong> and create a project named <strong>AI Mentor</strong>.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 font-bold">2</div>
                    <p className="text-slate-600 pt-1">Select Region: <strong>Singapore (ap-southeast-1)</strong>.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 font-bold">3</div>
                    <p className="text-slate-600 pt-1">Copy the <strong>connection string</strong> and save it for later.</p>
                  </div>
                </div>
              </div>

              {/* Install & Run */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm mb-12">
                <h3 className="text-2xl font-bold mb-6">6. Install & Start</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wider">Install Everything</p>
                    <div className="bg-slate-900 text-emerald-400 p-4 rounded-xl font-mono text-sm">
                      npm run setup
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wider">Start Web Services</p>
                    <div className="bg-slate-900 text-emerald-400 p-4 rounded-xl font-mono text-sm">
                      npm run dev
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wider">Start AI Service (Separate Terminal)</p>
                    <div className="bg-slate-900 text-emerald-400 p-4 rounded-xl font-mono text-sm">
                      cd ai_service/backend && python graceful_server.py
                    </div>
                  </div>
                </div>
              </div>

              {/* Verification Table */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold mb-6">9. Verification Checklist</h3>
                <div className="space-y-4">
                  {[
                    { check: "Backend Live", url: "http://localhost:5000/health/live", result: "{\"status\":\"alive\"}" },
                    { check: "Admin Live", url: "http://localhost:5001/health/live", result: "{\"status\":\"alive\"}" },
                    { check: "AI Service", url: "http://localhost:8000", result: "AI Lesson Generator Backend Running" },
                  ].map((v, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-50 rounded-2xl gap-4">
                      <span className="font-bold">{v.check}</span>
                      <code className="text-xs bg-white px-2 py-1 rounded border break-all">{v.url}</code>
                      <span className="text-xs text-slate-400 italic">Expected: {v.result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'env' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              key="env"
              className="max-w-5xl"
            >
              <div className="mb-12">
                <h2 className="text-4xl font-black mb-4">Environment Variables 🔐</h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  You need to create 5 separate <code>.env</code> files. Follow the instructions carefully.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-6 rounded-[32px] mb-12 flex gap-4 items-start">
                <Info className="text-amber-600 w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-amber-900 mb-1 text-lg">Step 4: Create the 5 files</h4>
                  <p className="text-amber-800 leading-relaxed">
                    Run these commands in the project root to copy the templates:
                  </p>
                  <div className="bg-black/80 text-amber-200 p-4 rounded-xl font-mono text-xs mt-3 space-y-1">
                    <div>cp backend/.env.example backend/.env</div>
                    <div>cp frontend/.env.example frontend/.env</div>
                    <div>cp backendAdmin/.env.example backendAdmin/.env</div>
                    <div>cp frontendAdmin/.env.example frontendAdmin/.env</div>
                    <div>cp ai_service/backend/.env.example ai_service/backend/.env</div>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                {[
                  {
                    title: "backend/.env",
                    desc: "Critical: The server will not start without these.",
                    vars: [
                      { k: "NEON_DATABASE_URL", v: "Your Neon string" },
                      { k: "JWT_SECRET", v: "Random long string" },
                      { k: "STRIPE_SECRET_KEY", v: "sk_test_..." },
                      { k: "RAZORPAY_KEY_ID", v: "rzp_test_..." }
                    ]
                  },
                  {
                    title: "ai_service/backend/.env",
                    desc: "Required for AI features to function.",
                    vars: [
                      { k: "GEMINI_API_KEY", v: "From Google AI Studio" },
                      { k: "GROQ_API_KEY", v: "From Groq Console" },
                      { k: "CLOUDINARY_CLOUD_NAME", v: "Cloudinary dashboard" }
                    ]
                  },
                  {
                    title: "frontend/.env",
                    desc: "Used by the learner web application.",
                    vars: [
                      { k: "VITE_API_BASE_URL", v: "http://localhost:5000" },
                      { k: "VITE_FIREBASE_API_KEY", v: "From Firebase settings" }
                    ]
                  }
                ].map((sec, i) => (
                  <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
                    <h3 className="text-2xl font-bold mb-2">{sec.title}</h3>
                    <p className="text-slate-500 mb-6">{sec.desc}</p>
                    <div className="space-y-3">
                      {sec.vars.map((v, j) => (
                        <div key={j} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                          <code className="text-indigo-600 font-bold">{v.k}</code>
                          <span className="text-slate-400 text-sm">{v.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'github' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              key="github"
              className="max-w-4xl"
            >
              <div className="mb-12">
                <h2 className="text-4xl font-black mb-4 text-slate-900 font-serif">Workflow & Pull Requests 🔱</h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  How to work on features and send your code back to the main project.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-[40px] border-2 border-slate-100">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="bg-purple-100 p-2 rounded-xl text-purple-600 font-serif font-black italic text-sm">A</span>
                    Step 1: Create a Branch
                  </h3>
                  <p className="text-slate-600 mb-6">Never work directly on the 'main' branch. Always create a new one for each task.</p>
                  <div className="bg-slate-900 text-indigo-300 p-6 rounded-2xl font-mono text-sm space-y-2">
                    <div className="text-slate-500"># Make sure you are on main</div>
                    <code>git checkout main</code>
                    <div className="text-slate-500 mt-4"># Create and switch to new branch</div>
                    <code>git checkout -b feature/setup-neon-db</code>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[40px] border-2 border-slate-100">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="bg-blue-100 p-2 rounded-xl text-blue-600 font-serif font-black italic text-sm">B</span>
                    Step 2: Commit & Push
                  </h3>
                  <div className="bg-slate-900 text-indigo-300 p-6 rounded-2xl font-mono text-sm space-y-2">
                    <div className="text-slate-500"># Save your changes</div>
                    <code>git add .</code>
                    <code>git commit -m "feat: connected neon database"</code>
                    <div className="text-slate-500 mt-4"># Send to your GitHub</div>
                    <code>git push origin feature/setup-neon-db</code>
                  </div>
                </div>

                <div className="bg-indigo-600 text-white p-10 rounded-[40px] shadow-2xl shadow-indigo-200">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <GitPullRequest className="w-8 h-8" /> Raising a Pull Request (PR)
                  </h3>
                  <ol className="space-y-4 text-indigo-50 font-medium">
                    <li className="flex gap-4">
                      <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">1</span>
                      Go to your fork on GitHub: <span className="underline italic">Deepak3699/Ai_Mentor</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">2</span>
                      You will see a yellow bar saying "Compare & pull request". Click it!
                    </li>
                    <li className="flex gap-4">
                      <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">3</span>
                      Write a clear title and description of what you did.
                    </li>
                    <li className="flex gap-4">
                      <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">4</span>
                      Click "Create Pull Request". Now wait for the mentor to review!
                    </li>
                  </ol>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'coding' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              key="coding"
              className="max-w-4xl"
            >
              <h2 className="text-4xl font-black mb-4 text-slate-900">Coding 101 💻</h2>
              <p className="text-lg text-slate-500 mb-12 leading-relaxed">
                We use **React** and **Tailwind CSS**. Think of React as the "Skeleton" and Tailwind as the "Paint & Clothes" of your website.
              </p>

              <div className="grid grid-cols-1 gap-8">
                <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="bg-blue-100 p-2 rounded-xl text-blue-600"><Layout className="w-6 h-6" /></span>
                    Core Concepts for Beginners
                  </h3>
                  <div className="space-y-10">
                    <div className="flex gap-6">
                      <div className="text-3xl font-black text-slate-200">01</div>
                      <div>
                        <h4 className="font-bold text-xl text-slate-800 mb-2">The Component Secret</h4>
                        <p className="text-slate-500 leading-relaxed">
                          In React, we don't build one giant file. We build tiny pieces like "Navbar", "Footer", and "Card" and then put them together like LEGO blocks.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="text-3xl font-black text-slate-200">02</div>
                      <div>
                        <h4 className="font-bold text-xl text-slate-800 mb-2">The Tailwind Magic</h4>
                        <p className="text-slate-500 leading-relaxed">
                          Instead of writing separate CSS files, we just type simple classes directly on our elements.
                        </p>
                        <div className="bg-slate-50 p-6 mt-4 rounded-2xl border border-slate-100 font-mono text-sm text-indigo-600 overflow-x-auto">
                          {'<div className="bg-red-500 p-10 rounded-full"> Hello </div>'}
                        </div>
                        <p className="text-xs text-slate-400 mt-3 font-medium uppercase tracking-wider">
                          (Red Background, Big Padding, Circular Shape)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900 text-white p-10 rounded-[40px] shadow-xl shadow-indigo-200 flex items-center gap-8 relative overflow-hidden">
                  <div className="relative z-10 flex-1">
                    <h3 className="text-2xl font-bold mb-4">A Note from your Mentor</h3>
                    <p className="text-indigo-100 text-lg italic leading-relaxed">
                      "Coding is not about memorizing syntax. It's about problem-solving. Use Google, use ChatGPT, and don't be afraid to break things. That's how we all learned!"
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 p-10 opacity-10">
                    <MessageSquare className="w-32 h-32" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'resources' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key="resources"
              className="max-w-5xl"
            >
              <h2 className="text-4xl font-black mb-4">Learning Path 📚</h2>
              <p className="text-lg text-slate-500 mb-12">
                We've hand-picked the best English resources for absolute beginners.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "GitHub Crash Course",
                    provider: "Traversy Media",
                    type: "Video",
                    desc: "Perfect 20-minute guide for Git & GitHub basics.",
                    link: "https://www.youtube.com/watch?v=RGOj5yH7evk",
                    icon: <PlayCircle className="text-red-500" />
                  },
                  {
                    title: "React Documentation",
                    provider: "Official React Team",
                    type: "Docs",
                    desc: "The 'Thinking in React' guide is a must-read.",
                    link: "https://react.dev/learn/thinking-in-react",
                    icon: <Search className="text-blue-500" />
                  },
                  {
                    title: "Tailwind Components",
                    provider: "Flowbite",
                    type: "Reference",
                    desc: "Copy-paste pre-built UI components.",
                    link: "https://flowbite.com/",
                    icon: <Layers className="text-cyan-500" />
                  },
                  {
                    title: "MDN Web Docs",
                    provider: "Mozilla",
                    type: "Encyclopedia",
                    desc: "The bible of HTML, CSS, and JavaScript.",
                    link: "https://developer.mozilla.org/",
                    icon: <BookOpen className="text-orange-500" />
                  },
                  {
                    title: "GitHub Desktop",
                    provider: "GitHub",
                    type: "Tool",
                    desc: "Don't like the terminal? Use this easy visual app.",
                    link: "https://desktop.github.com/",
                    icon: <GitHubIcon className="text-slate-800" />
                  },
                  {
                    title: "FreeCodeCamp",
                    provider: "Community",
                    type: "Full Course",
                    desc: "300+ hours of free coding education.",
                    link: "https://www.freecodecamp.org/",
                    icon: <Code2 className="text-green-600" />
                  }
                ].map((res, i) => (
                  <a 
                    key={i} 
                    href={res.link} 
                    target="_blank" 
                    className="bg-white p-8 rounded-[32px] border border-slate-100 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-50 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-indigo-50 transition-colors">
                        {res.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest bg-slate-100 px-2 py-1 rounded text-slate-500">
                        {res.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">{res.title}</h3>
                    <p className="text-xs text-indigo-500 font-bold mb-4 uppercase tracking-tighter">{res.provider}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{res.desc}</p>
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                      Open Resource <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'tasks' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              key="tasks"
              className="max-w-3xl"
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-4xl font-black">Onboarding Checklist ✅</h2>
                <div className="bg-green-100 text-green-700 px-6 py-2 rounded-2xl text-sm font-black">
                  25% COMPLETE
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Understand what GitHub is (Analogies)", status: "completed" },
                  { title: "Fork the project repository", status: "completed" },
                  { title: "Clone the repo to your local machine", status: "pending" },
                  { title: "Install dependencies (npm install)", status: "pending" },
                  { title: "Change your name in the intern list", status: "pending" },
                  { title: "Create your first Pull Request", status: "pending" },
                ].map((task, i) => (
                  <div 
                    key={i} 
                    className={`p-8 rounded-3xl border-2 flex items-center gap-6 transition-all ${
                      task.status === 'completed' 
                        ? 'bg-slate-50 border-slate-100 opacity-60' 
                        : 'bg-white border-slate-100 shadow-sm hover:border-indigo-200'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                      task.status === 'completed' 
                        ? 'bg-green-500 text-white shadow-lg shadow-green-100' 
                        : 'border-2 border-slate-200'
                    }`}>
                      {task.status === 'completed' && <CheckCircle2 className="w-5 h-5" />}
                    </div>
                    <span className={`flex-1 text-lg font-bold ${task.status === 'completed' ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                      {task.title}
                    </span>
                    <span className={`text-[10px] px-3 py-1 rounded-full font-black tracking-widest ${
                      task.status === 'completed' ? 'bg-slate-200 text-slate-500' : 'bg-indigo-100 text-indigo-600'
                    }`}>
                      {task.status.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
