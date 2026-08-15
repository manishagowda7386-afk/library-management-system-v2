import {
  BarChart3,
  BookOpen,
  ChevronDown,
  LayoutDashboard,
  Library,
  LogOut,
  Settings,
  Users,
} from 'lucide-react'

const navigationItems = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: 'Books',
    icon: BookOpen,
  },
  {
    label: 'Members',
    icon: Users,
  },
  {
    label: 'Loans',
    icon: Library,
  },
  {
    label: 'Reports',
    icon: BarChart3,
  },
]

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-[250px] shrink-0 flex-col border-r border-white/5 bg-[#0d1210]">
      <div className="flex h-[76px] items-center border-b border-white/5 px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
            <BookOpen size={21} strokeWidth={2} />
          </div>

          <div>
            <h1 className="text-[15px] font-semibold tracking-tight text-white">
              Library Nexus
            </h1>

            <p className="text-[11px] text-gray-500">
              Management System
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-3 py-6">
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-600">
          Workspace
        </p>

        <nav className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon

            return (
              <button
                key={item.label}
                className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-all ${
                  item.active
                    ? 'bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/10'
                    : 'text-gray-500 hover:bg-white/[0.03] hover:text-gray-200'
                }`}
              >
                <Icon
                  size={18}
                  strokeWidth={1.8}
                  className={
                    item.active
                      ? 'text-emerald-400'
                      : 'text-gray-600 group-hover:text-gray-300'
                  }
                />

                <span>{item.label}</span>

                {item.active && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />
                )}
              </button>
            )
          })}
        </nav>

        <div className="my-6 h-px bg-white/5" />

        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-600">
          System
        </p>

        <button className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-500 transition-all hover:bg-white/[0.03] hover:text-gray-200">
          <Settings
            size={18}
            strokeWidth={1.8}
            className="text-gray-600 group-hover:text-gray-300"
          />
          <span>Settings</span>
        </button>
      </div>

      <div className="border-t border-white/5 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/[0.03]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/30 to-emerald-700/30 text-sm font-semibold text-emerald-300 ring-1 ring-white/10">
            M
          </div>

          <div className="min-w-0 flex-1 text-left">
            <p className="truncate text-sm font-medium text-gray-200">
              Maneesha
            </p>

            <p className="truncate text-[11px] text-gray-600">
              Administrator
            </p>
          </div>

          <ChevronDown size={15} className="text-gray-600" />
        </button>

        <button className="mt-2 flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-xs text-gray-600 transition-colors hover:bg-red-500/5 hover:text-red-400">
          <LogOut size={15} />
          Sign out
        </button>
      </div>
    </aside>
  )
}