import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Library,
  Users,
} from 'lucide-react'

const statistics = [
  {
    label: 'Total Books',
    value: '1,248',
    change: '+12.5%',
    description: 'from last month',
    icon: BookOpen,
  },
  {
    label: 'Active Members',
    value: '386',
    change: '+8.2%',
    description: 'from last month',
    icon: Users,
  },
  {
    label: 'Books on Loan',
    value: '124',
    change: '+4.6%',
    description: 'from last month',
    icon: Library,
  },
  {
    label: 'Overdue Books',
    value: '18',
    change: '-12.4%',
    description: 'from last month',
    icon: Clock3,
  },
]

const recentActivity = [
  {
    title: 'The Pragmatic Programmer',
    member: 'Ananya Rao',
    action: 'Borrowed',
    time: '12 min ago',
    status: 'borrowed',
  },
  {
    title: 'Clean Code',
    member: 'Rahul Kumar',
    action: 'Returned',
    time: '34 min ago',
    status: 'returned',
  },
  {
    title: 'Design Patterns',
    member: 'Priya Sharma',
    action: 'Borrowed',
    time: '1 hour ago',
    status: 'borrowed',
  },
  {
    title: 'Introduction to Algorithms',
    member: 'Arjun Patel',
    action: 'Returned',
    time: '2 hours ago',
    status: 'returned',
  },
]

export default function Dashboard() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="mx-auto max-w-[1500px] px-8 py-8">
        <section className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="mb-2 text-sm text-emerald-400">
              Tuesday, August 18, 2026
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-white">
              Good morning, Maneesha
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
              Here's what's happening with your library today.
            </p>
          </div>

          <button className="inline-flex w-fit items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-medium text-[#07100c] shadow-lg shadow-emerald-500/10 transition-all hover:bg-emerald-400">
            <BookOpen size={16} />
            Add new book
          </button>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statistics.map((statistic) => {
            const Icon = statistic.icon

            return (
              <div
                key={statistic.label}
                className="rounded-2xl border border-white/5 bg-white/[0.025] p-5 transition-all hover:border-emerald-500/10 hover:bg-white/[0.035]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Icon size={19} />
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-gray-700"
                  />
                </div>

                <p className="mt-5 text-sm text-gray-500">
                  {statistic.label}
                </p>

                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-semibold tracking-tight text-white">
                    {statistic.value}
                  </span>

                  <span
                    className={`text-xs font-medium ${
                      statistic.change.startsWith('-')
                        ? 'text-emerald-400'
                        : 'text-emerald-400'
                    }`}
                  >
                    {statistic.change}
                  </span>
                </div>

                <p className="mt-1 text-[11px] text-gray-600">
                  {statistic.description}
                </p>
              </div>
            )
          })}
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-white/5 bg-white/[0.025]">
            <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
              <div>
                <h2 className="text-sm font-semibold text-white">
                  Recent activity
                </h2>

                <p className="mt-1 text-xs text-gray-600">
                  Latest borrowing and return activity
                </p>
              </div>

              <button className="text-xs font-medium text-emerald-400 hover:text-emerald-300">
                View all
              </button>
            </div>

            <div className="divide-y divide-white/5">
              {recentActivity.map((activity) => (
                <div
                  key={`${activity.title}-${activity.member}`}
                  className="flex items-center gap-4 px-6 py-4"
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                      activity.status === 'returned'
                        ? 'bg-blue-500/10 text-blue-400'
                        : 'bg-emerald-500/10 text-emerald-400'
                    }`}
                  >
                    {activity.status === 'returned' ? (
                      <CheckCircle2 size={17} />
                    ) : (
                      <BookOpen size={17} />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-200">
                      {activity.title}
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      {activity.member} · {activity.action}
                    </p>
                  </div>

                  <span className="shrink-0 text-[11px] text-gray-600">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.025]">
            <div className="border-b border-white/5 px-6 py-5">
              <h2 className="text-sm font-semibold text-white">
                Quick overview
              </h2>

              <p className="mt-1 text-xs text-gray-600">
                Your library at a glance
              </p>
            </div>

            <div className="space-y-5 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <CalendarDays size={18} />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-300">
                    Today's due books
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Books scheduled for return today
                  </p>
                </div>

                <span className="text-lg font-semibold text-white">
                  23
                </span>
              </div>

              <div className="h-px bg-white/5" />

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                  <Clock3 size={18} />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-300">
                    Overdue returns
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Members with overdue books
                  </p>
                </div>

                <span className="text-lg font-semibold text-white">
                  18
                </span>
              </div>

              <div className="h-px bg-white/5" />

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Users size={18} />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-300">
                    New members
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Members registered this month
                  </p>
                </div>

                <span className="text-lg font-semibold text-white">
                  42
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}