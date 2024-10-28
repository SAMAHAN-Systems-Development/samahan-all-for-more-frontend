import '@/styles/globals.css';
import Sidebar from '../_components/Sidebar';
import { Toaster } from 'sonner';
import { UserProvider } from '@/lib/providers/UserProvider';

export default function AdminLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <section className="h-screen w-full flex">
        <Sidebar />
        <div className="p-4">{children}</div>
        <Toaster />
      </section>
    </UserProvider>
  );
}
