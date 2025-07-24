import type { Metadata } from 'next';
import GlassEffectDemo from '@/components/ui/glass-effect-demo';

export const metadata: Metadata = {
  title: 'Glass Effect Demo',
  description: 'Interactive demonstration of the sophisticated liquid glass morphism header effect with real-time customization controls.',
};

export default function GlassDemoPage() {
  return <GlassEffectDemo />;
}