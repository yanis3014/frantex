import { Stats } from "../lib/content";

/**
 * Stats component displays a series of labelled statistics in a
 * responsive grid. Each stat shows a value and a short label. Use
 * this component to highlight key numbers such as production lines,
 * team size or capacity.
 */
export default function StatsBlock({ stats }: { stats: Stats[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="text-center p-4 bg-neutral-100 rounded-lg shadow-sm"
        >
          <p className="text-2xl font-bold text-primary">{stat.value}</p>
          <p className="text-sm text-neutral-600 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
