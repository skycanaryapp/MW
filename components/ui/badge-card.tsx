import type { Badge as BadgeType } from '@/types';

interface BadgeCardProps {
  badge: BadgeType;
}

export function BadgeCard({ badge }: BadgeCardProps) {
  const Icon = badge.icon;
  
  return (
    <div className="flex items-center space-x-4 p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="w-12 h-12 bg-gradient-to-r from-[#08CFCC] to-[#B445EA] rounded-full flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 text-lg leading-tight mb-1">
          {badge.title}
        </h3>
        <p className="text-gray-600 text-sm">
          {badge.description}
        </p>
      </div>
    </div>
  );
}