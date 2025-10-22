import { ArrowUpRight } from "lucide-react";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="mb-8 text-center">
          <div className="inline-block p-6 border-4 border-amber-700/50 bg-slate-800/50 backdrop-blur-sm mb-6 relative">
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-red-800"></div>
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-4 border-r-4 border-red-800"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-4 border-l-4 border-red-800"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-red-800"></div>

            <h1 className="font-geist text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-amber-600 to-red-700 tracking-wider mb-2">
              YETTI
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-3"></div>
            <p className="font-ibm-plex-mono text-amber-200/80 text-sm md:text-lg tracking-widest uppercase">
              the dean is coming
            </p>
          </div>

          <p className="font-geist text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Cohort 3 Group 7 Engineering Project
            <br />
            <span className="text-amber-500">Good Luck!</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mt-12">
          <button
            className="group relative font-jetbrains-mono font-bold text-lg md:text-xl px-8 py-3 
            bg-gradient-to-r from-red-800 to-red-900 text-amber-100
            border-4 border-amber-700 hover:border-amber-500
            shadow-[0_0_30px_rgba(180,83,9,0.3)]
            hover:shadow-[0_0_50px_rgba(251,191,36,0.5)]
            transition-all duration-300 hover:scale-105
            uppercase tracking-wider overflow-hidden cursor-pointer select-none"
            onClick={() => {
              console.log("download game");
            }}
          >
            <span className="relative z-10">Download Game</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 border-2 border-amber-400/0 group-hover:border-amber-400/50 transition-all duration-300"></div>
          </button>

          <button
            className="group relative font-jetbrains-mono font-semibold text-lg md:text-xl px-8 py-3 
            bg-slate-800/50 text-amber-300
            border-4 border-slate-600 hover:border-amber-700
            backdrop-blur-sm
            hover:bg-slate-700/50
            transition-all duration-300 hover:scale-105
            uppercase tracking-wider cursor-pointer select-none"
            onClick={() => {
              console.log("deliverables");
            }}
          >
            <span className="relative z-10">Deliverables</span>
          </button>
        </div>
        <a
          href="https://github.com/yetti-eng"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-8 flex items-center gap-2 cursor-pointer"
        >
          GitHub Repository <ArrowUpRight size={17} className="mt-1" />
        </a>
      </div>
    </div>
  );
}

export default App;
