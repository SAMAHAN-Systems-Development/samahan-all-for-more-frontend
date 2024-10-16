import '@/styles/globals.css';
import Sidebar from '../_components/Sidebar';
import { Toaster } from 'sonner';
import { redirect, useRouter } from 'next/navigation';
import { useGetUser } from '@/lib/queries/userQueries';
import { UserProvider } from '@/lib/providers/UserProvider';

export default function AdminLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="h-screen w-full flex">
      <Sidebar />
      <div className="p-4">{children}</div>
      <Toaster />
    </section>
  );
}
