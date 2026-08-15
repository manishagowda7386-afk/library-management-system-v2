import {
  Bell,
  ChevronDown,
  Command,
  Search,
} from 'lucide-react'

export default function Topbar() {
  return (
    <header className="flex h-[76px] items-center justify-between border-b border-white/5 bg-[#0b0f0e]/80 px-8 backdrop-blur-xl">
      <div>
        <p className="text-xs text-gray-600">
          Library Management
        </p>

        <h2 className="mt-0.5 text-lg font-semibold tracking-tight text-white">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden h-10 w-[260px] items-center gap-2 rounded-xl border border-white/5 bg-white/[0.025] px-3 sm:flex">
          <Search size={16} className="text-gray-600" />

          <input
            type="text"
            placeholder="Search anything..."
            className="min-w-0 flex-1 bg-transparent text-sm text-gray-200 outline-none placeholder:text-gray-600"
          />

          <div className="flex items-center gap-1 rounded-md border border-white/5 px-1.5 py-0.5 text-[10px] text-gray-600">
            <Command size={10} />
            K
          </div>
        </div>

        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/[0.025] text-gray-500 transition-colors hover:bg-white/[0.05] hover:text-gray-200">
          <Bell size={17} />

          <span className="absolute right-2.5 top-2 h-1.5 w-1.5 rounded-full bg-emerald-400 ring-2 ring-[#0b0f0e]" />
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.025] px-2 py-1.5 transition-colors hover:bg-white/[0.05]">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-xs font-semibold text-emerald-400">
            M
          </div>

          <ChevronDown size={14} className="text-gray-600" />
        </button>
      </div>
    </header>
  )
}