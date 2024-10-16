import '@/styles/globals.css';
import Sidebar from './_components/Sidebar';
import { Toaster } from 'sonner';
import { redirect, useRouter } from 'next/navigation';
import { useGetUser } from '@/lib/queries/userQueries';
import { UserProvider } from '@/lib/providers/UserProvider';

export default function AdminLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user, isFetched } = useGetUser();
  if (!user) {
    redirect('/login');
  }

  return (
    <section className="h-screen w-full flex">
      <Sidebar />
      <div className="p-4">{children}</div>
      <Toaster />
    </section>
  );
}
