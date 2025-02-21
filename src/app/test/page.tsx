import { Metadata } from 'next';
import ResponsiveTest from '@/components/test/ResponsiveTest';
import PerformanceTest from '@/components/test/PerformanceTest';

export const metadata: Metadata = {
  title: 'Test Page - Your Name',
  description: 'Test page for responsive design and performance monitoring',
};

export default function TestPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Test Page</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Responsive Design Test</h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          <ResponsiveTest />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Performance Test</h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          <PerformanceTest />
        </div>
      </section>
    </main>
  );
} 