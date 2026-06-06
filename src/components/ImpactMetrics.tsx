import React, { useEffect, useState } from 'react';

interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { label: 'Healthcare Kiosks Deployed', value: '500', suffix: '+' },
  { label: 'Patients Served', value: '2.5', suffix: 'M+' },
  { label: 'Partner Organizations', value: '150', suffix: '+' },
  { label: 'Teleconsultations Enabled', value: '1.2', suffix: 'M+' },
];

export default function ImpactMetrics() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    const section = document.getElementById('metrics');
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targets: Record<string, number> = {
      0: parseInt(stats[0].value),
      1: 2.5,
      2: parseInt(stats[2].value),
      3: 1.2,
    };

    const intervals: Record<string, NodeJS.Timeout> = {};

    Object.keys(targets).forEach((key) => {
      const index = parseInt(key);
      const target = targets[index];
      let current = 0;
      const increment = target / 50;

      intervals[key] = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals[key]);
        }
        setCounts((prev) => ({
          ...prev,
          [index]: current,
        }));
      }, 30);
    });

    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, [isVisible]);

  return (
    <section id="metrics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach AI is transforming healthcare delivery across India with cutting-edge telemedicine and AI-powered diagnostic kiosks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl border border-blue-100 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {isVisible
                  ? `${counts[index]?.toFixed(index === 1 ? 1 : 0) || 0}${stat.suffix || ''}`
                  : `0${stat.suffix || ''}`}
              </div>
              <p className="text-gray-700 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
