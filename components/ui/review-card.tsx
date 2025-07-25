'use client';

import { Star } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import type { Review } from '@/types';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = review.comment.length > 150;
  const displayComment = shouldTruncate && !isExpanded 
    ? review.comment.slice(0, 150) + '...' 
    : review.comment;

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="w-12 h-12 bg-gradient-to-r from-[#08CFCC] to-[#B445EA]">
            <AvatarFallback className="text-white font-semibold">
              {getInitials(review.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900">{review.name}</h4>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                aria-hidden="true"
                  <Star
                    key={i}
          <blockquote className="text-gray-700 leading-relaxed italic text-sm">
            "{displayComment}"
            {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-2 text-blue-600 hover:text-blue-800 underline text-sm font-medium"
                aria-label={isExpanded ? 'Show less' : 'Show more'}
              >
                {isExpanded ? 'Show less' : 'Read more'}
              </button>
            )}
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            {review.location && (
              <p className="text-sm text-gray-500 mb-3">{review.location}</p>
            )}
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              "{review.comment}"
            </p>
            <p className="text-xs text-gray-500">
              {new Date(review.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            </time>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}