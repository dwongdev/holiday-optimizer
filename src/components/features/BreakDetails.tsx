import { Break } from '@/types';
import { motion } from 'framer-motion';
import { BreakCard } from '@/components/features/components/BreakCard';
import { BreakTypeLegend } from '@/components/features/components/BreakTypeLegend';
import { Info } from 'lucide-react';

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface BreakDetailsProps {
  breaks: Break[];
}

export function BreakDetails({ breaks }: BreakDetailsProps) {
  return (
    <motion.div
      variants={item}
      className="relative overflow-hidden rounded-xl bg-gradient-to-b from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-900/95 shadow-sm"
    >
      <div className="relative p-4 space-y-4">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-violet-100 dark:bg-violet-900/50 rounded-lg">
              <svg className="h-4 w-4 text-violet-600 dark:text-violet-300" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-none mb-0.5">
                Break Details
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Your optimized breaks throughout the year
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span
              className="px-3 py-1.5 bg-violet-100 dark:bg-violet-900/50 rounded-lg text-xs font-medium text-violet-700 dark:text-violet-300">
              {breaks.length} break{breaks.length !== 1 ? 's' : ''} planned
            </span>
          </div>
        </div>

        {/* Legend Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            <Info className="h-4 w-4 text-violet-600 dark:text-violet-400" />
            <h3 className="text-xs font-medium text-gray-900 dark:text-gray-100">
              Understanding Your Break Types
            </h3>
          </div>
          <BreakTypeLegend />
        </div>

        {/* Breaks Grid Section */}
        <div className="space-y-4">
          {breaks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="p-2 bg-violet-100 dark:bg-violet-900/50 rounded-lg mb-3">
                <svg className="h-6 w-6 text-violet-600 dark:text-violet-300" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                No Breaks Planned Yet
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 max-w-md">
                Adjust your CTO days and preferences to see optimized break suggestions
              </p>
            </div>
          ) : (
            <>
              <div>
                <h3 className="text-xs font-medium text-gray-900 dark:text-gray-100 mb-1">
                  Your Optimized Breaks
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Below are your optimized breaks based on your preferences and available days
                </p>
              </div>
              <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 auto-rows-fr">
                {breaks.map((breakPeriod, index) => (
                  <BreakCard key={index} breakPeriod={breakPeriod} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}