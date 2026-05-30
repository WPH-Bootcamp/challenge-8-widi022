import { stats } from "../../data/company";

interface Stat {
    number: string;
    label: string;
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-white dark:bg-[#0B0B0B]  overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black dark:text-white">
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            From strategy to execution, we deliver solutions that grow your
            business.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat : Stat) => (
            <div
              key={stat.label}
              className="aspect-square rounded-full bg-gray-100 dark:bg-gray-900 
              flex flex-col items-center justify-center text-center p-4
              hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-1">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
