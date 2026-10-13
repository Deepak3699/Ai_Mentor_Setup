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
  PlayCircle,
  Copy,
  Check,
  Database,
  Server,
  Terminal,
  GitBranch,
  Cpu,
  AlertTriangle,
  FileCode,
  ShieldCheck,
  RefreshCw,
  Globe,
  ChevronRight,
  Sparkles,
  HelpCircle,
  CheckSquare,
  Square
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom GitHub Icon
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

// Copy to Clipboard Component
const CodeSnippet: React.FC<{ code: string; language?: string; title?: string }> = ({ code, language = 'bash', title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#0F172A] my-3 shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs text-slate-400 font-mono">
        <span className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-indigo-400" />
          {title || language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs font-sans"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 text-xs md:text-sm font-mono text-emerald-400 overflow-x-auto leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('welcome');
  const [selectedEnvService, setSelectedEnvService] = useState('backend');
  const [completedTasks, setCompletedTasks] = useState<number[]>([0, 1]);

  const toggleTask = (index: number) => {
    setCompletedTasks(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const REPO_URL = "https://github.com/Deepak3699/Ai_Mentor";

  const sidebarItems = [
    { id: 'welcome', label: 'Overview & Home', icon: <Layout className="w-5 h-5" /> },
    { id: 'github-setup', label: '1. Git & Fork Setup', icon: <GitHubIcon className="w-5 h-5" /> },
    { id: 'dependencies', label: '2. Dependencies Install', icon: <Cpu className="w-5 h-5" /> },
    { id: 'neon-db', label: '3. Neon DB Setup (SG)', icon: <Database className="w-5 h-5" /> },
    { id: 'env', label: '4. Environment (.env)', icon: <Layers className="w-5 h-5" /> },
    { id: 'running', label: '5. Run Services & Test', icon: <Zap className="w-5 h-5" /> },
    { id: 'github', label: '6. Branching & PR Guide', icon: <GitPullRequest className="w-5 h-5" /> },
    { id: 'checklist', label: 'Checklist & FAQ', icon: <CheckCircle2 className="w-5 h-5" /> },
    { id: 'resources', label: 'Learning Resources', icon: <BookOpen className="w-5 h-5" /> },
  ];

  const tasksList = [
    { title: "Fork https://github.com/Deepak3699/Ai_Mentor to your GitHub account", category: "Git" },
    { title: "Clone the forked repository to your local machine", category: "Git" },
    { title: "Configure upstream remote and git config user details", category: "Git" },
    { title: "Install Node.js 18+, Python 3.10+, and FFmpeg", category: "Prerequisites" },
    { title: "Install Frontend & Backend node_modules (npm run setup / npm install)", category: "Install" },
    { title: "Create Python virtual environment in ai_service/backend and install requirements", category: "Install" },
    { title: "Create Neon DB project with Region: Singapore (ap-southeast-1)", category: "Database" },
    { title: "Copy Neon connection string snippet into backend/.env and backendAdmin/.env", category: "Database" },
    { title: "Setup all 5 .env configuration files from .env.example templates", category: "Env" },
    { title: "Run and verify Backend (Port 5000), Admin (Port 5001), and AI Service (Port 8000)", category: "Run" },
    { title: "Create a new branch (git checkout -b feature/name) and make your first change", category: "Workflow" },
    { title: "Commit changes, push to your fork, and open a PR with description", category: "Workflow" },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-slate-200 flex flex-col shadow-sm">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="bg-gradient-to-tr from-indigo-600 to-violet-600 p-2.5 rounded-2xl text-white shadow-lg shadow-indigo-200">
            <Zap className="w-6 h-6 fill-current" />
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-indigo-950 block">AI Mentor</span>
            <span className="text-[11px] font-semibold text-indigo-600 uppercase tracking-wider">Intern Onboarding Hub</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl transition-all duration-200 text-sm ${
                activeTab === item.id 
                  ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-100 scale-[1.01]' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className={activeTab === item.id ? 'text-white' : 'text-slate-400'}>
                {item.icon}
              </span>
              <span className="truncate">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Quick Repo Card in Sidebar */}
        <div className="p-4 border-t border-slate-100">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all shadow-md group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-indigo-300 flex items-center gap-1.5">
                <GitHubIcon className="w-4 h-4" /> Deepak3699/Ai_Mentor
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
            </div>
            <p className="text-xs text-slate-400">Main team repository for interns. Click to open in GitHub.</p>
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8 lg:p-14">
        <AnimatePresence mode="wait">
          {/* TAB: WELCOME / OVERVIEW */}
          {activeTab === 'welcome' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              key="welcome"
              className="max-w-5xl"
            >
              {/* Header Banner */}
              <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white p-8 md:p-12 rounded-[36px] shadow-2xl mb-10 relative overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-10 items-center justify-between relative z-10">
                  <div className="flex-1 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 backdrop-blur-md text-indigo-200 rounded-full text-xs font-bold mb-6 border border-white/10">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
                      OFFICIAL INTERN SETUP GUIDE 2026
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                      Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-pink-300">AI Mentor</span> Project!
                    </h1>
                    <p className="text-base md:text-lg text-indigo-100/90 mb-8 leading-relaxed">
                      This step-by-step master guide is specifically prepared so every new intern can effortlessly set up their local development environment, configure the <strong>Neon PostgreSQL (Singapore)</strong> database, install frontend/backend/AI services, and master Git branching & Pull Requests.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <button 
                        onClick={() => setActiveTab('github-setup')}
                        className="bg-white text-indigo-950 px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-50 transition-all shadow-lg text-sm"
                      >
                        Start Step 1: Git Setup <ArrowRight className="w-4 h-4" />
                      </button>
                      <a
                        href={REPO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/20 transition-all text-sm"
                      >
                        <GitHubIcon className="w-4 h-4" /> Open GitHub Repo
                      </a>
                    </div>
                  </div>

                  <div className="w-full lg:w-[360px] shrink-0">
                    <img 
                      src="/hero-intern.jpg" 
                      alt="AI Mentor Guide" 
                      className="rounded-[32px] shadow-2xl border-4 border-white/20 w-full object-cover max-h-[380px] hover:scale-[1.02] transition-transform duration-300" 
                    />
                  </div>
                </div>
              </div>

              {/* Quick Flow Cards */}
              <h2 className="text-2xl font-black mb-6 text-slate-900 flex items-center gap-2">
                <Layers className="text-indigo-600" /> Complete Setup Journey at a Glance
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    step: "01",
                    title: "Git & Fork Repo",
                    desc: "Fork Deepak3699/Ai_Mentor, clone to your machine, configure upstream remotes.",
                    tab: "github-setup",
                    color: "border-blue-200 hover:border-blue-500 bg-blue-50/30"
                  },
                  {
                    step: "02",
                    title: "Install Dependencies",
                    desc: "Install Node.js packages (frontend/backend) and Python venv + FFmpeg for AI.",
                    tab: "dependencies",
                    color: "border-purple-200 hover:border-purple-500 bg-purple-50/30"
                  },
                  {
                    step: "03",
                    title: "Neon DB (Singapore)",
                    desc: "Create Neon DB project in Singapore (ap-southeast-1), copy snippet to .env.",
                    tab: "neon-db",
                    color: "border-emerald-200 hover:border-emerald-500 bg-emerald-50/30"
                  },
                  {
                    step: "04",
                    title: "Configure .env Files",
                    desc: "Setup 5 environment files for Backend, Admin, Frontend, and AI Service.",
                    tab: "env",
                    color: "border-amber-200 hover:border-amber-500 bg-amber-50/30"
                  },
                  {
                    step: "05",
                    title: "Run & Health Check",
                    desc: "Start services in sequence (Ports 5000, 5001, 8000, 5173) and verify health.",
                    tab: "running",
                    color: "border-rose-200 hover:border-rose-500 bg-rose-50/30"
                  },
                  {
                    step: "06",
                    title: "Branches & PRs",
                    desc: "Create task branches, write clean commits, and raise Pull Requests for mentor review.",
                    tab: "github",
                    color: "border-indigo-200 hover:border-indigo-500 bg-indigo-50/30"
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveTab(item.tab)}
                    className={`p-6 rounded-3xl border-2 transition-all cursor-pointer hover:shadow-lg ${item.color} flex flex-col justify-between`}
                  >
                    <div>
                      <span className="text-3xl font-black text-slate-300 block mb-2">{item.step}</span>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-indigo-600">
                      Open Step <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Core Architecture */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm mb-10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Server className="text-indigo-600" /> Project Architecture & Port Mapping
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  The AI Mentor repository is a monorepo consisting of 5 distinct services. Every intern must understand which service runs on which port:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-xs">
                      <tr>
                        <th className="p-4 rounded-tl-xl">Service</th>
                        <th className="p-4">Directory</th>
                        <th className="p-4">Tech Stack</th>
                        <th className="p-4">Port</th>
                        <th className="p-4 rounded-tr-xl">Default URL</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-indigo-600">Backend API</td>
                        <td className="p-4 font-mono text-slate-600">backend/</td>
                        <td className="p-4 text-slate-600">Node.js, Express, Prisma/Neon</td>
                        <td className="p-4 font-bold text-slate-800">5000</td>
                        <td className="p-4 text-blue-600 underline">http://localhost:5000</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-indigo-600">Learner Frontend</td>
                        <td className="p-4 font-mono text-slate-600">frontend/</td>
                        <td className="p-4 text-slate-600">React, Vite, Tailwind CSS</td>
                        <td className="p-4 font-bold text-slate-800">5173</td>
                        <td className="p-4 text-blue-600 underline">http://localhost:5173</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-indigo-600">Backend Admin</td>
                        <td className="p-4 font-mono text-slate-600">backendAdmin/</td>
                        <td className="p-4 text-slate-600">Node.js, Express, Admin API</td>
                        <td className="p-4 font-bold text-slate-800">5001</td>
                        <td className="p-4 text-blue-600 underline">http://localhost:5001</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-indigo-600">Frontend Admin</td>
                        <td className="p-4 font-mono text-slate-600">frontendAdmin/</td>
                        <td className="p-4 text-slate-600">React, Vite, Admin Dashboard</td>
                        <td className="p-4 font-bold text-slate-800">5174</td>
                        <td className="p-4 text-blue-600 underline">http://localhost:5174</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-indigo-600">AI Service</td>
                        <td className="p-4 font-mono text-slate-600">ai_service/backend/</td>
                        <td className="p-4 text-slate-600">Python 3.10+, FastAPI, Gemini, FFmpeg</td>
                        <td className="p-4 font-bold text-slate-800">8000</td>
                        <td className="p-4 text-blue-600 underline">http://localhost:8000/docs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 1: GITHUB SETUP */}
          {activeTab === 'github-setup' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              key="github-setup"
              className="max-w-4xl"
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold mb-3">
                  STEP 1 OF 6
                </div>
                <h2 className="text-4xl font-black mb-3">GitHub Fork & Local Repository Setup 🐙</h2>
                <p className="text-slate-600 leading-relaxed">
                  Learn how to properly fork the official repository, clone it to your computer, and maintain connection to the upstream repository.
                </p>
              </div>

              {/* Substep 1: Forking */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">1</span>
                  <h3 className="text-xl font-bold">Fork the Repository on GitHub</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Never clone directly without forking if you intend to submit Pull Requests. Forking gives you your personal copy under your GitHub username.
                </p>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-sm text-slate-700 space-y-2">
                  <p>1. Open the official repository: <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-indigo-600 underline">{REPO_URL}</a></p>
                  <p>2. In the top-right corner, click the <strong className="px-2 py-0.5 bg-slate-200 rounded">Fork</strong> button.</p>
                  <p>3. Select your personal GitHub account as the owner and click <strong>Create fork</strong>.</p>
                </div>
              </div>

              {/* Substep 2: Clone */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">2</span>
                  <h3 className="text-xl font-bold">Clone Your Forked Repo Locally</h3>
                </div>
                <p className="text-slate-600 text-sm mb-2">
                  Open your terminal (PowerShell, Command Prompt, or Git Bash) in your projects directory:
                </p>
                <CodeSnippet 
                  title="Clone and Navigate to Project"
                  code={`# Replace <your-github-username> with your actual GitHub username
git clone https://github.com/<your-github-username>/Ai_Mentor.git

# Move into the project directory
cd Ai_Mentor`}
                />
              </div>

              {/* Substep 3: Upstream remote */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">3</span>
                  <h3 className="text-xl font-bold">Configure Upstream Remote & Git Identity</h3>
                </div>
                <p className="text-slate-600 text-sm mb-2">
                  Adding <code className="bg-slate-100 px-1 rounded text-purple-700">upstream</code> allows you to sync latest changes from Deepak's repository whenever new updates are released:
                </p>
                <CodeSnippet 
                  title="Configure Upstream Remote"
                  code={`# Add the original repository as 'upstream'
git remote add upstream https://github.com/Deepak3699/Ai_Mentor.git

# Verify remotes (You should see 'origin' pointing to your fork and 'upstream' pointing to Deepak3699)
git remote -v`}
                />

                <p className="text-slate-600 text-sm mt-4 mb-2">
                  Set your Git author name and email so your commits are attributed properly:
                </p>
                <CodeSnippet 
                  title="Set Git Identity"
                  code={`git config --global user.name "Your Full Name"
git config --global user.email "your-github-email@example.com"`}
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setActiveTab('dependencies')}
                  className="bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all text-sm shadow-md"
                >
                  Proceed to Step 2: Install Dependencies <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB 2: DEPENDENCIES INSTALL */}
          {activeTab === 'dependencies' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              key="dependencies"
              className="max-w-4xl"
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-3">
                  STEP 2 OF 6
                </div>
                <h2 className="text-4xl font-black mb-3">Prerequisites & Dependency Installation 📦</h2>
                <p className="text-slate-600 leading-relaxed">
                  Install Node.js packages for frontend and backend, set up Python virtual environment for the AI service, and install FFmpeg.
                </p>
              </div>

              {/* System Requirements */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-500" /> System Requirements Checklist
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="font-bold text-slate-800 mb-1">Node.js (v18+ or v20 LTS)</div>
                    <code className="text-xs text-indigo-600">node -v && npm -v</code>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="font-bold text-slate-800 mb-1">Python (3.10 to 3.12)</div>
                    <code className="text-xs text-indigo-600">python --version</code>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="font-bold text-slate-800 mb-1">Git (v2.30+)</div>
                    <code className="text-xs text-indigo-600">git --version</code>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="font-bold text-slate-800 mb-1">FFmpeg (Required for AI Audio/Video)</div>
                    <code className="text-xs text-indigo-600">ffmpeg -version</code>
                  </div>
                </div>

                {/* FFmpeg Guide */}
                <div className="mt-6 p-5 bg-amber-50 rounded-2xl border border-amber-200">
                  <h4 className="font-bold text-amber-900 text-sm flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" /> How to install FFmpeg (Crucial for AI Service)
                  </h4>
                  <p className="text-amber-800 text-xs mb-3">
                    If <code>ffmpeg -version</code> fails, install it using the command for your OS:
                  </p>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2 bg-black/80 text-amber-200 rounded-lg">
                      # Windows (Run in Administrator PowerShell):<br />
                      winget install Gyan.FFmpeg
                    </div>
                    <div className="p-2 bg-black/80 text-amber-200 rounded-lg">
                      # macOS (Homebrew):<br />
                      brew install ffmpeg
                    </div>
                    <div className="p-2 bg-black/80 text-amber-200 rounded-lg">
                      # Linux (Ubuntu/Debian):<br />
                      sudo apt update && sudo apt install -y ffmpeg
                    </div>
                  </div>
                </div>
              </div>

              {/* Install Node.js packages */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Terminal className="text-indigo-600" /> Installing Frontend & Backend Dependencies
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Option A: Quick root install (if root <code>package.json</code> has setup script):
                </p>
                <CodeSnippet 
                  title="One-Command Root Setup"
                  code={`# In project root:
npm run setup`}
                />

                <p className="text-slate-600 text-sm mt-5 mb-2">
                  Option B: Manual step-by-step install in each folder (Recommended if root script fails):
                </p>
                <CodeSnippet 
                  title="Manual Per-Directory Installation"
                  code={`# 1. Install Backend
cd backend && npm install && cd ..

# 2. Install Learner Frontend
cd frontend && npm install && cd ..

# 3. Install Admin Backend
cd backendAdmin && npm install && cd ..

# 4. Install Admin Frontend
cd frontendAdmin && npm install && cd ..`}
                />
              </div>

              {/* AI Service Python Setup */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Cpu className="text-indigo-600" /> AI Service Setup (Python Virtual Environment)
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  The AI Service generates lessons and quizzes. It requires an isolated Python virtual environment:
                </p>
                
                <CodeSnippet 
                  title="Windows Setup for AI Service"
                  code={`# Navigate to AI backend directory
cd ai_service/backend

# Create virtual environment named 'venv'
python -m venv venv

# Activate on Windows:
.\\venv\\Scripts\\activate

# Upgrade pip and install all required packages:
pip install --upgrade pip
pip install -r requirements.txt`}
                />

                <CodeSnippet 
                  title="macOS / Linux Setup for AI Service"
                  code={`# Navigate to AI backend directory
cd ai_service/backend

# Create virtual environment named 'venv'
python3 -m venv venv

# Activate on macOS/Linux:
source venv/bin/activate

# Upgrade pip and install all required packages:
pip install --upgrade pip
pip install -r requirements.txt`}
                />

                <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl text-xs text-indigo-700 mt-4">
                  <strong>Windows Note:</strong> If PowerShell gives an error saying <code>running scripts is disabled</code> when activating, run: <br />
                  <code className="font-mono bg-white px-2 py-0.5 rounded mt-1 inline-block">Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser</code>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setActiveTab('neon-db')}
                  className="bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all text-sm shadow-md"
                >
                  Proceed to Step 3: Neon DB Setup <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB 3: NEON DB SETUP (SINGAPORE) */}
          {activeTab === 'neon-db' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              key="neon-db"
              className="max-w-4xl"
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-3">
                  STEP 3 OF 6 • CRITICAL STEP
                </div>
                <h2 className="text-4xl font-black mb-3">Neon Database Setup (Singapore Region) 🐘</h2>
                <p className="text-slate-600 leading-relaxed">
                  Follow these exact steps to create a serverless PostgreSQL database in Neon and connect it to your backend.
                </p>
              </div>

              {/* Warning/Alert regarding Singapore Region */}
              <div className="bg-emerald-50 border-2 border-emerald-300 p-6 rounded-[32px] mb-8 flex gap-4 items-start">
                <Globe className="text-emerald-700 w-8 h-8 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-emerald-950 text-base mb-1">MANDATORY REQUIREMENT: Choose Singapore Region</h4>
                  <p className="text-emerald-900 text-sm leading-relaxed">
                    When creating the Neon project, always select <strong>Singapore (ap-southeast-1)</strong>. Choosing another region may cause latency and IP pool mismatches with backend production configs.
                  </p>
                </div>
              </div>

              {/* Step by step guide */}
              <div className="space-y-6 mb-8">
                <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">1</span>
                    <h3 className="text-xl font-bold">Sign Up & Create Project</h3>
                  </div>
                  <ul className="space-y-3 text-slate-600 text-sm list-disc pl-5">
                    <li>Go to <a href="https://console.neon.tech/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold underline">https://console.neon.tech/</a> and sign in with GitHub or Google.</li>
                    <li>Click on the <strong>"New Project"</strong> button.</li>
                    <li>Enter <strong>Project Name</strong>: <code className="bg-slate-100 px-2 py-0.5 rounded text-emerald-700 font-bold">Ai_Mentor</code>.</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">2</span>
                    <h3 className="text-xl font-bold">Select Region: Singapore (ap-southeast-1)</h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">
                    In the Region dropdown, find and select:
                  </p>
                  <div className="p-4 bg-emerald-100/50 rounded-2xl border border-emerald-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🇸🇬</span>
                      <div>
                        <div className="font-bold text-emerald-950 text-sm">Singapore (AWS ap-southeast-1)</div>
                        <div className="text-xs text-emerald-700">Recommended low-latency Asia region</div>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-bold">SELECTED</span>
                  </div>
                  <p className="text-slate-600 text-sm mt-4">
                    Leave Postgres version as default (Postgres 16 or 15) and click <strong>Create Project</strong>.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">3</span>
                    <h3 className="text-xl font-bold">Copy the Connection String Snippet</h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">
                    On the project dashboard, locate the <strong>Connection Details</strong> card. Ensure <strong>Connection String</strong> mode is selected (Pooled connection recommended):
                  </p>
                  
                  <div className="p-4 bg-slate-900 text-slate-200 rounded-2xl font-mono text-xs overflow-x-auto border border-slate-800">
                    postgresql://alex_owner:npg_xY92mKq@ep-lucky-smoke-a1b2c3d4-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    (Click the "Copy" button next to your connection string in the Neon dashboard).
                  </p>
                </div>

                <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">4</span>
                    <h3 className="text-xl font-bold">Paste into <code className="text-indigo-600 font-mono">backend/.env</code></h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">
                    Open <code className="bg-slate-100 px-2 py-0.5 rounded font-mono">backend/.env</code> in VS Code and paste your copied connection string:
                  </p>

                  <CodeSnippet 
                    title="backend/.env Database Configuration"
                    code={`# Paste your Neon Connection String below:
NEON_DATABASE_URL="postgresql://<user>:<password>@<ep-name>-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"

# Also set DATABASE_URL (standard for Prisma and postgres clients)
DATABASE_URL="postgresql://<user>:<password>@<ep-name>-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"`}
                  />

                  <p className="text-slate-600 text-sm mt-4 mb-2">
                    Also update <code className="bg-slate-100 px-2 py-0.5 rounded font-mono">backendAdmin/.env</code> with the same string.
                  </p>
                </div>

                {/* Run DB Migrations / Prisma */}
                <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">5</span>
                    <h3 className="text-xl font-bold">Push Database Schema / Migrations</h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">
                    Run the database migration / push command to create all tables in your Neon Singapore database:
                  </p>

                  <CodeSnippet 
                    title="Initialize Database Tables in Neon"
                    code={`# In backend folder:
cd backend

# If using Prisma:
npx prisma db push
# or run migrations:
npx prisma migrate dev --name init

# (Optional) Seed initial data if seed script exists:
npm run seed`}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setActiveTab('env')}
                  className="bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all text-sm shadow-md"
                >
                  Proceed to Step 4: Environment Variables <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB 4: ENVIRONMENT VARIABLES (.ENV) */}
          {activeTab === 'env' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              key="env"
              className="max-w-4xl"
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold mb-3">
                  STEP 4 OF 6
                </div>
                <h2 className="text-4xl font-black mb-3">Environment Variables (.env Guide) 🔐</h2>
                <p className="text-slate-600 leading-relaxed">
                  Every service reads configuration from its own <code>.env</code> file. Do NOT commit your <code>.env</code> files to GitHub (they are in <code>.gitignore</code>).
                </p>
              </div>

              {/* Copy commands alert */}
              <div className="bg-amber-50 border border-amber-200 p-6 rounded-[32px] mb-8">
                <div className="flex items-center gap-2 text-amber-900 font-bold mb-2 text-sm">
                  <Info className="w-5 h-5 text-amber-600" /> Quick Command to Copy All Example Files
                </div>
                <p className="text-amber-800 text-xs mb-3">
                  Run these commands from the root directory of <code>Ai_Mentor</code> to create all 5 <code>.env</code> files from their templates:
                </p>
                <CodeSnippet 
                  title="Copy All .env.example files"
                  code={`# Run in root of Ai_Mentor repository:
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
cp backendAdmin/.env.example backendAdmin/.env
cp frontendAdmin/.env.example frontendAdmin/.env
cp ai_service/backend/.env.example ai_service/backend/.env`}
                />
              </div>

              {/* Service Tab Selector */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { id: 'backend', label: '1. backend/.env' },
                  { id: 'frontend', label: '2. frontend/.env' },
                  { id: 'backendAdmin', label: '3. backendAdmin/.env' },
                  { id: 'frontendAdmin', label: '4. frontendAdmin/.env' },
                  { id: 'ai_service', label: '5. ai_service/backend/.env' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedEnvService(item.id)}
                    className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
                      selectedEnvService === item.id
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Content for selected env */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm mb-8">
                {selectedEnvService === 'backend' && (
                  <div>
                    <h3 className="text-xl font-bold mb-2">backend/.env (Learner API)</h3>
                    <p className="text-slate-500 text-sm mb-4">Main backend service on Port 5000. Handles authentication, database queries, and course logic.</p>
                    <CodeSnippet 
                      title="backend/.env Complete Template"
                      code={`PORT=5000
NODE_ENV=development

# Neon Database Connection (Singapore ap-southeast-1)
NEON_DATABASE_URL="postgresql://user:password@ep-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
DATABASE_URL="postgresql://user:password@ep-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"

# JWT Secret for User Authentication (Any random 32+ character string)
JWT_SECRET=super_secret_jwt_key_intern_development_2026_xyz
JWT_EXPIRES_IN=7d

# Frontend Application URL (For CORS whitelist)
FRONTEND_URL=http://localhost:5173

# AI Microservice URL
AI_SERVICE_URL=http://localhost:8000

# Payment Gateways (Use test keys or dummy strings for local dev)
STRIPE_SECRET_KEY=sk_test_mock_stripe_key_for_dev
RAZORPAY_KEY_ID=rzp_test_mock_key_id
RAZORPAY_KEY_SECRET=rzp_test_mock_secret`}
                    />
                  </div>
                )}

                {selectedEnvService === 'frontend' && (
                  <div>
                    <h3 className="text-xl font-bold mb-2">frontend/.env (Learner Web UI)</h3>
                    <p className="text-slate-500 text-sm mb-4">Vite React frontend on Port 5173. Environment variables must start with <code>VITE_</code>.</p>
                    <CodeSnippet 
                      title="frontend/.env Template"
                      code={`# Backend API Base URL
VITE_API_BASE_URL=http://localhost:5000

# AI Service Direct URL (if called directly)
VITE_AI_SERVICE_URL=http://localhost:8000

# Firebase Auth Configuration (if Google Login enabled)
VITE_FIREBASE_API_KEY=AIzaSyDummyKeyForDev
VITE_FIREBASE_AUTH_DOMAIN=ai-mentor-dev.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=ai-mentor-dev
VITE_FIREBASE_STORAGE_BUCKET=ai-mentor-dev.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef`}
                    />
                  </div>
                )}

                {selectedEnvService === 'backendAdmin' && (
                  <div>
                    <h3 className="text-xl font-bold mb-2">backendAdmin/.env (Admin API)</h3>
                    <p className="text-slate-500 text-sm mb-4">Dedicated admin backend API running on Port 5001.</p>
                    <CodeSnippet 
                      title="backendAdmin/.env Template"
                      code={`PORT=5001
NODE_ENV=development

# Same Neon Database String as backend
DATABASE_URL="postgresql://user:password@ep-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
NEON_DATABASE_URL="postgresql://user:password@ep-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"

JWT_SECRET=super_secret_admin_jwt_key_2026_xyz
ADMIN_FRONTEND_URL=http://localhost:5174`}
                    />
                  </div>
                )}

                {selectedEnvService === 'frontendAdmin' && (
                  <div>
                    <h3 className="text-xl font-bold mb-2">frontendAdmin/.env (Admin Dashboard)</h3>
                    <p className="text-slate-500 text-sm mb-4">Admin UI dashboard running on Port 5174.</p>
                    <CodeSnippet 
                      title="frontendAdmin/.env Template"
                      code={`# Admin API Base URL
VITE_API_BASE_URL=http://localhost:5001`}
                    />
                  </div>
                )}

                {selectedEnvService === 'ai_service' && (
                  <div>
                    <h3 className="text-xl font-bold mb-2">ai_service/backend/.env (FastAPI AI Engine)</h3>
                    <p className="text-slate-500 text-sm mb-4">Python AI service running on Port 8000. Powers LLM lesson generation, audio synthesis, and transcription.</p>
                    <CodeSnippet 
                      title="ai_service/backend/.env Template"
                      code={`PORT=8000
ENVIRONMENT=development

# Google Gemini API Key (Get free key from https://aistudio.google.com/)
GEMINI_API_KEY=your_gemini_api_key_here

# Groq Cloud API Key (Get free key from https://console.groq.com/)
GROQ_API_KEY=your_groq_api_key_here

# Cloudinary (Used for hosting generated audio/video assets)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# FFmpeg Executable Path (Leave empty if added to system PATH)
FFMPEG_PATH=`}
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setActiveTab('running')}
                  className="bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all text-sm shadow-md"
                >
                  Proceed to Step 5: Run Services <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB 5: RUN SERVICES & VERIFICATION */}
          {activeTab === 'running' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              key="running"
              className="max-w-4xl"
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-bold mb-3">
                  STEP 5 OF 6
                </div>
                <h2 className="text-4xl font-black mb-3">Start All Services & Verification 🚀</h2>
                <p className="text-slate-600 leading-relaxed">
                  Start services in the correct sequence and test health check endpoints to ensure everything is operational.
                </p>
              </div>

              {/* Startup Order Rules */}
              <div className="bg-slate-900 text-white p-6 rounded-[32px] mb-8 shadow-xl">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-indigo-300">
                  <PlayCircle className="w-5 h-5" /> Strict Startup Sequence:
                </h3>
                <ol className="space-y-2 text-sm text-slate-300">
                  <li><strong className="text-white">1. Neon DB:</strong> Database is created in Singapore region & schema is pushed.</li>
                  <li><strong className="text-white">2. Backend (Port 5000):</strong> Always start before frontend.</li>
                  <li><strong className="text-white">3. BackendAdmin (Port 5001):</strong> Start admin server.</li>
                  <li><strong className="text-white">4. AI Service (Port 8000):</strong> Start Python graceful server.</li>
                  <li><strong className="text-white">5. Frontend (Port 5173):</strong> Start learner user interface.</li>
                  <li><strong className="text-white">6. FrontendAdmin (Port 5174):</strong> Start admin user interface.</li>
                </ol>
              </div>

              {/* Commands to run each */}
              <div className="space-y-6 mb-8">
                <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Terminal 1: Start Backend (Port 5000)</h3>
                  <CodeSnippet 
                    title="Terminal 1 (Backend)"
                    code={`cd backend
npm run dev`}
                  />
                  <p className="text-xs text-slate-500">Expected console output: <code className="text-emerald-600">Server running on http://localhost:5000 - Connected to Neon PostgreSQL</code></p>
                </div>

                <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Terminal 2: Start Backend Admin (Port 5001)</h3>
                  <CodeSnippet 
                    title="Terminal 2 (Backend Admin)"
                    code={`cd backendAdmin
npm run dev`}
                  />
                </div>

                <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Terminal 3: Start AI Service (Port 8000)</h3>
                  <CodeSnippet 
                    title="Terminal 3 (Python AI Service)"
                    code={`cd ai_service/backend

# Activate virtual environment
# Windows:
.\\venv\\Scripts\\activate
# Mac/Linux:
source venv/bin/activate

# Run the graceful server:
python graceful_server.py
# (Or using uvicorn):
# uvicorn main:app --reload --host 0.0.0.0 --port 8000`}
                  />
                  <p className="text-xs text-slate-500">Expected console output: <code className="text-emerald-600">FastAPI Application running on http://localhost:8000</code></p>
                </div>

                <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Terminal 4: Start Frontend (Port 5173)</h3>
                  <CodeSnippet 
                    title="Terminal 4 (Learner UI)"
                    code={`cd frontend
npm run dev`}
                  />
                  <p className="text-xs text-slate-500">Open <a href="http://localhost:5173" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">http://localhost:5173</a> in your browser.</p>
                </div>

                <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Terminal 5: Start Frontend Admin (Port 5174)</h3>
                  <CodeSnippet 
                    title="Terminal 5 (Admin UI)"
                    code={`cd frontendAdmin
npm run dev`}
                  />
                </div>
              </div>

              {/* Health verification table */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-emerald-600" /> Health Verification Table
                </h3>
                <div className="space-y-3">
                  {[
                    { service: "Backend Health", endpoint: "http://localhost:5000/health/live", expected: '{"status":"alive"}' },
                    { service: "Admin Health", endpoint: "http://localhost:5001/health/live", expected: '{"status":"alive"}' },
                    { service: "AI Service Docs", endpoint: "http://localhost:8000/docs", expected: "Interactive Swagger UI" },
                    { service: "Learner App", endpoint: "http://localhost:5173", expected: "Learner Dashboard UI loads" },
                  ].map((v, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-50 rounded-2xl gap-3 text-xs">
                      <span className="font-bold text-slate-800 text-sm">{v.service}</span>
                      <a href={v.endpoint} target="_blank" rel="noopener noreferrer" className="font-mono text-indigo-600 underline">
                        {v.endpoint}
                      </a>
                      <span className="bg-white px-3 py-1 rounded-lg border font-mono text-slate-600">
                        {v.expected}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setActiveTab('github')}
                  className="bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all text-sm shadow-md"
                >
                  Proceed to Step 6: Git & PR Guide <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB 6: BRANCHING & PR WORKFLOW */}
          {activeTab === 'github' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              key="github"
              className="max-w-4xl"
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-3">
                  STEP 6 OF 6 • TEAM COLLABORATION
                </div>
                <h2 className="text-4xl font-black mb-3">Branching, Commits & Pull Requests (PR) 🔱</h2>
                <p className="text-slate-600 leading-relaxed">
                  How to create task branches, commit according to team guidelines, push to your fork, and submit a PR to <code className="text-indigo-600 font-bold">Deepak3699/Ai_Mentor</code>.
                </p>
              </div>

              {/* The Golden Rule */}
              <div className="p-6 bg-red-50 border-2 border-red-200 rounded-[32px] mb-8 flex gap-4 items-center">
                <AlertTriangle className="w-8 h-8 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-black text-red-950 text-base">THE GOLDEN RULE OF INTERN GIT WORKFLOW:</h4>
                  <p className="text-red-900 text-sm">
                    <strong>NEVER</strong> commit directly to the <code>main</code> branch! Always create a dedicated branch for each feature or bug fix.
                  </p>
                </div>
              </div>

              {/* Step 1: Sync and Branch */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">1</span>
                  <h3 className="text-xl font-bold">Sync Upstream & Create a New Branch</h3>
                </div>
                <p className="text-slate-600 text-sm mb-3">
                  Always start from the latest version of the team's code:
                </p>
                <CodeSnippet 
                  title="Sync and Create Branch"
                  code={`# 1. Switch to your local main branch
git checkout main

# 2. Pull latest updates from original team repo (upstream)
git pull upstream main

# 3. Create and switch to your feature branch
# Branch naming format: feature/<short-description> or bugfix/<short-description>
git checkout -b feature/setup-neon-db`}
                />
              </div>

              {/* Step 2: Commits */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">2</span>
                  <h3 className="text-xl font-bold">Make Changes & Write Descriptive Commits</h3>
                </div>
                <p className="text-slate-600 text-sm mb-3">
                  Use conventional commit prefixes: <code className="bg-slate-100 px-1 rounded">feat:</code>, <code className="bg-slate-100 px-1 rounded">fix:</code>, <code className="bg-slate-100 px-1 rounded">docs:</code>, <code className="bg-slate-100 px-1 rounded">refactor:</code>
                </p>
                <CodeSnippet 
                  title="Stage and Commit Changes"
                  code={`# Check changed files
git status

# Stage your modified files
git add backend/.env.example backend/src/db.ts

# Commit with a clean, explanatory message
git commit -m "feat(backend): configure neon database connection for singapore region"`}
                />
              </div>

              {/* Step 3: Push */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">3</span>
                  <h3 className="text-xl font-bold">Push the Branch to Your GitHub Fork</h3>
                </div>
                <p className="text-slate-600 text-sm mb-3">
                  Push your branch to <code className="bg-slate-100 px-1 rounded">origin</code> (your fork on GitHub):
                </p>
                <CodeSnippet 
                  title="Push Branch to Origin"
                  code={`# Push branch and set upstream tracking
git push -u origin feature/setup-neon-db`}
                />
              </div>

              {/* Step 4: Raise PR */}
              <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 md:p-10 rounded-[36px] shadow-2xl mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-indigo-300">
                  <GitPullRequest className="w-7 h-7 text-indigo-400" /> 4. Opening the Pull Request (PR) on GitHub
                </h3>
                <div className="space-y-4 text-indigo-100 text-sm">
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    <p>Go to the main repository: <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="text-indigo-300 underline font-bold">{REPO_URL}</a> (or open your fork on GitHub).</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    <p>You will see a banner: <strong>"feature/setup-neon-db had recent pushes. Compare & pull request"</strong>. Click the green button!</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    <p>Ensure the base repository is <strong className="text-white">Deepak3699/Ai_Mentor</strong> with base branch <strong className="text-white">main</strong>.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold shrink-0">4</span>
                    <p>Fill out the PR title & description using the standard template below.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold shrink-0">5</span>
                    <p>Click <strong className="text-emerald-400">"Create Pull Request"</strong>. Notify your mentor on Slack/Discord/WhatsApp for review!</p>
                  </div>
                </div>

                {/* PR Description Template */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="text-xs uppercase font-bold tracking-widest text-indigo-300 mb-2">Recommended PR Description Template:</h4>
                  <pre className="p-4 bg-black/40 rounded-2xl text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed border border-white/10">
{`### Description of Changes
- Configured Neon database connection string pointing to Singapore region (ap-southeast-1).
- Added .env variable handling for NEON_DATABASE_URL and DATABASE_URL.
- Tested /health/live endpoint returning 200 OK.

### Services Affected
- [x] Backend (Port 5000)
- [ ] Frontend (Port 5173)
- [ ] AI Service (Port 8000)
- [ ] Admin (Port 5001/5174)

### How to Test
1. Run \`npm run dev\` in backend.
2. Visit http://localhost:5000/health/live.
3. Verify database connectivity logs.`}
                  </pre>
                </div>
              </div>

              {/* How to address review comments */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm mb-8">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <RefreshCw className="text-indigo-600" /> How to Update PR when Mentor Requests Changes
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  You <strong>do not need to close the PR</strong> or create a new one! Simply make changes on the same branch and push again:
                </p>
                <CodeSnippet 
                  title="Update Existing Pull Request"
                  code={`# 1. Make the requested changes in your editor
# 2. Stage and commit:
git add .
git commit -m "fix: address mentor feedback on database query"

# 3. Push to your branch on GitHub:
git push origin feature/setup-neon-db

# GitHub will automatically update your existing Pull Request!`}
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setActiveTab('checklist')}
                  className="bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all text-sm shadow-md"
                >
                  View Checklist & FAQ <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB 7: CHECKLIST & FAQ */}
          {activeTab === 'checklist' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              key="checklist"
              className="max-w-4xl"
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-3">
                  INTERACTIVE TRACKER
                </div>
                <h2 className="text-4xl font-black mb-3">Intern Onboarding Checklist & FAQ ✅</h2>
                <p className="text-slate-600 leading-relaxed">
                  Check off each milestone as you complete it during your setup.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-800 text-sm">Your Setup Progress</span>
                  <span className="font-extrabold text-indigo-600 text-sm">
                    {Math.round((completedTasks.length / tasksList.length) * 100)}% COMPLETE ({completedTasks.length}/{tasksList.length})
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-emerald-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${(completedTasks.length / tasksList.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Tasks List */}
              <div className="space-y-3 mb-10">
                {tasksList.map((task, idx) => {
                  const isChecked = completedTasks.includes(idx);
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleTask(idx)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                        isChecked 
                          ? 'bg-emerald-50/50 border-emerald-200 text-slate-600' 
                          : 'bg-white border-slate-200 text-slate-900 hover:border-indigo-300 shadow-sm'
                      }`}
                    >
                      <button className="text-indigo-600 shrink-0">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-300" />
                        )}
                      </button>
                      <span className={`text-sm font-semibold flex-1 ${isChecked ? 'line-through text-slate-400' : ''}`}>
                        {task.title}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                        {task.category}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* FAQ Section */}
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <HelpCircle className="text-indigo-600" /> Frequently Asked Questions & Troubleshooting
              </h3>
              
              <div className="space-y-4 mb-8">
                {[
                  {
                    q: "Error: Port 5000 is already in use (EADDRINUSE)?",
                    a: "Another process is running on port 5000. On Windows, run: `netstat -ano | findstr :5000` to find the PID, then kill it with `taskkill /PID <PID> /F`. On Mac/Linux, run: `kill -9 $(lsof -ti:5000)`."
                  },
                  {
                    q: "Neon DB connection timeout or SSL connection error?",
                    a: "Ensure `?sslmode=require` is appended to your connection string. Check that your Neon compute endpoint has not been paused (visiting the Neon dashboard will automatically wake it up)."
                  },
                  {
                    q: "Cannot activate Python venv on Windows (Execution of scripts is disabled)?",
                    a: "Run PowerShell as Administrator or run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`, then re-run `.\\venv\\Scripts\\activate`."
                  },
                  {
                    q: "FFmpeg not recognized when running AI Service?",
                    a: "Install FFmpeg via `winget install Gyan.FFmpeg` on Windows, or add the folder containing `ffmpeg.exe` to your Windows System Environment Variables PATH."
                  },
                  {
                    q: "How to resolve Git merge conflicts with upstream/main?",
                    a: "Run `git checkout main && git pull upstream main`. Then `git checkout feature/your-branch && git merge main`. Resolve conflicts in VS Code, then `git commit -m 'chore: merge upstream main' && git push origin feature/your-branch`."
                  }
                ].map((faq, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2">{faq.q}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 8: RESOURCES */}
          {activeTab === 'resources' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key="resources"
              className="max-w-5xl"
            >
              <div className="mb-8">
                <h2 className="text-4xl font-black mb-3">Recommended Learning Resources 📚</h2>
                <p className="text-slate-600 leading-relaxed">
                  Curated tutorials, documentation, and tools to accelerate your learning during the internship.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: "Neon Serverless Postgres Docs",
                    provider: "Neon.tech",
                    type: "Database Docs",
                    desc: "Official guide on pooled connections, branching, and connecting with Node.js.",
                    link: "https://neon.tech/docs/introduction",
                    icon: <Database className="text-emerald-500" />
                  },
                  {
                    title: "Official Team Repository",
                    provider: "GitHub",
                    type: "Codebase",
                    desc: "Main AI Mentor repo with full backend, frontend, admin, and AI service code.",
                    link: REPO_URL,
                    icon: <GitHubIcon className="text-slate-900" />
                  },
                  {
                    title: "GitHub Git Handbook",
                    provider: "GitHub Guides",
                    type: "Git Guide",
                    desc: "Master branching, forking, rebasing, and clean Pull Requests.",
                    link: "https://docs.github.com/en/get-started/using-git/about-git",
                    icon: <GitBranch className="text-purple-600" />
                  },
                  {
                    title: "Google AI Studio (Gemini Key)",
                    provider: "Google Cloud",
                    type: "API Key",
                    desc: "Get your free Gemini API key to power lesson generation in the AI service.",
                    link: "https://aistudio.google.com/",
                    icon: <Zap className="text-amber-500" />
                  },
                  {
                    title: "Groq Cloud Console",
                    provider: "Groq",
                    type: "API Key",
                    desc: "Ultra-fast Llama-3 inference API key for AI mentor responses.",
                    link: "https://console.groq.com/",
                    icon: <Cpu className="text-rose-500" />
                  },
                  {
                    title: "Tailwind CSS Documentation",
                    provider: "Tailwind",
                    type: "Styling Docs",
                    desc: "Utility-first CSS reference for designing frontend components.",
                    link: "https://tailwindcss.com/docs",
                    icon: <Layers className="text-sky-500" />
                  }
                ].map((res, i) => (
                  <a 
                    key={i} 
                    href={res.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-indigo-500 hover:shadow-xl transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-indigo-50 transition-colors">
                          {res.icon}
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded text-slate-500">
                          {res.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-indigo-600 transition-colors">{res.title}</h3>
                      <p className="text-xs text-indigo-600 font-bold mb-3 uppercase tracking-wider">{res.provider}</p>
                      <p className="text-slate-500 text-xs leading-relaxed mb-4">{res.desc}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-indigo-600 font-bold text-xs pt-3 border-t border-slate-100">
                      Open Resource <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
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
