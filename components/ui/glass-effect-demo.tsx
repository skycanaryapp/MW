/**
 * Glass Effect Demo Component
 * 
 * This component demonstrates the liquid glass morphism effect implementation
 * and provides customization examples for different use cases.
 */

'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

export default function GlassEffectDemo() {
  const [blurIntensity, setBlurIntensity] = useState([12]);
  const [opacity, setOpacity] = useState([15]);
  const [animationSpeed, setAnimationSpeed] = useState([8]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Liquid Glass Effect{' '}
            <span className="text-transparent bg-gradient-to-r from-[#08CFCC] to-[#B445EA] bg-clip-text">
              Demonstration
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interactive demonstration of the sophisticated glass morphism header effect
            with real-time customization controls.
          </p>
        </div>

        {/* Live Demo Section */}
        <Card className="glass-demo-card">
          <CardHeader>
            <CardTitle>Live Glass Effect Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div 
              className="glass-preview-container"
              style={{
                '--blur-intensity': `${blurIntensity[0]}px`,
                '--glass-opacity': `${opacity[0]}%`,
                '--animation-duration': `${animationSpeed[0]}s`
              } as React.CSSProperties}
            >
              <div className="glass-preview-header">
                <div className="glass-preview-content">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#08CFCC] to-[#B445EA]" />
                      <span className="font-semibold">MagicWorld</span>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                      <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
                      <a href="#" className="hover:text-blue-600 transition-colors">About</a>
                      <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
                    </nav>
                    <Button size="sm" className="bg-gradient-to-r from-[#08CFCC] to-[#B445EA]">
                      Contact
                    </Button>
                  </div>
                </div>
                <div className="glass-orb glass-orb-demo-1" />
                <div className="glass-orb glass-orb-demo-2" />
                <div className="glass-orb glass-orb-demo-3" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Blur Intensity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Slider
                value={blurIntensity}
                onValueChange={setBlurIntensity}
                max={20}
                min={5}
                step={1}
                className="w-full"
              />
              <div className="text-center">
                <Badge variant="outline">{blurIntensity[0]}px</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Glass Opacity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Slider
                value={opacity}
                onValueChange={setOpacity}
                max={30}
                min={5}
                step={1}
                className="w-full"
              />
              <div className="text-center">
                <Badge variant="outline">{opacity[0]}%</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Animation Speed</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Slider
                value={animationSpeed}
                onValueChange={setAnimationSpeed}
                max={15}
                min={3}
                step={1}
                className="w-full"
              />
              <div className="text-center">
                <Badge variant="outline">{animationSpeed[0]}s</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Implementation Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Key CSS Properties:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <code>backdrop-filter: blur(12px)</code></li>
                  <li>• <code>background: rgba(255, 255, 255, 0.12)</code></li>
                  <li>• <code>box-shadow</code> for depth perception</li>
                  <li>• <code>transform: translateZ(0)</code> for GPU acceleration</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Performance Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Hardware acceleration enabled</li>
                  <li>• Optimized for 60fps animations</li>
                  <li>• Reduced motion support</li>
                  <li>• Cross-browser compatibility</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accessibility Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">WCAG AA Compliance:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• High contrast text ratios maintained</li>
                  <li>• Reduced motion preferences respected</li>
                  <li>• Focus indicators clearly visible</li>
                  <li>• Screen reader friendly structure</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Browser Support:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Chrome/Edge 76+</li>
                  <li>• Firefox 103+</li>
                  <li>• Safari 14+</li>
                  <li>• Graceful fallbacks for older browsers</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        .glass-demo-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .glass-preview-container {
          position: relative;
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .glass-preview-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: rgba(255, 255, 255, calc(var(--glass-opacity) / 100));
          backdrop-filter: blur(var(--blur-intensity));
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          padding: 0 24px;
        }

        .glass-preview-content {
          position: relative;
          z-index: 10;
          width: 100%;
        }

        .glass-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.6;
        }

        .glass-orb-demo-1 {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #08CFCC, #4F46E5);
          top: -40px;
          left: 10%;
          animation: demoFloat1 var(--animation-duration) infinite ease-in-out alternate;
        }

        .glass-orb-demo-2 {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #B445EA, #06B6D4);
          top: -30px;
          right: 20%;
          animation: demoFloat2 calc(var(--animation-duration) * 0.8) infinite ease-in-out alternate;
          animation-delay: -2s;
        }

        .glass-orb-demo-3 {
          width: 70px;
          height: 70px;
          background: linear-gradient(225deg, #8B5CF6, #10B981);
          top: -35px;
          left: 60%;
          animation: demoFloat3 calc(var(--animation-duration) * 1.2) infinite ease-in-out alternate;
          animation-delay: -4s;
        }

        @keyframes demoFloat1 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(20px) translateY(-10px); }
        }

        @keyframes demoFloat2 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-25px) translateY(-8px); }
        }

        @keyframes demoFloat3 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(15px) translateY(8px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .glass-orb-demo-1,
          .glass-orb-demo-2,
          .glass-orb-demo-3 {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}