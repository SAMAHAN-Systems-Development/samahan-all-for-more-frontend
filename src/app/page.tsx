import ClusterAcademicArms from '@/academix sections/sectionTwo';
import type { Metadata } from 'next';
import sections from '@/data/ClusterAcademicArms.json';

export const metadata: Metadata = {
  title: 'Samahan 2024',
  description: 'The official Samahan 2024 Website.',
};

export default function Home() {
  return (
    <main>
      {/* add sections here */}
      <ClusterAcademicArms sections={sections} />
    </main>
  );
}
